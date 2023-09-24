import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Foooter from './Foooter'
import { Provider } from 'react-redux';
import store from '../redux/store';

const Body = () => {
  return (
    <Provider store={store}>
    <div className='bg-gray-100 min-h-screen flex flex-col'>
      <Header />
      <div className='flex-grow'>
        <Outlet />
      </div>
      <Foooter />
    </div>
    </Provider>
  );
};

export default Body
