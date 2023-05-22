import React from "react";

import {ThemeProvider} from "./ThemeContext";
import {WindowSizeProvider} from "./WindowSizeContext";
import {useReducedMotion, Globals} from "@react-spring/web";

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
            <ThemeProvider>{children}</ThemeProvider>
        </WindowSizeProvider>
    );
}

export default App;
