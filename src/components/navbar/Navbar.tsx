import { useAppContext } from '@/context/AppContext';
import Link from 'next/link';
import React, { useState } from 'react';

export const Navbar: React.FC = () => {
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const { userData } = useAppContext()

    const toggleUserMenu = () => {
        setIsUserMenuOpen(!isUserMenuOpen);
    };

    return (
        <nav className="bg-white border-gray-200 dark:bg-white fixed top-0 left-[200px] right-0 z-10">
            <div className="max-w-screen-xl flex items-center justify-between mx-auto py-2 px-8 ">

                <div className="relative hidden md:block">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none ">
                        <svg
                            className="w-4 h-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                        </svg>
                        <span className="sr-only">Search icon</span>
                    </div>
                    <input
                        type="text"
                        id="search-navbar"
                        className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-300 dark:border-gray-400 dark:placeholder-gray-400 dark:text-gray dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search..."
                    />
                </div>

                <button
                    data-collapse-toggle="navbar-search"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-search"
                    aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>

                <div className="flex items-center space-x-3 md:space-x-0">
                    <div className="relative">
                        <button
                            type="button"
                            className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                            id="user-menu-button"
                            aria-expanded={isUserMenuOpen}
                            onClick={toggleUserMenu}
                        >
                            <span className="sr-only">Open user menu</span>
                            <img
                                className="w-8 h-8 rounded-full"
                                src="./icons/perfil.jpg"
                                alt="user photo"
                            />
                        </button>
                        {/* Dropdown menu */}
                        {isUserMenuOpen && (
                            <div
                                className="absolute right-0 mt-2 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                                id="user-dropdown"
                                role="menu"
                                aria-orientation="vertical"
                                aria-labelledby="user-menu-button"
                            >
                                <div className="px-4 py-3">
                                    <span className="block text-sm text-gray-900 dark:text-white">
                                        {userData?.email}
                                    </span>
                                    <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
                                        {userData?.email}
                                    </span>
                                </div>
                                <ul className="py-2">
                                    <li>
                                        <Link
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                        >
                                            Dashboard
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                        >
                                            Settings
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                        >
                                            Earnings
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                        >
                                            Sign out
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                    <button
                        data-collapse-toggle="navbar-user"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-user"
                        aria-expanded={isUserMenuOpen}
                        onClick={toggleUserMenu}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
};
