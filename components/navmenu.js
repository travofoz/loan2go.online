'use client';
import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import { siteLinks } from '../data/config';
//import './globals.css';

const Navmenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <div className="lg:hidden z-50">
            <button
                onClick={toggleMenu}
                type="button"
                className="inline-flex items-center justify-center p-2 text-white hover:text-white hover:bg-rose-900"
                aria-controls="mobile-menu"
                aria-expanded="false"
            >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                    <FaBars className="block h-6 w-6" aria-hidden="true" />
                ) : (
                    <FaBars className="block h-6 w-6" aria-hidden="true" />
                )}
            </button>

            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-50 flex items-start pt-32 justify-center ">
                    <div className="bg-emerald-900 backdrop-blur-md p-4 rounded-lg border-2 border-yellow-300 w-64 relative">
                        <h2 className="text-yellow-300 text-xl font-bold mb-4 font-shadow">Navigation</h2>
                        <ul className="space-y-2">
                            {siteLinks.map((link, index) => (
                                <li key={index} className="mobile-nav-link" onClick={closeMenu}>
                                    <Link className="text-white hover:text-yellow-200" href={link.href}>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <button
                            onClick={closeMenu}
                            type="button"
                            className="absolute top-2 right-2 text-white hover:text-yellow-300"
                        >
                            <FaTimes className="block h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navmenu;
