import React from 'react';
import { MdDashboard, MdHistory, MdSettings } from 'react-icons/md';
import { MdOutlineSync } from "react-icons/md";
import { BiDonateBlood } from "react-icons/bi";
import { FaScaleBalanced } from "react-icons/fa6";
import { MdOutlineInsertChart } from "react-icons/md";
import { CiGrid41 } from "react-icons/ci";
import { MdHelpOutline } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="hidden md:flex flex-col items-center justify-start bg-[#111213] h-full w-16 fixed top-0 left-0 z-50">
      <div className="my-8">
        <a href="#" className="block p-4 text-white hover:bg-[#2ED3B7] hover:text-black transition duration-300">
          <img src="./logo.png" alt="" />
        </a>
        <a href="#" className="block p-4 text-white hover:bg-[#2ED3B7] hover:text-black transition duration-300">
            <MdOutlineSync size="2em"/>
        </a>
        <a href="#" className="block p-4 text-white hover:bg-[#2ED3B7] hover:text-black transition duration-300">
            <BiDonateBlood size="2em"/>
        </a>
        <a href="#" className="block p-4 text-white hover:bg-[#2ED3B7] hover:text-black transition duration-300">
            <FaScaleBalanced size="2em"/>
        </a>
        <a href="#" className="block p-4 text-white hover:bg-[#2ED3B7] hover:text-black transition duration-300">
            <MdOutlineInsertChart size="2em"/>
        </a>
        <a href="#" className="block p-4 text-white hover:bg-[#2ED3B7] hover:text-black transition duration-300">
            <CiGrid41 size="2em"/>
        </a>
      </div>
      <div class="mt-auto h-16 flex items-center w-full">
			<button
				class="h-16 w-10 mx-auto flex justify-center items-center w-full focus:text-orange-500 hover:bg-red-200 focus:outline-none">
        <MdHelpOutline size="2em" color='white'/>
			</button>
		</div>
    </div>
  );
};

export default Sidebar;
