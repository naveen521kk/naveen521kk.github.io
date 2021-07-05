import * as React from "react";
import {Link} from "gatsby";
import Headroom from "react-headroom";
import "../styles/header.scss";
import { MoonIcon } from "./icons";
const NavBar = () => {
    return (
        <Headroom>
            <header className="block">
                <nav className="flex flex-wrap justify-between leading-12">
                    <div className="flex m-2">
                        <Link to="/" accessKey="h" title="Naveen M K (Alt+H)">Naveen M K</Link>
                        <span className="inline-flex mx-5">
                            <button id="theme-toggle" accesskey="t" title="(Alt + T)">
                                <MoonIcon />
                            </button>
                        </span>
                    </div>

                <ul id="menu" className="flex list-none overflow-x-auto whitespace-nowrap mx-6 my-2 p-0">
                    <li><Link to="/posts">Blog</Link></li>
                    {/* <li><Link to="/posts">About Me</Link></li> */}
                </ul>
                </nav>
            </header>
        </Headroom>
    );
};

export default NavBar;
