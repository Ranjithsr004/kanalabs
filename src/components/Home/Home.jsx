import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import Navbar from '../Navbar/Navbar';
import SwapCard from '../SwapCard/SwapCard';
import TradeCard from '../TradeCard/TradeCard';
import OperpsCard from '../OperpsCard/OperpsCard';
import DeveloperCard from '../DeveloperCard/DeveloperCard';
import Footer from '../Footer/Footer';

const Home = () => {
  return (
    <div>
      <Navbar/>
      <div className="flex items-center font-urbanist text-white justify-center px-12 h-screen bg-cover bg-center bg-no-repeat bg-[url('/public/bg.png')]">
        <div className="text-center mx-8 -mt-32">
          <h1 className="sm:text-8xl text-4xl mb-2 font-urbanist font-semibold text-gray-800 bg-gradient-to-r from-[#67FFD1] to-[#4F9DFF] inline-block text-transparent bg-clip-text">
            Connected and <br />simplified web3
          </h1>
          <p className="mt-4 sm:text-lg text-sm font-manrope">Where Chains & Experiences Unite</p>
          <div className="flex flex-col sm:flex-row gap-16 px-12 sm:px-24 lg:px-48 mt-4 items-center justify-center text-center">
            <button className="button relative inline-block px-6 py-3 mt-4 sm:text-lg text-sm font-semibold text-[#2ED3B7] border-2 border-[#2ED3B7] rounded-2xl shadow-[0_4px_0_0_#2ED3B7] transition-all duration-200 ease-in-out cursor-pointer hover:translate-y-[-2px] hover:shadow-[0_6px_0_0_#2ED3B7] active:translate-y-[0px] active:shadow-none active:bg-gradient-to-br active:from-[#2ED3B7] active:to-[#2ED3B7]">
              Launch App
            </button>
            <h2 className="sm:mt-6 mt-0 sm:text-lg text-sm font-semibold hover:text-[#2ED3B7]">Learn More</h2>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-8 sm:px-16 lg:px-40 -mt-36 mb-12">
        <div className="flex flex-col border border-gray-800 shadow-sm rounded-xl">
          <div className="p-4 md:p-5 bg-[url('/public/card1.png')] bg-cover opacity-60 hidden lg:block">
            <p className="mt-2 text-lg text-gray-100">Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="bg-gray-100 rounded-b-xl py-3 px-4 md:py-4 md:px-5 dark:bg-neutral-900 dark:border-neutral-500">
            <div className="flex justify-between items-center">
              <p className="mt-1 text-base text-white">Trade</p>
              <FaExternalLinkAlt className="mt-2" color="white" />
            </div>
          </div>
        </div>
        <div className="flex flex-col border border-gray-800 shadow-sm rounded-xl">
          <div className="p-4 md:p-5 bg-[url('/public/card1.png')] bg-cover opacity-60 hidden lg:block">
            <p className="mt-2 text-lg text-gray-100">Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="bg-gray-100 rounded-b-xl py-3 px-4 md:py-4 md:px-5 dark:bg-neutral-900 dark:border-neutral-500">
            <div className="flex justify-between items-center">
              <p className="mt-1 text-base text-white">Swap</p>
              <FaExternalLinkAlt className="mt-2" color="white" />
            </div>
          </div>
        </div>
        <div className="flex flex-col border border-gray-800 shadow-sm rounded-xl">
          <div className="p-4 md:p-5 bg-[url('/public/card1.png')] bg-cover opacity-60 hidden lg:block">
            <p className="mt-2 text-lg text-gray-100">Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="bg-gray-100 rounded-b-xl py-3 px-4 md:py-4 md:px-5 dark:bg-neutral-900 dark:border-neutral-500">
            <div className="flex justify-between items-center">
              <p className="mt-1 text-base text-white">Perps</p>
              <FaExternalLinkAlt className="mt-2" color="white" />
            </div>
          </div>
        </div>
        <div className="flex flex-col border border-gray-800 shadow-sm rounded-xl">
          <div className="p-4 md:p-5 bg-[url('/public/card1.png')] bg-cover opacity-60 hidden lg:block">
            <p className="mt-2 text-lg text-gray-100">Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="bg-gray-100 rounded-b-xl py-3 px-4 md:py-4 md:px-5 dark:bg-neutral-900 dark:border-neutral-500">
            <div className="flex justify-between items-center">
              <p className="mt-1 text-base text-white">OPerps</p>
              <FaExternalLinkAlt className="mt-2" color="white" />
            </div>
          </div>
        </div>
      </div>
      <SwapCard />
      <TradeCard />
      <OperpsCard/>
      <DeveloperCard />
      <Footer />
    </div>
  );
};

export default Home;
