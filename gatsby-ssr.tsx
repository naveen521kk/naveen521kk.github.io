import React from "react";
import {minify} from "terser";

const HeadComponents = [
    <script
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7183740147103241"
        crossOrigin="anonymous"
        async
        key="adsense"
    />
];

const MagicScriptTag = () => {
    const codeToRunOnClient = `
  (function() {
    function getInitialColorMode() {
        const persistedColorPreference = window.localStorage.getItem("color-mode");
        const hasPersistedPreference = typeof persistedColorPreference === "string";
        if (hasPersistedPreference) {
            return persistedColorPreference;
        }
        const mql = window.matchMedia("(prefers-color-scheme: dark)");
        const hasMediaQueryPreference = typeof mql.matches === "boolean";
        if (hasMediaQueryPreference) {
            return mql.matches ? "dark" : "light";
        }
        return "light";
    }
    const colorMode = getInitialColorMode();
    const root = document.documentElement;
    if (colorMode === 'dark'){
        root.className += ' dark';
    }
    root.style.setProperty('--initial-color-mode', colorMode);
  })()
    `;
    const minified = minify(codeToRunOnClient);
    // eslint-disable-next-line react/no-danger
    return <script dangerouslySetInnerHTML={{__html: minified.code!}} />;
};
export const onRenderBody = ({
    setPreBodyComponents,
    setHtmlAttributes,
    setHeadComponents
}) => {
    setPreBodyComponents(<MagicScriptTag key="unique" />);
    setHtmlAttributes({lang: "en-gb"});
    setHeadComponents(HeadComponents);
};
