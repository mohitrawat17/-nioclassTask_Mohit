import { MathJax, MathJaxContext } from "better-react-mathjax";
import React, { useState, useEffect } from "react";

function Tester() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [testQuestions, setTestQuestions] = useState("");
  const [totalTime, setTotalTime] = useState(0);
  const arr = [
    "AreaUnderTheCurve_15",
    "AreaUnderTheCurve_21",
    "BinomialTheorem_13",
    "BinomialTheorem_24",
    "AreaUnderTheCurve_2",
    "BinomialTheorem_3",
    "BinomialTheorem_4",
    "AreaUnderTheCurve_5",
  ];

  useEffect(() => {
    getQuestions(arr[currentQuestionIndex]);
  }, [currentQuestionIndex]);

  useEffect(() => {
    const intervalTotal = setInterval(() => {
      // Increment the total time every second
      setTotalTime((prevTimer) => prevTimer + 1);
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalTotal);
  }, []);

  const getQuestions = async (id) => {
    try {
      const data = await fetch(
        `https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=${id}`
      );
      const json = await data.json();
      console.log(json[0].Question);
      setTestQuestions(json[0].Question);
    } catch (error) {
      console.log("Error while fetching data", error);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < arr.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const config = {
    loader: { load: ["input/asciimath"] },
    asciimath: {
      delimiters: [
        ["$", "$"],
        ["`", "`"],
      ],
    },
  };

  return (
    <MathJaxContext config={config}>
      <MathJax key={testQuestions}>{testQuestions && testQuestions}</MathJax>
      <button
        className="max-sm:px-2 max-sm:py-1 bg-blue-500 text-white px-4 py-2 rounded mr-2"
        onClick={handleNextQuestion}
        disabled={currentQuestionIndex === arr.length - 1}
      >
        Next
      </button>
      <button
        className="max-sm:px-2 max-sm:py-1 bg-blue-500 text-white px-4 py-2 rounded mr-2"
        onClick={handlePreviousQuestion}
        disabled={currentQuestionIndex === 0}
      >
        Previous
      </button>
    </MathJaxContext>
  );
}

export default Tester;
