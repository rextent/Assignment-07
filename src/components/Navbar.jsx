import React from 'react';
import Logo from "../assets/logo.png"
import { FaHome, FaRegClock } from 'react-icons/fa';
import { ImStatsDots } from 'react-icons/im';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className="shadow-sm bg-white">
            <div className="navbar container mx-auto bg-base-100 px-4">

                {/* Logo */}
                <div className="flex-1">
                    <Link to="/">
                        <img src={Logo} alt="logo" className="w-32" />
                    </Link>
                </div>

                {/* Mobile Menu */}
                <div className="dropdown dropdown-end lg:hidden">
                    <label tabIndex={0} className="btn btn-ghost">
                        ☰
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? "text-blue-600 font-semibold" : ""
                                }
                            >
                                <FaHome /> Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/timeline"
                                className={({ isActive }) =>
                                    isActive ? "text-blue-600 font-semibold" : ""
                                }
                            >
                                <FaRegClock /> Timeline
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/analytics"
                                className={({ isActive }) =>
                                    isActive ? "text-blue-600 font-semibold" : ""
                                }
                            >
                                <ImStatsDots /> Stats
                            </NavLink>
                        </li>
                    </ul>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-2">

                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `flex items-center gap-2 px-3 py-2 rounded-lg ${isActive
                                        ? "bg-green-700 text-white font-semibold"
                                        : "hover:bg-gray-100"
                                    }`
                                }
                            >
                                <FaHome /> Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/timeline"
                                className={({ isActive }) =>
                                    `flex items-center gap-2 px-3 py-2 rounded-lg ${isActive
                                        ? "bg-green-700 text-white font-semibold"
                                        : "hover:bg-gray-100"
                                    }`
                                }
                            >
                                <FaRegClock /> Timeline
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/analytics"
                                className={({ isActive }) =>
                                    `flex items-center gap-2 px-3 py-2 rounded-lg ${isActive
                                        ? "bg-green-700 text-white font-semibold"
                                        : "hover:bg-gray-100"
                                    }`
                                }
                            >
                                <ImStatsDots /> Stats
                            </NavLink>
                        </li>

                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbar;