import React from 'react'

const OperpsCard = () => {
  return (
    <div>
      <div className='text-center text-white font-manrope'>
            <p className='mt-32 text-sm text-[#7D8595]'>ETHOSX</p>
            <p className="px-12 font-bold mt-2 text-4xl ">OPerps - Derivatives Token</p>
            <button className="mt-4 mb-12 py-2 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-[#2ED3B7] text-[#2ED3B7] hover:border-[#67FFD1] hover:text-[#67FFD1] disabled:opacity-50 disabled:pointer-events-none dark:border-[#2ED3B7] dark:text-[#2ED3B7] dark:hover:text-[#67FFD1] dark:hover:border-[#67FFD1]">
                See whats new
            </button>
        </div>
        <div className="flex items-center justify-center mt-4 px-12 bg-black">
            <div className="flex flex-col md:flex-row bg-[#111213] rounded-2xl text-white w-full max-w-6xl">
                <div className="md:w-1/2 px-12 sm:px-32">
                <p className="sm:mt-52 mt-12 text-2xl sm:text-3xl">A derivatives token for trading and hedging.</p>
                <button className="button items-center relative inline-block px-6 py-3 bg-black mt-4 text-base font-semibold text-[#2ED3B7]  border-2 border-[#2ED3B7] rounded-2xl shadow-[0_4px_0_0_#2ED3B7] transition-all duration-200 ease-in-out cursor-pointer hover:translate-y-[-2px] hover:shadow-[0_6px_0_0_#2ED3B7] active:translate-y-[0px] active:shadow-none active:bg-gradient-to-br active:from-[#2ED3B7] active:to-[#2ED3B7]">
                    Try OPerps
                </button>
                </div>
                <div className="flex flex-col items-start bg-[#111213] rounded-2xl w-full md:w-1/2 text-black">
                    <img src="./trade.png" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default OperpsCard
