import React from "react";

import {ThemeProvider} from "./ThemeContext";
import {WindowSizeProvider} from "./WindowSizeContext";
import {useReducedMotion, Globals} from "@react-spring/web";
import FreelanceAds from "./freelance-ads";

function App({children}) {
    const reducedMotion = useReducedMotion();
    React.useEffect(() => {
        Globals.assign({
            skipAnimation: reducedMotion
        });

        return () => {
            Globals.assign({
                skipAnimation: false
            });
        };
    });

    return (
        <WindowSizeProvider>
            <ThemeProvider>
                {children}
                <FreelanceAds />
            </ThemeProvider>
        </WindowSizeProvider>
    );
}

export default App;
