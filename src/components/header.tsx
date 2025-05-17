import * as React from "react";
import {Link} from "gatsby";
import Headroom from "react-headroom";
import * as header from "../styles/header.module.scss";
import {DarkModeToggler} from "./ThemeToggler";
import {ThemeContext} from "./ThemeContext";
import {HomeIcon, BookmarkIcon, ProjectsIcon} from "./icons";

const NavLogo = () => {
    const {colorMode} = React.useContext(ThemeContext);
    return (
        <div className={header.logo_div} data-testid="navbar-logo">
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
    return (
        <>
            <Headroom
                style={{
                    zIndex: 1000
                }}
            >
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
                                <a href="https://projects.naveenmk.me/" title="Projects" target="_blank" rel="noopener noreferrer">
                                    Projects
                                </a>
                            </li>
                            <li>
                                <Link to="/posts" title="Blog Posts">
                                    Blog
                                </Link>
                            </li>
                            {/* <li><Link to="/posts">About Me</Link></li> */}
                        </ul>
                    </nav>
                </header>
            </Headroom>
            <header className={header.header + " " + header.bottom_nav}>
                <nav className={header.bottom_main_nav}>
                    <ul id="menu" className={header.bottom_menu_item}>
                        <li className={header.bottom_menu_item_inner}>
                            <HomeIcon />
                            <Link to="/">Home</Link>
                        </li>
                        <li className={header.bottom_menu_item_inner}>
                            <BookmarkIcon />
                            <Link to="/posts">Blog</Link>
                        </li>
                        {/* <li><Link to="/about">About Me</Link></li> */}
                        <li className={header.bottom_menu_item_inner}>
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
