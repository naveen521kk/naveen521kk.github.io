import React from "react";

const defaultWindowSize = 640.0;

export const WindowSizeContext = React.createContext({
    windowSize: defaultWindowSize,
    setWindowSize: function () {}
});

const debounce = (func, delay) => {
    let debounceTimer;
    return function () {
        const context = this;
        const args = arguments;
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => func.apply(context, args), delay);
    };
};

export const WindowSizeProvider = ({children}) => {
    const [windowSize, setWindowSize] = React.useState(defaultWindowSize);

    React.useEffect(() => {
        setWindowSize(window.innerWidth);
    }, []);
    const contextValue = {
        windowSize,
        setWindowSize
    };

    React.useEffect(() => {
        const handleResize = debounce(function () {
            setWindowSize(window.innerWidth);
        }, 500);

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <WindowSizeContext.Provider value={contextValue}>
            {children}
        </WindowSizeContext.Provider>
    );
};