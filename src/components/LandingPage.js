import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addName, addQuestions, removeQuestions } from '../redux/LandingPageSlice';

function LandingPage() {
  const questionIDs = [
    'AreaUnderTheCurve_21',
    'BinomialTheorem_13',
    'BinomialTheorem_24',
    'AreaUnderTheCurve_15',
    'AreaUnderTheCurve_2',
    'BinomialTheorem_3',
    'BinomialTheorem_4',
    'AreaUnderTheCurve_5',
  ];



  const dispatch=useDispatch();
  const questions=useSelector(store=>store.landingpage.questions)
  const userName=useSelector(store=>store.landingpage.name)


  // Function to handle checkbox selection
  const handleCheckboxChange = (questionID) => {
    if (questions.includes(questionID)) {
      // If already selected, remove it
      dispatch(removeQuestions(questionID));

    } else {
      // If not selected, add it
      dispatch(addQuestions(questionID));
    }
  };



  // Function to calculate total test time
  const calculateTotalTime = () => {
    const totalTime = questions.length * 5; // 5 minutes per question
   
    return totalTime;
  };

  console.log(questions,userName);

  return (
    <div className=" bg-gray-100  py-8">



      <div className="max-w-lg mx-auto bg-white p-6 rounded shadow-lg">


        <h1 className="text-2xl text-blue-600 font-semibold mb-4">Welcome to the Math Test at Neoclass</h1>
        <div className="flex mb-4">
          <h2 className="text-lg font-semibold mr-3">Enter your name : </h2>
          <input 
            type="text"
            placeholder='Name'
            className="flex-1 border-b outline-none border-gray-300"
            value={userName}
            onChange={(e) => dispatch(addName(e.target.value))}
          />
        </div>


        <h2 className="text-lg font-semibold mb-2">Select Questions for Your Test:</h2>
        <ul>
          {questionIDs.map((questionID) => (
            <li key={questionID} className="mb-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-500 h-5 w-5 mr-2"
                  checked={questions.includes(questionID)}
                  onChange={() => handleCheckboxChange(questionID)}
                />
                {questionID}
              </label>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-lg font-semibold">
          Total Test Time: <span>{calculateTotalTime()}</span> minutes
        </p>

        <Link to="/test" className="flex justify-end mb-4">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Start Test
          </button>
        </Link>

        
      </div>

     
      
    </div>
  );
}

export default LandingPage;
