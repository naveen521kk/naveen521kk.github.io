import * as React from "react";
import {Link} from "gatsby";
import Headroom from "react-headroom";
import {SunIcon} from "./icons";
import * as header from "../styles/header.module.css"

const NavBar = () => {
    return (
        <Headroom>
            <header className={header.header}>
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
                        className={"flex list-none overflow-x-auto whitespace-nowrap mx-6 my-2 p-0 " +  header.menu_item}
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
