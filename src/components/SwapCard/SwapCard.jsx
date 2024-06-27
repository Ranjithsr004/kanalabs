import React from 'react';
import { Link } from 'react-router-dom';

const SwapCard = () => {
  return (
    <div>
      <div className='text-center text-white font-manrope'>
        <p className="mt-32 font-bold text-3xl sm:text-4xl">Cross-chain swap</p>
        <Link to='/swap'><button className="mt-4 mb-8 py-2 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-[#2ED3B7] text-[#2ED3B7] hover:border-[#67FFD1] hover:text-[#67FFD1] disabled:opacity-50 disabled:pointer-events-none dark:border-[#2ED3B7] dark:text-[#2ED3B7] dark:hover:text-[#67FFD1] dark:hover:border-[#67FFD1]">Try swap</button> </Link>
      </div>
      <div>
        <div className="flex items-center justify-center px-12 bg-black">
          <div className="flex gap-16 flex-col md:flex-row bg-[#111213] rounded-2xl p-8 md:p-12 text-white w-full max-w-7xl">
            <div className="md:w-1/2 mb-8 md:mb-0 px-1 mt-8 sm:mt-36">
              <p className="mb-6 text-2xl sm:text-4xl text-[#A5A5A6] font-manrope">Swap tokens natively using across <span className='font-semibold text-white'>Solana, Aptos, Ethereum, zksync, Arbitrum, Sui, Optimism, Polygon and more!</span></p>
              <Link to="/swap">
                <button className="button relative inline-block px-6 py-3 mt-4 text-lg font-semibold text-[#2ED3B7]  border-2 border-[#2ED3B7] rounded-2xl shadow-[0_4px_0_0_#2ED3B7] transition-all duration-200 ease-in-out cursor-pointer hover:translate-y-[-2px] hover:shadow-[0_6px_0_0_#2ED3B7] active:translate-y-[0px] active:shadow-none active:bg-gradient-to-br active:from-[#2ED3B7] active:to-[#2ED3B7]">
                  Swap now
                </button>
              </Link>
            </div>
            <div className="md:w-1/2 bg-gray-800 rounded-xl p-6 flex flex-col space-y-4 sm:mt-16 mb-16">
              <div className="flex items-center justify-between">
                <img src="./wallet.png" alt="Wallet" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwapCard;
