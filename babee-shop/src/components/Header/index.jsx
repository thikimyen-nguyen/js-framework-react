import { useState } from 'react';
import logo from './bshop-logo.png';
import { CartIcon } from '../CartIcon';

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
    setIsOpen(!isOpen);
    };
    return (
        <header className="text-white p-4">
            <div className='flex justify-between'>
                <div className='flex'>
                    <div className="self-center">
                        <img
                            src= {logo}
                            alt="Bshop Logo"
                            className="w-36"
                        />
                    </div>
                    <nav>
                        <ul className="p-4 hidden md:flex">
                            <li className='p-4 text-xl'>HOME</li>
                            <li className='p-4 text-xl'>CONTACT</li>
                        </ul>
                    </nav>
                    <div className="md:hidden self-center">
                        <button onClick={toggleMenu} className="text-white focus:outline-none">
                            <svg
                            className="size-12"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                            </svg>
                        </button>
                    </div>
                </div>
                
                <CartIcon />
            </div>
       
          {isOpen && (
            <nav>
                <ul className="md:hidden bg-black p-4 w-fit">
                    <li className='p-4 text-xl'>HOME</li>
                    <li className='p-4 text-xl'>CONTACT</li>
                </ul>
            </nav>
          )}
        </header>
      );
}


