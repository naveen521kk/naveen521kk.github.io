import React from "react";

const defaultWindowSize = 640.0;

interface WindowSizeContextType {
    windowSize: number;
    setWindowSize: (windowSize: number) => void;
}

export const WindowSizeContext = React.createContext<WindowSizeContextType>({
    windowSize: defaultWindowSize,
    setWindowSize: function () {}
});

const debounce = (func: () => void, delay: number) => {
    let debounceTimer: NodeJS.Timeout;
    return function () {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => func.apply(null), delay);
    };
};

export const WindowSizeProvider = ({children}: {children: JSX.Element}) => {
    const [windowSize, setWindowSize] = React.useState<number>(defaultWindowSize);

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
