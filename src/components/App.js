import React from "react";

import {ThemeProvider} from "./ThemeContext";
import {WindowSizeProvider} from "./WindowSizeContext";

function App({children}) {
    return (
        <WindowSizeProvider>
            <ThemeProvider>{children}</ThemeProvider>
        </WindowSizeProvider>
    );
}

export default App;
