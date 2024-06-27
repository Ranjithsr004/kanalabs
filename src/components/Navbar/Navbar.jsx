import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  return (
    <div className='mb-16'>
    <nav className="fixed top-0 left-0 right-0 z-10 backdrop-filter backdrop-blur-lg bg-opacity-5 shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 text-white">
            <div className="flex items-center justify-between h-16">
                <div className="flex">
                    <img src="./logo.png" alt="Logo" />
                    <h4 className="text-4xl font-urbanist ml-4">
                        <span className="font-semibold">Kana</span>labs
                    </h4>
                </div>
                <div className="flex space-x-4">
                    <a href="#"><RxHamburgerMenu size="1.5em" /></a>
                </div>
            </div>
        </div>
    </nav>
</div>
  )
}

export default Navbar
