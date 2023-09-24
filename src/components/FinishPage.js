import React from 'react';
import { useSelector } from 'react-redux'; // Assuming you are using Redux to manage state



function FinishPage() {
  const name=useSelector(store=>store.landingpage.name)
  const questions=useSelector(store=>store.landingpage.questions)
  const timeData=useSelector(store=>store.testpage.questionTimer)
  const totalTime=useSelector(store=>store.testpage.totalTime)

console.log(timeData);

  // Function to format time in HH:MM:SS
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString()} Minutes, ${seconds.toString().padStart(2, '0')} Seconds`;
  };



  return (
    <div className='py-8'>


    <div className=' mx-auto bg-white p-6 rounded shadow-lg"'>


      <h1 className='text-2xl text-blue-600 font-semibold mb-4'>Thankyou for giving the test</h1>

      <h2 className='my-7 text-lg font-semibold mr-3'>Your name : {name}</h2>











      <div className='my-7 flex '>
        <h2 className='text-lg font-semibold mr-3'>Time taken on each Question :</h2>
        <div className='mx-7'>
        <h2 className='flex justify-center font-semibold mb-4'>Question ID</h2>
        {questions.map((question, index) => (
            <li className='my-2 list-none' key={index}>
              {question}
            </li>
          ))}
        </div>


        {/* time */}
        <div className='mx-9'>
        <h2 className='font-semibold mb-4 flex justify-center'>Time Taken</h2>
        {timeData.map((time, index) => (
            <li className='my-2 list-none flex justify-center' key={index}>
             {formatTime(time)}
            </li>
          ))}
        </div>

      </div>


















      <div className='mt-7 text-lg font-semibold mr-3'>
        Total time taken to complete the test : {formatTime(totalTime)}
      </div>
        

      </div>


    </div>
  );
}

export default FinishPage;
