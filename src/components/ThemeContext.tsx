import React from "react";

interface ThemeContextType {
    colorMode: string | null;
    setColorMode: (newValue: string) => void;
}

export const ThemeContext = React.createContext<ThemeContextType>({
    colorMode: null,
    setColorMode: function () {}
});

export const ThemeProvider = ({children}: {children: JSX.Element}) => {
    const [colorMode, rawSetColorMode] = React.useState<string | null>(
        null
    );

    React.useEffect(() => {
        const root = window.document.documentElement;
        const initialColorValue = root.style.getPropertyValue(
            "--initial-color-mode"
        );
        rawSetColorMode(initialColorValue);
    }, []);
    const contextValue = React.useMemo(() => {
        function setColorMode(newValue: string) {
            const root = window.document.documentElement;
            // 1. Update React color-mode state
            rawSetColorMode(newValue);
            // 2. Update localStorage
            localStorage.setItem("color-mode", newValue);
            // 3. Update the className
            if (colorMode === "dark") {
                root.className = root.className.replace("dark", "");
            } else {
                root.className += " dark";
            }
        }

        return {
            colorMode,
            setColorMode
        };
    }, [colorMode, rawSetColorMode]);

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    );
};
