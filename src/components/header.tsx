import * as React from "react";
import {Link} from "gatsby";
import Headroom from "react-headroom";
import * as header from "../styles/header.module.scss";
import {DarkModeToggler} from "./ThemeToggler.jsx";
import {ThemeContext} from "./ThemeContext.js";
import {WindowSizeContext} from "./WindowSizeContext";
import {HomeIcon, BookmarkIcon, GitHubLogo, ProjectsIcon} from "./icons.jsx";

const NavLogo = () => {
    const {colorMode} = React.useContext(ThemeContext);
    return (
        <div className={header.logo_div}>
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
        </div>
    );
};

const NavBar = () => {
    const {windowSize} = React.useContext(WindowSizeContext);
    const isMobile = windowSize <= 640;
    if (!isMobile) {
        return (
            <Headroom>
                <header className={header.header}>
                    <nav className={header.main_nav}>
                        <div className={header.logo_theme_toggler_div}>
                            <NavLogo />
                            <div className={header.theme_toggler_div}>
                                <DarkModeToggler />
                            </div>
                        </div>
                        <ul id="menu" className={header.menu_item}>
                            <li>
                                <Link to="/projects" title="Projects">Projects</Link>
                            </li>
                            <li>
                                <Link to="/posts" title="Blog Posts">Blog</Link>
                            </li>
                            {/* <li><Link to="/posts">About Me</Link></li> */}
                        </ul>
                    </nav>
                </header>
            </Headroom>
        );
    }
    return (
        <>
            <Headroom>
                <header className={header.header}>
                    <nav className={header.main_nav}>
                        <div className={header.logo_theme_toggler_div_mobile}>
                            <NavLogo />
                            <div className={header.theme_toggler_div}>
                                <DarkModeToggler />
                            </div>
                        </div>
                    </nav>
                </header>
            </Headroom>
            <header className={header.header}>
                <nav className={header.main_nav_mobile}>
                    <ul id="menu" className={header.menu_item_mobile}>
                        <li className={header.menu_item_inner_mobile}>
                            <HomeIcon />
                            <Link to="/">Home</Link>
                        </li>
                        <li className={header.menu_item_inner_mobile}>
                            <BookmarkIcon />
                            <Link to="/posts">Blog</Link>
                        </li>
                        {/* <li><Link to="/about">About Me</Link></li> */}
                        <li className={header.menu_item_inner_mobile}>
                            <ProjectsIcon />
                            <Link to="/projects">Projects</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default NavBar;
