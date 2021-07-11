import * as React from "react";
import {Link} from "gatsby";
import Headroom from "react-headroom";
import "../styles/header.scss";
import {SunIcon} from "./icons";
const NavBar = () => {
    return (
        <Headroom>
            <header className="block bg-gradient-to-r from-red-400 via-yellow-500 to-pink-500">
                <nav className="text-xl flex flex-wrap justify-between leading-12">
                    <div className="flex m-2 items-center">
                        <img src="/logo.svg" width="40" height="40" className="mr-2" alt="Naveen M K"/>
                        <Link to="/" title="Naveen M K (Alt+H)">
                            Naveen M K
                        </Link>
                        <span className="inline-flex mx-5">
                            <button id="theme-toggle" aria-label="toggle-theme">
                                <SunIcon />
                            </button>
                        </span>
                    </div>

                    <ul
                        id="menu"
                        className="flex list-none overflow-x-auto whitespace-nowrap mx-6 my-2 p-0"
                    >
                        <li>
                            <Link to="/posts">Blog</Link>
                        </li>
                        {/* <li><Link to="/posts">About Me</Link></li> */}
                    </ul>
                </nav>
            </header>
        </Headroom>
    );
};

export default NavBar;
