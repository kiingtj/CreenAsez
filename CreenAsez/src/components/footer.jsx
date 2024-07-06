import React, { useEffect, useState } from 'react';
import { initFlowbite } from 'flowbite';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const footer = () => {

    useEffect(() => {
        initFlowbite();
    }, []);

    return (
        <footer className="bg-white shadow mt-20 text-black">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="http://localhost:5173" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap">
                            <img
                                src="./src/assets/images/logo/ca.jpg"
                                alt="icono-ropa"
                                width="230"
                            />
                        </span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0">
                        <li>
                            <Link to='/'>
                                <div className="hover:underline me-4 md:me-6">Home</div>
                            </Link>
                        </li>
                        <li>
                            <Link to='/brand'>
                                <div className="hover:underline me-4 md:me-6">Brand</div>
                            </Link>
                        </li>
                        <li>
                            <Link to='/shop'>
                                <div className="hover:underline me-4 md:me-6">Shop</div>
                            </Link>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                    <a href="mailto:creenasez@gmail.com">creenasez@gmail.com</a>
                </div>

                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="http://localhost:5173" className="hover:underline">CreenAsez™</a>. All Rights Reserved.</span>
            </div>
        </footer>
    );
};

export default footer;