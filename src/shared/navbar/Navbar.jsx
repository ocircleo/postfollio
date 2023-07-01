import { BiMenuAltRight } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import Activelink from "../activelink/Activelink";
import { useState } from "react";
import { Link } from "react-router-dom";
import imgIcon from '../../../public/img/icon.jpg'
const Navbar = () => {
    let [navState, setNavState] = useState(true)
    let links = <>
        <li><Activelink to={'/'}>home</Activelink></li>
        <li><Activelink to={'/blog'}>BLog</Activelink></li>
        <li onClick={() => setNavState(!navState)}><a href="#contactme" className="font-semibold" >Contact</a></li>
    </>

    return (<>

        <div className="h-16 w-full bg-white fixed top-0 shadow flex justify-between items-center px-5 md:px-16 z-[111]">
            <div >
                <Link to={'/'} className="flex gap-2 items-center justify-center">
                    <img src={imgIcon} alt="salman" className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-full border-2 border-indigo-500 bg-indigo-100" />
                    <h1 className="capitalize text-base sm:text-lg md:xl lg:text-2xl font-semibold text-indigo-500">salman</h1>
                </Link>
            </div>
            <div>
                <ul className="md:flex gap-3 hidden">
                    {links}
                </ul>
                <div className="text-3xl cursor-pointer md:hidden" id="navtoggler1" onClick={() => setNavState(!navState)}>
                    {
                        navState ? <BiMenuAltRight id="navtoggler2"></BiMenuAltRight> : <RxCross2></RxCross2>
                    }
                </div>
            </div>
        </div>
        <div className="h-16 w-full bg-white">

        </div>
        <div className={`w-full h-auto fixed top-15 md:hidden right-0 duration-300 ${navState ? 'translate-x-[100%]' : 'translate-x-[0px]'} z-[111]`}>
            <ul className="flex flex-col items-center h-[100vh] gap-5  w-full bg-indigo-100">
                {links}
            </ul>
        </div>
    </>

    );
};

export default Navbar;