import { Link, NavLink } from "react-router-dom";
import MyButton from "./MyButton";
import HamburgerIcon from "../images/hamburger.png";
import { useState } from "react";


const Navbar = () => {

    const [hiddenClass, setHiddenClass] = useState("hidden");

    function toggleMenu(e) {
        e.preventDefault();
        if (hiddenClass === "") { setHiddenClass("hidden") };
        if (hiddenClass === "hidden") { setHiddenClass("") };
    }

    return (
        <nav className="relative container p-6 mx-auto">
            <div className="flex items-center justify-between">
                <Link to="/" className="text-darkGreen text-xl baseline font-bold">
                    Rahmah Makan
                </Link>
                {/* <div className="">
                    <img src={Logo} className="w-36"></img>
                </div> */}

                <div className="hidden space-x-6 md:flex">
                    <NavLink to="/" className=" hover:text-darkGrayishBlue">Home</NavLink>
                    <NavLink to="/about-us" className="hover:text-darkGrayishBlue">About us</NavLink>
                    <NavLink to="/donate" className="hover:text-darkGrayishBlue">Donate</NavLink>
                    {/* <NavLink to="/" className="hover:text-darkGrayishBlue">Register</NavLink> */}
                </div>


                <MyButton text="Log In" to="/register/login" className="hidden md:block" />

                {/* Hamburger Icon */}
                <button id="menu-btn" onClick={toggleMenu} className="block open hamburger md:hidden focus:outline-none">
                    <img src={HamburgerIcon} className="w-6" alt=""></img>
                </button>


            </div>

            <div id="mobile-menu" className={hiddenClass + " md:hidden bg-veryLightGray"} >
                <div className="flex self-end flex-col items-center
                font-bold py-8 mt-10 space-y-6 
                sm:w-auto sm:self-center left-6 right-6 drop-shadow-md">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about-us">About us</NavLink>
                    <NavLink to="/donate">Donate</NavLink>
                    <NavLink to="/register/login">Login</NavLink>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;