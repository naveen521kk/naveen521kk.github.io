import * as React from "react";
import {Link} from "gatsby";
import Headroom from "react-headroom";
import * as header from "../styles/header.module.scss";
import {DarkModeToggler} from "./ThemeToggler.jsx";
import {ThemeContext} from "./ThemeContext.js";

const NavBar = () => {
    const {colorMode} = React.useContext(ThemeContext);
    return (
        <Headroom>
            <header className={header.header}>
                <nav className={header.main_nav}>
                    <div className={header.nav_inner_div}>
                        {colorMode === "dark" ? (
                            <img
                                src="/logo-dark.svg"
                                width="40"
                                height="40"
                                className={header.nav_logo}
                                alt="Naveen M K"
                            />
                        ) : (
                            <img
                                src="/logo.svg"
                                width="40"
                                height="40"
                                className={header.nav_logo}
                                alt="Naveen M K"
                            />
                        )}

                        <Link to="/" title="Naveen M K (Alt+H)">
                            Naveen M K
                        </Link>
                        <span className={header.theme_toggler_container}>
                                <DarkModeToggler />
                        </span>
                    </div>

                    <ul id="menu" className={header.menu_item}>
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
