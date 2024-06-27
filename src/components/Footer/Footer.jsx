import React from 'react'
import { FaTelegram, FaTwitter, FaMedium, FaDiscord } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
const Footer = () => {
  return (
    <div>
      <footer className="text-white">
        <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:justify-between">
            <div className="flex flex-col lg:px-1 md:px-12  items-center mb-8 lg:mb-0 hidden lg:block md:block">
              <div className="flex items-center mb-2 ">
                <img src="./logo.png" alt="Logo" className="h-12" />
                <h4 className="text-4xl font-urbanist ml-4"><span className="font-semibold">Kana</span>labs</h4>
              </div>
              <p className="text-sm text-gray-500">© Copyright 2023 Kana Labs</p>
            </div>
          
          <div className="grid grid-cols-2 mt-4 px-12 font-urbanist gap-10 sm:gap-40 lg:grid-cols-3">
            <div>
              <p className="font-medium text-sm text-gray-500">COMPANY</p>
              <nav className="flex flex-col mt-2 space-y-2 text-sm ">
                <a className="hover:opacity-75" href="#">Who we are</a>
                <a className="hover:opacity-75" href="#">FAQs</a>
                <a className="hover:opacity-75" href="#">Blog</a>
              </nav>
            </div>
            <div>
              <p className="font-medium text-sm text-gray-500">LINKS</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm">
                <a className="hover:opacity-75" href="#">Documentation</a>
                <a className="hover:opacity-75" href="#">SDK Docs</a>
                <a className="hover:opacity-75" href="#">Launch App</a>
              </nav>
            </div>  
            <div>
              <p className="font-medium text-sm text-gray-500">FOLLOW US</p>
              <div className="flex mt-4 space-x-4">
                <FaTelegram className="text-2xl cursor-pointer" />
                <FaTwitter className="text-2xl cursor-pointer" />
                <FaMedium className="text-2xl cursor-pointer" />
                <FaDiscord className="text-2xl cursor-pointer" />
              </div>
              <button class="mt-4 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-md group bg-gradient-to-br from-[#4F9DFF] to-[#67FFD1]  dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
              <span class="relative px-10 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md ">
              Contact Us
              </span>
              </button>
            </div>
          </div>
        </div>
        </div>
        <div class="flex flex-col-reverse gap-5 md:flex-row items-center justify-center pb-7">
        <ul class="flex items-center gap-1">
          <li><a href="javascript:;"
              class="text-gray-500 text-sm font-normal transition-all duration-300 hover:text-indigo-600 focus-within:text-indigo-600 focus-within:outline-0">Terms&Conditions | </a>
          </li>
          <li><a href="javascript:;"
              class="text-gray-500 text-sm font-normal transition-all duration-300 hover:text-indigo-600 focus-within:text-indigo-600 focus-within:outline-0">Privacy Policy |</a>
          </li>
          <li><a href="javascript:;"
              class="text-gray-500 text-sm font-normal transition-all duration-300 hover:text-indigo-600 focus-within:text-indigo-600 focus-within:outline-0">Security</a>
          </li>
        </ul>
        <div class="flex items-center justify-end text-gray-500 text-sm">
            <AiOutlineMail className="text-xl text-gray-500" />
          <p>hello@kanalabs.io</p>
        </div>
      </div>
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8  block md:hidden lg:hidden">
          <div className="flex flex-col lg:flex-row lg:justify-between">
            <div className="flex flex-col items-center mb-8 lg:mb-0">
              <div className="flex items-center mb-2">
                <img src="./logo.png" alt="Logo" className="h-12" />
                <h4 className="text-4xl font-urbanist ml-4"><span className="font-semibold">Kana</span>labs</h4>
              </div>
              <p className="text-sm text-gray-500">© Copyright 2023 Kana Labs</p>
            </div>
          </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer
