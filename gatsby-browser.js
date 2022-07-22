import "@fontsource/plus-jakarta-sans";
import "./src/styles/global.css";
import "prismjs/themes/prism-solarizedlight.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "prismjs/plugins/command-line/prism-command-line.css";
import "./src/styles/global.scss";
import React from "react";

import App from "./src/components/App";

export const wrapRootElement = ({element}) => {
    return <App>{element}</App>;
};
