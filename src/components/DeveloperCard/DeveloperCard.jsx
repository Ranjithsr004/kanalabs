import React from 'react'
import { FiCopy } from 'react-icons/fi';

const DeveloperCard = () => {
  return (
    <div className='mt-40'>
      <div className='text-center text-white font-manrope'>
            <p className=" font-bold mt-2 text-4xl ">For Developers</p>
            <button className="mt-4 mb-12 py-2 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-[#2ED3B7] text-[#2ED3B7] hover:border-[#67FFD1] hover:text-[#67FFD1] disabled:opacity-50 disabled:pointer-events-none dark:border-[#2ED3B7] dark:text-[#2ED3B7] dark:hover:text-[#67FFD1] dark:hover:border-[#67FFD1]">
                Explore Documentation
            </button>
        </div>
        <div>
      <div className="flex items-center font-light justify-center px-4 sm:px-8 lg:px-12 mt-4 bg-black">
        <div className="flex flex-col md:flex-row gap-4 w-full max-w-6xl">
          <div className="flex flex-col items-start px-4 sm:px-12 md:px-8 lg:px-24 justify-start p-8 bg-[#111213] rounded-2xl w-full md:w-1/2 text-white">
            <p className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-8 sm:mt-12 md:mt-16 font-manrope">Mirai SDK</p>
            <p className="mt-4 font-light">integrate with other dApps</p>
            <button className="mt-5 mb-12 py-2 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-[#2ED3B7] text-[#2ED3B7] hover:border-[#67FFD1] hover:text-[#67FFD1] disabled:opacity-50 disabled:pointer-events-none dark:border-[#2ED3B7] dark:text-[#2ED3B7] dark:hover:text-[#67FFD1] dark:hover:border-[#67FFD1]">
              Read Documentation
            </button>
            <div className="flex items-center justify-center mb-8 sm:mb-12 md:mb-16">
              <div className="flex flex-col border border-neutral-800 bg-neutral-900/50 rounded-2xl p-4 sm:p-6 md:p-8 text-white w-full max-w-4xl">
                <div className="flex flex-row justify-between items-center bg-black rounded-2xl p-2 sm:p-4 mb-4 border border-neutral-800 text-white">
                  <p className="text-sm sm:text-base">npm install @kanalabs/paymaster-sdk</p>
                  <FiCopy className="text-2xl sm:text-3xl cursor-pointer hover:text-gray-400" />
                </div>
                <div className="flex mb-4">
                  <span className="text-sm sm:text-xl">or</span>
                </div>
                <div className="flex flex-row justify-between items-center bg-black rounded-2xl p-2 sm:p-4 mb-4 border border-neutral-800 text-white">
                  <p className="text-sm sm:text-base">yarn add @kanalabs/paymaster-sdk</p>
                  <FiCopy className="text-2xl sm:text-3xl cursor-pointer hover:text-gray-400" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start px-4 sm:px-12 md:px-8 lg:px-24 justify-start p-8 bg-[#111213] rounded-2xl w-full md:w-1/2 text-white">
            <p className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-8 sm:mt-12 md:mt-16 font-manrope">Cross-chain Swap</p>
            <p className="mt-4 font-light">integrate with other dApps</p>
            <button className="mt-5 mb-12 py-2 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-[#2ED3B7] text-[#2ED3B7] hover:border-[#67FFD1] hover:text-[#67FFD1] disabled:opacity-50 disabled:pointer-events-none dark:border-[#2ED3B7] dark:text-[#2ED3B7] dark:hover:text-[#67FFD1] dark:hover:border-[#67FFD1]">
              Read Documentation
            </button>
            <div className="flex items-center justify-center mb-8 sm:mb-12 md:mb-16">
              <div className="flex flex-col border border-neutral-800 bg-neutral-900/50 rounded-2xl p-4 sm:p-6 md:p-8 text-white w-full max-w-4xl">
                <div className="flex flex-row justify-between items-center bg-black rounded-2xl p-2 sm:p-4 mb-4 border border-neutral-800 text-white">
                  <p className="text-sm sm:text-base">npm install @kanalabs/paymaster-sdk</p>
                  <FiCopy className="text-2xl sm:text-3xl cursor-pointer hover:text-gray-400" />
                </div>
                <div className="flex mb-4">
                  <span className="text-sm sm:text-xl">or</span>
                </div>
                <div className="flex flex-row justify-between items-center bg-black rounded-2xl p-2 sm:p-4 mb-4 border border-neutral-800 text-white">
                  <p className="text-sm sm:text-base">yarn add @kanalabs/paymaster-sdk</p>
                  <FiCopy className="text-2xl sm:text-3xl cursor-pointer hover:text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default DeveloperCard
