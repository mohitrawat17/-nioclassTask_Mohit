import React from 'react';
import { useSelector } from 'react-redux'; // Assuming you are using Redux to manage state



function FinishPage() {
  const name=useSelector(store=>store.landingpage.name)
  const questions=useSelector(store=>store.landingpage.questions)
  const timeData=useSelector(store=>store.testpage.questionTimer)
  const totalTime=useSelector(store=>store.testpage.totalTime)


  // Function to format time in HH:MM:SS
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString()} m, ${seconds.toString().padStart(2, '0')} s`;
  };


  const formatTime1 = (timeInSeconds) => {
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString()} Minutes, ${seconds.toString().padStart(2, '0')} Seconds`;
  };



  return (

    <div className='my-20 bg-white p-6 rounded shadow-lg"'>


      <h1 className='text-2xl max-sm:text-xl text-blue-600 font-semibold mb-4'>Thankyou for giving the test</h1>

      <h2 className='my-7 text-lg font-semibold mr-3 text-red-700'>Your name : <span className='text-black font-medium'>{name}</span></h2>











      <div className='my-7 flex max-sm:flex-col'>
        <h2 className='text-lg text-red-700 max-sm:text-base font-semibold mr-3 max-sm:mb-4'>Time taken on each Question :</h2>
 
        <div className='flex'>
        <div className='max-sm:mx-2 mx-7'>
        <h2 className='max-sm:text-sm flex justify-center font-semibold mb-4'>Question ID</h2>
        {questions.map((question, index) => (
            <li className='my-2 list-none' key={index}>
              {question}
            </li>
          ))}
        </div>


        {/* time */}
        <div className='max-sm:mx-2 mx-7'>
        <h2 className='font-semibold max-sm:text-sm mb-4 flex justify-center'>Time Taken</h2>
        {timeData.map((time, index) => (
            <li className='my-2 list-none flex justify-center' key={index}>
             {formatTime(time)}
            </li>
          ))}
        </div>
        </div>

      </div>


















      <div className='flex gap-1 max-sm:flex-col max-sm:text-base mt-7 text-lg font-semibold mr-3 text-red-700'>
        <p>Total time taken to complete the test :</p>
         <span className='text-black font-medium'>{formatTime1(totalTime)}</span>
      </div>
        

      </div>
  );
}

export default FinishPage;
