// Navbar.js

import React from 'react';
import { MdSettings } from 'react-icons/md';
import { CiSearch } from "react-icons/ci";
const Topbar = () => {
  return (
    <nav className="pl-12 flex font-urbanist justify-between items-center bg-[#111213] text-white px-4 py-3">
      <div className="flex space-x-32">
        <button className=" text-white font-semibold border border-gray-700 rounded-2xl px-4 py-2 ">Your Balance 
            <span className='font-light text-gray-400 pl-32'>Wallet not connected</span></button>
        <button className=" text-white flex font-light border border-gray-700 rounded-2xl px-24 py-2 ">
            <CiSearch size="1.5em" className='mr-4'/>Search </button>
        <button className=" text-[#2ED3B7] flex font-light border border-gray-700 rounded-2xl px-24 py-2 ">
            <img src="./connect.png" alt="" className='mr-4' />Connect Wallet</button>
      </div>
      <div>
        <MdSettings size={24} className="cursor-pointer hover:text-gray-400" />
      </div>
    </nav>
  );
};

export default Topbar;
