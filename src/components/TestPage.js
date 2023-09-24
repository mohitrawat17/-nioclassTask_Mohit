import { MathJax, MathJaxContext } from 'better-react-mathjax';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addIndex, addQuestionTimer, addTotalTime } from '../redux/TestPageSlice';


function TestPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const questions =useSelector(store=>store.landingpage.questions)
  const [testQuestions,setTestQuestions]=useState([])
  const[totalTime,setTotalTime]=useState(0);



  // total time for the test
useEffect(() => {
  const intervalTotal = setInterval(() => {
    setTotalTime((prevTimer) => prevTimer + 1);
  }, 1000); // Update the timer every second

  // Clear the interval when the component unmounts
  return () => clearInterval(intervalTotal);
}, []);
  
  const getQuestions=async(id)=>{
    try {
      const data=await fetch(`https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=${id}`)
      const json= await data.json()
      setTestQuestions(json[0].Question);
      
    } catch (error) {
      console.log('Eror while fetching data',error);
    }
  }


  useEffect(()=>{
    getQuestions(questions[currentQuestionIndex])
  },[currentQuestionIndex])




  const [timer, setTimer] = useState(0); // Timer in seconds

  // Function to format the timer value as HH:MM:SS
  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;
    return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    // Start the timer when the component mounts
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000); // Update the timer every second

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);



// console.log(timer,currentQuestionIndex);

  const dispatch=useDispatch();

  const handleNextQuestion = () => {
    // Move to the next question if available
    if (currentQuestionIndex < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      dispatch(addQuestionTimer(timer))
      dispatch(addIndex(currentQuestionIndex+1));
      setTimer(0);
    }
  };


  const handlePreviousQuestion = () => {
    // Move to the previous question if available
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      dispatch(addIndex(currentQuestionIndex-1));
      setTimer(0)
    }
  };

  const handleSubmitTest = () => {
    // Add logic to submit the test results
    alert('Test submitted!'); // Example alert for demonstration

    dispatch(addQuestionTimer(timer)) //for last question
    dispatch(addTotalTime(totalTime))
  };




  const config = {
    loader: { load: ["input/asciimath"] },
    asciimath: {
      delimiters: [['$','$'], ['`','`']]
    }
};








  return (
    <MathJaxContext config={config}>
    <div className="py-8 mt-16">

      <div className="w-full h-full mx-auto bg-white p-6 rounded shadow-lg">

        <div className=" flex justify-end mb-4">
          <span className="text-lg font-semibold">Timer: {formatTime(timer)}</span>
        </div>

      
        <div className="mb-4">
          <p className="text-lg font-semibold"><span className=' text-xl text-red-700'>{`Question ${currentQuestionIndex+1} : `}</span><MathJax>{testQuestions}</MathJax></p>
        </div>
        


        <div className="flex justify-between w-full  my-8">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
            onClick={handlePreviousQuestion}
            disabled={currentQuestionIndex === 0}
          >
            Previous
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleNextQuestion}
            disabled={currentQuestionIndex === questions.length - 1}
          >
            Next Question
          </button>
        </div>


        <div className="mb-4">
          {/* Add navigation bar/panel here if needed */}
        </div>

       <div  className='flex justify-end mb-4' >
        <Link to="/finish" className="bg-red-500 text-white px-4 py-2 rounded" onClick={handleSubmitTest}>
            Submit Test
        </Link>
</div>

      </div>


    </div>
    </MathJaxContext>
  );
}

export default TestPage;
