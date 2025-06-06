import * as React from "react";
import {ThemeContext} from "./ThemeContext";
import {MoonIcon, SunIcon} from "./icons";
import * as DarkThemeStyle from "../styles/theme-toggler.module.scss";
import Tippy from "@tippyjs/react";

const DarkModeToggler = () => {
    const {colorMode, setColorMode} = React.useContext(ThemeContext);
    const changeTheme = () => {
        if (colorMode === "dark") {
            setColorMode("light");
        } else {
            setColorMode("dark");
        }
    };
    if (colorMode === "dark") {
        return (
            <Tippy
                content={<span className="tippy-text">Turn on the light</span>}
            >
                <button
                    id="theme-toggler"
                    aria-label="Turn on the light"
                    className={DarkThemeStyle.theme_toggle_button}
                    onClick={changeTheme}
                >
                    <SunIcon />
                </button>
            </Tippy>
        );
    }
    return (
        <Tippy content={<span className="tippy-text">Turn off the light</span>}>
            <button
                id="theme-toggler"
                aria-label="Turn off the light"
                className={DarkThemeStyle.theme_toggle_button}
                onClick={changeTheme}
            >
                <MoonIcon />
            </button>
        </Tippy>
    );
};
export {DarkModeToggler};
