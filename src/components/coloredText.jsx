import React from "react";

const ColoredText = ({color, children}) => (
    <code style={{color: color}} className="language-text">
        {children}
    </code>
);

export default ColoredText;
