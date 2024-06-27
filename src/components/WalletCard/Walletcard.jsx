import React from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar';
import { TbCircleMinus2 } from "react-icons/tb";
import { LuArrowDownUp } from "react-icons/lu";

const WalletCard = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col ml-16"> 
        <Topbar />
        <div className="font-manrope justify-center items-center mt-12">
          <div className="flex items-center justify-between px-4 py-2">
            <div className="flex items-center px-8">
              <button className="flex items-center space-x-2 border border-gray-700 bg-[#111213] text-white px-6 py-3 rounded-t-xl">
                <img src="./same.png" alt="" />
                <span>Same-chain</span>
              </button>
              <button className="flex items-center space-x-2 bg-[#0f0f11] border border-gray-700 text-white px-6 py-3 rounded-md">
                <img src="./cross.png" alt="" />
                <span>Cross-chain</span>
              </button>
            </div>
            <div className="flex items-center w-1/2 mr-10">
              <img src="grid1.png" alt="Logo" />
            </div>
          </div>
          <div className="items-center font-light justify-center px-4 sm:px-8 lg:px-12 -mt-2 bg-black">
            <div className="flex flex-col md:flex-row gap-4 w-full max-w-16xl">
              <div className="flex flex-col items-start px-4 border border-gray-700 sm:px-6 md:px-8 lg:px-16 justify-start p-2 bg-[#111213] rounded-r-xl w-full md:w-1/2 text-white">
                <div className="flex items-center justify-between w-full mt-8">
                  <p className="text-xl font-semibold font-manrope">Same-chain Swap</p>
                  <div className="flex items-center space-x-4">
                    <img src="./refresh.png" alt="Icon 1" />
                    <img src="./grid.png" alt="Icon 2" />
                  </div>
                </div>
                <div className="flex justify-center mt-4  mb-6">
                  <div className="flex gap-3 max-w-5xl flex-wrap">
                    <img src="/logo1.png" alt="Logo 1" className="w-12 h-12 object-contain" />
                    <img src="/logo2.png" alt="Logo 2" className="w-12 h-12 object-contain" />
                    <img src="/logo3.png" alt="Logo 3" className="w-12 h-12 object-contain" />
                    <img src="/logo4.png" alt="Logo 4" className="w-12 h-12 object-contain" />
                    <img src="/logo5.png" alt="Logo 5" className="w-12 h-12 object-contain" />
                    <img src="/logo6.png" alt="Logo 6" className="w-12 h-12 object-contain" />
                    <img src="/logo7.png" alt="Logo 7" className="w-12 h-12 object-contain" />
                    <img src="/logo8.png" alt="Logo 8" className="w-12 h-12 object-contain" />
                    <img src="/logo9.png" alt="Logo 9" className="w-12 h-12 object-contain" />
                  </div>
                </div>
                <div className="items-center justify-center mb-8 sm:mb-12 md:mb-16">
                  <div className="flex gap-16 sm:flex-row border border-neutral-800 bg-black rounded-2xl p-4 sm:p-6 md:p-8 text-white w-full max-w-4xl space-y-4 sm:space-y-0 sm:space-x-4">
                    <div className="flex-2">
                      <p className="text-gray-400">Pay from <span className="text-[#2ED3B7] font-semibold">Connect Wallet</span></p>
                      <p className="text-gray-400 text-xl mt-4">0.00</p>
                      <p className="border-t mt-4 border-gray-700"></p>
                      <p className="text-gray-400 text-sm mt-4">USD 0</p>
                    </div>
                    <div className="flex-1 px-2 flex flex-col pl-24">
                      <div className="flex flex-row items-center justify-between bg-neutral-900/50 rounded-2xl p-2 sm:p-3 border border-neutral-800">
                        <div className="text-2xl sm:text-3xl cursor-pointer -mt-2 hover:text-gray-400">
                        </div>
                        <TbCircleMinus2 className="text-2xl sm:text-3xl cursor-pointer -mt-2 hover:text-gray-400" />
                        <p className="text-sm sm:text-base ml-4"><span className="font-semibold text-xl">Tokens</span><br /> of Chain</p>
                      </div>
                      <div className="flex justify-end mt-4">
                        <p className="text-gray-400 text-sm mt-3">Balance - </p>
                      </div>
                    </div>
                  </div>
                  <div className='justify-center items-center flex'>
                    <LuArrowDownUp size="2em" color='gray' className='y-10'/>
                </div>
                  <div className="flex gap-16 sm:flex-row border border-neutral-800 bg-black rounded-2xl p-4 sm:p-6 md:p-8 text-white w-full max-w-4xl space-y-4 sm:space-y-0 sm:space-x-4">
                    <div className="flex-2">
                      <p className="text-gray-400">Receive to <span className="text-[#2ED3B7] font-semibold">Connect Wallet</span></p>
                      <p className="text-gray-400 text-xl mt-4">0.00</p>
                      <p className="border-t mt-4 border-gray-700"></p>
                      <p className="text-gray-400 text-sm mt-4">USD 0</p>
                    </div>
                    <div className="flex-1 px-2 flex flex-col pl-24">
                      <div className="flex flex-row items-center justify-between bg-neutral-900/50 rounded-2xl p-2 sm:p-3 border border-neutral-800">
                        <div className="text-2xl sm:text-3xl cursor-pointer -mt-2 hover:text-gray-400">
                        </div>
                        <TbCircleMinus2 className="text-2xl sm:text-3xl cursor-pointer -mt-2 hover:text-gray-400" />
                        <p className="text-sm sm:text-base ml-4"><span className="font-semibold text-xl">Tokens</span><br /> of Chain</p>
                      </div>
                      <div className="flex justify-end mt-4">
                        <p className="text-gray-400 text-sm mt-3">Balance - </p>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="button items-center relative inline-block px-32 md:px-32 lg:px-60 ml-2 mb-4 py-2 bg-black -mt-8 text-base font-semibold text-[#2ED3B7] border-2 border-[#2ED3B7] rounded-2xl shadow-[0_4px_0_0_#2ED3B7] transition-all duration-200 ease-in-out cursor-pointer hover:translate-y-[-2px] hover:shadow-[0_6px_0_0_#2ED3B7] active:translate-y-[0px] active:shadow-none active:bg-gradient-to-br active:from-[#2ED3B7] active:to-[#2ED3B7]">
                  Swap Now
                </button>
              </div>
            </div>
          </div>
          <div className="px-4 sm:px-8 lg:px-12 mt-4 w-full max-w-8xl flex ">
            <button className="relative flex items-center justify-between py-7 px-48 md:px-56 lg:px-[338px] mb-8 bg-[#111213]  border border-gray-700 text-gray-500 rounded-2xl">
              <span className="absolute left-4">Additional details</span>
              <span className="absolute right-4"><MdKeyboardArrowDown /></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletCard;
