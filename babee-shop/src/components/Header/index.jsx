import { useState } from 'react';
import logo from './bshop-logo.png';

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
                
                <div className='p-4 self-center'>
                    <svg className='size-12' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#ffca3a" d="M2.5 4.25a.75.75 0 0 1 .75-.75h.558c.95 0 1.52.639 1.845 1.233c.217.396.374.855.497 1.271A1.29 1.29 0 0 1 6.25 6h12.498c.83 0 1.43.794 1.202 1.593l-1.828 6.409a2.75 2.75 0 0 1-2.644 1.996H9.53a2.75 2.75 0 0 1-2.652-2.022l-.76-2.772l-1.26-4.248l-.001-.008c-.156-.567-.302-1.098-.52-1.494C4.128 5.069 3.96 5 3.809 5H3.25a.75.75 0 0 1-.75-.75M9 21a2 2 0 1 0 0-4a2 2 0 0 0 0 4m7 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4"/></svg>
                </div>
            </div>
       
          {isOpen && (
            <nav>
                <ul className="md:hidden bg-black p-4">
                    <li className='p-4 text-xl'>HOME</li>
                    <li className='p-4 text-xl'>CONTACT</li>
                </ul>
            </nav>
          )}
        </header>
      );
}


