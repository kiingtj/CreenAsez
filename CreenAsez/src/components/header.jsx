import React, { useEffect, useState } from 'react';
import { initFlowbite } from 'flowbite';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        initFlowbite();
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const [activeLink, setActiveLink] = useState(location.pathname);

    const handleLinkClick = (path) => {
        setActiveLink(path);
    };

    const isActive = (path) => activeLink === path ? 'text-teal-400' : 'text-gray-400';

    return (
        <header>
            <nav className="bg-black border-gray-200 py-2.5 fixed top-0 z-50 w-full">
                <div className="flex flex-wrap items-center justify-between mx-auto max-w-screen-2xl">
                    <div className="flex items-center w-full lg:w-auto lg:order-1">
                        <button className=" lg:hidden text-white bg-black outline-0" onClick={toggleMenu}>
                            {!isMenuOpen ? (
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            )}
                        </button>
                        <ul className={`${isMenuOpen ? 'hidden' : 'hidden'} lg:flex lg:flex-row lg:space-x-8 lg:mt-0 mt-4 font-medium`}
                        >
                            <li>
                                <div className="border-b border-white">
                                    <Link to="/" onClick={() => handleLinkClick('/')}>
                                        <div className={`block py-2 pr-4 pl-3 ${isActive('/')} hover:text-teal-400 hover:-translate-y-0.5 transition ease-in duration-150 font-helvetica font-semibold`}>
                                            Home
                                        </div>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div className="border-b border-white">
                                    <Link to='/brand' onClick={() => handleLinkClick('/brand')}>
                                        <div className={`block py-2 pr-4 pl-3 ${isActive('/brand')} hover:text-teal-400 hover:-translate-y-0.5 transition ease-in duration-150 font-helvetica font-semibold`}>
                                            Brand
                                        </div>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div className="border-b border-white">
                                    <a
                                        href="#"
                                        className="block py-2 pr-4 pl-3 text-gray-400 hover:text-teal-400 hover:-translate-y-0.5 transition ease-in duration-150 font-helvetica font-semibold"
                                    >
                                        Services
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div className="border-b border-white">
                                    <a
                                        href="#"
                                        className="block py-2 pr-4 pl-3 text-gray-400 hover:text-teal-400 hover:-translate-y-0.5 transition ease-in duration-150 font-helvetica font-semibold"
                                    >
                                        Contact
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="flex justify-center w-full lg:w-auto lg:order-2">
                        <Link to="/">
                            <img
                                src="./src/assets/images/logo/ca.jpg"
                                alt="icono"
                                width="230"
                                style={{ filter: 'invert(100%) brightness(200%)' }}
                            />
                        </Link>
                    </div>

                    <ul className={`${isMenuOpen ? 'hidden' : 'hidden'} lg:order-3 lg:flex lg:space-x-8 font-medium`}>
                        <li className="flex flex-row space-x-4 mt-4">
                            <a
                                href="https://www.instagram.com/creenasez/"
                                className="text-white hover:text-teal-400 rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 hover:-translate-y-0.5 transition ease-in duration-150 font-helvetica font-semibold"
                            >
                                <svg
                                    viewBox="0 0 1024 1024"
                                    fill="currentColor"
                                    height="2.5em"
                                    width="2.5em"
                                >
                                    <path d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 00-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z" />
                                </svg>
                            </a>
                            <a
                                href="https://www.tiktok.com/@creenasez"
                                className="text-white hover:text-teal-400 rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 hover:-translate-y-0.5 transition ease-in duration-150 font-helvetica font-semibold"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    height="2.5em"
                                    width="2.5em"
                                >
                                    <path
                                        d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"
                                    />
                                </svg>
                            </a>
                            <a
                                href="https://www.youtube.com/channel/UCg4UsjcW-_pdwoxyoA6BtfA"
                                className="text-white hover:text-teal-400 rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 hover:-translate-y-0.5 transition ease-in duration-150 font-helvetica font-semibold"
                            >
                                <svg
                                    viewBox="0 0 1024 1024"
                                    fill="currentColor"
                                    height="2.5em"
                                    width="2.5em"
                                >
                                    <path
                                        d="M941.3 296.1a112.3 112.3 0 00-79.2-79.3C792.2 198 512 198 512 198s-280.2 0-350.1 18.7A112.12 112.12 0 0082.7 296C64 366 64 512 64 512s0 146 18.7 215.9c10.3 38.6 40.7 69 79.2 79.3C231.8 826 512 826 512 826s280.2 0 350.1-18.8c38.6-10.3 68.9-40.7 79.2-79.3C960 658 960 512 960 512s0-146-18.7-215.9zM423 646V378l232 133-232 135z"
                                    />
                                </svg>
                            </a>
                            <a
                                href="https://www.imdb.com/name/nm13884481/?ref_=fn_al_nm_1"
                                className="text-white hover:text-teal-400 rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 hover:-translate-y-0.5 transition ease-in duration-150 font-helvetica font-semibold"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    height="2.5em"
                                    width="2.5em"
                                >
                                    <path
                                        d="M13.646 10.237c-.057-.032-.16-.048-.313-.048v3.542c.201 0 .324-.041.371-.122s.07-.301.07-.66v-2.092c0-.244-.008-.4-.023-.469a.223.223 0 00-.105-.151zm3.499 1.182c-.082 0-.137.031-.162.091-.025.061-.037.214-.037.46v1.426c0 .237.014.389.041.456.029.066.086.1.168.1.086 0 .199-.035.225-.103.027-.069.039-.234.039-.495V11.97c0-.228-.014-.377-.043-.447-.032-.069-.147-.104-.231-.104z"
                                    />
                                    <path
                                        d="M20 3H4a1 1 0 00-1 1v16a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1zM6.631 14.663H5.229V9.266h1.402v5.397zm4.822 0H10.23l-.006-3.643-.49 3.643h-.875L8.342 11.1l-.004 3.563H7.111V9.266H8.93c.051.327.107.71.166 1.15l.201 1.371.324-2.521h1.832v5.397zm3.664-1.601c0 .484-.027.808-.072.97a.728.728 0 01-.238.383.996.996 0 01-.422.193c-.166.037-.418.055-.754.055h-1.699V9.266h1.047c.678 0 1.07.031 1.309.093.24.062.422.164.545.306.125.142.203.3.234.475.031.174.051.516.051 1.026v1.896zm3.654.362c0 .324-.023.565-.066.723a.757.757 0 01-.309.413.947.947 0 01-.572.174c-.158 0-.365-.035-.502-.104a1.144 1.144 0 01-.377-.312l-.088.344h-1.262V9.266h1.35v1.755a1.09 1.09 0 01.375-.289c.137-.064.344-.096.504-.096.186 0 .348.029.484.087a.716.716 0 01.44.549c.016.1.023.313.023.638v1.514z"
                                    />
                                </svg>
                            </a>
                            <a
                                href="https://www.instagram.com/creen__clothing/"
                                className="text-white hover:text-teal-400 rounded-lg text-sm mr-2 hover:-translate-y-0.5 transition ease-in duration-150 font-helvetica font-semibold"
                            >
                                <img
                                    src="./src/assets/images/logo/ropa.png"
                                    alt="icono-ropa"
                                    width="68"
                                />
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            <aside className={`fixed inset-y-0 left-0 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-[2000ms] ease-in-out bg-black text-center shadow-lg w-full lg:hidden z-40 flex flex-col items-center overflow-scroll`}>
                <div className="flex flex-col items-center w-full p-4 mt-80">
                    <Link
                        to="/"
                        className={`block text-lg font-bold mb-6 ${isActive('/')}`}
                        onClick={toggleMenu}
                    >
                        Home
                    </Link>
                    <Link
                        to="/brand"
                        className={`block text-lg mb-4 ${isActive('/brand')}`}
                        onClick={toggleMenu}
                    >
                        Brand
                    </Link>
                    <Link
                        to="/services"
                        className="block text-gray-400 hover:text-teal-400 text-lg mb-4"
                        onClick={toggleMenu}
                    >
                        Services
                    </Link>
                    <Link
                        to="/contact"
                        className="block text-gray-400 hover:text-teal-400 text-lg mb-4"
                        onClick={toggleMenu}
                    >
                        Contact
                    </Link>
                    <div className="flex items-center lg:order-3">
                        <a
                            href="https://www.instagram.com/creenasez/"
                            className="text-white hover:text-teal-400 rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 hover:-translate-y-0.5 transition ease-in duration-150 font-helvetica font-semibold"
                        >
                            <svg
                                viewBox="0 0 1024 1024"
                                fill="currentColor"
                                height="2.5em"
                                width="2.5em"
                            >
                                <path d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 00-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z" />
                            </svg>
                        </a>
                        <a
                            href="https://www.tiktok.com/@creenasez"
                            className="text-white hover:text-teal-400 rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 hover:-translate-y-0.5 transition ease-in duration-150 font-helvetica font-semibold"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                height="2.5em"
                                width="2.5em"
                            >
                                <path
                                    d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"
                                />
                            </svg>
                        </a>
                        <a
                            href="https://www.youtube.com/channel/UCg4UsjcW-_pdwoxyoA6BtfA"
                            className="text-white hover:text-teal-400 rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 hover:-translate-y-0.5 transition ease-in duration-150 font-helvetica font-semibold"
                        >
                            <svg
                                viewBox="0 0 1024 1024"
                                fill="currentColor"
                                height="2.5em"
                                width="2.5em"
                            >
                                <path
                                    d="M941.3 296.1a112.3 112.3 0 00-79.2-79.3C792.2 198 512 198 512 198s-280.2 0-350.1 18.7A112.12 112.12 0 0082.7 296C64 366 64 512 64 512s0 146 18.7 215.9c10.3 38.6 40.7 69 79.2 79.3C231.8 826 512 826 512 826s280.2 0 350.1-18.8c38.6-10.3 68.9-40.7 79.2-79.3C960 658 960 512 960 512s0-146-18.7-215.9zM423 646V378l232 133-232 135z"
                                />
                            </svg>
                        </a>
                        <a
                            href="https://www.imdb.com/name/nm13884481/?ref_=fn_al_nm_1"
                            className="text-white hover:text-teal-400 rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 hover:-translate-y-0.5 transition ease-in duration-150 font-helvetica font-semibold"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                height="2.5em"
                                width="2.5em"
                            >
                                <path
                                    d="M13.646 10.237c-.057-.032-.16-.048-.313-.048v3.542c.201 0 .324-.041.371-.122s.07-.301.07-.66v-2.092c0-.244-.008-.4-.023-.469a.223.223 0 00-.105-.151zm3.499 1.182c-.082 0-.137.031-.162.091-.025.061-.037.214-.037.46v1.426c0 .237.014.389.041.456.029.066.086.1.168.1.086 0 .199-.035.225-.103.027-.069.039-.234.039-.495V11.97c0-.228-.014-.377-.043-.447-.032-.069-.147-.104-.231-.104z"
                                />
                                <path
                                    d="M20 3H4a1 1 0 00-1 1v16a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1zM6.631 14.663H5.229V9.266h1.402v5.397zm4.822 0H10.23l-.006-3.643-.49 3.643h-.875L8.342 11.1l-.004 3.563H7.111V9.266H8.93c.051.327.107.71.166 1.15l.201 1.371.324-2.521h1.832v5.397zm3.664-1.601c0 .484-.027.808-.072.97a.728.728 0 01-.238.383.996.996 0 01-.422.193c-.166.037-.418.055-.754.055h-1.699V9.266h1.047c.678 0 1.07.031 1.309.093.24.062.422.164.545.306.125.142.203.3.234.475.031.174.051.516.051 1.026v1.896zm3.654.362c0 .324-.023.565-.066.723a.757.757 0 01-.309.413.947.947 0 01-.572.174c-.158 0-.365-.035-.502-.104a1.144 1.144 0 01-.377-.312l-.088.344h-1.262V9.266h1.35v1.755a1.09 1.09 0 01.375-.289c.137-.064.344-.096.504-.096.186 0 .348.029.484.087a.716.716 0 01.44.549c.016.1.023.313.023.638v1.514z"
                                />
                            </svg>
                        </a>
                        <a
                            href="https://www.instagram.com/creen__clothing/"
                            className="text-white rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 font-helvetica font-semibold"
                        >
                            <img
                                src="./src/assets/images/logo/ropa.png"
                                alt="icono-ropa"
                                width="70"
                            />
                        </a>
                    </div>
                </div>
            </aside>
        </header>
    );
};

export default Header;