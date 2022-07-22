import React, {useState} from "react";
import {usePopper} from "react-popper";

import NoteBlock from "../components/note-block.jsx";
import ColoredText from "../components/coloredText.jsx";
import * as HexRgbStyle from "../styles/hex-rgb.module.scss";

const defaultTooltipMessage = "Change the default color 😉";
/*
    This function checks whether the input is a valid hex color.
    First, it checks if the input is a string. 
    If it is, it checks if the length is 7 characters.
    If it is, it checks if the first character is #.
    If it is, it checks if the remaining characters are hexadecimal
    and within the range 0x100000 to 0xFFFFFF.
    If any of the above conditions are not met, it returns false.

    @param {string} val - The input to be checked.
*/
const checkValidColor = val => {
    if (typeof val !== "string") {
        return false;
    }
    if (val.length !== 7) {
        return false;
    }
    if (val[0] !== "#") {
        return false;
    }
    // Check if the parsed hex is within the color range
    // which the scripts below understand
    const hex = parseInt(val.replace(/^#+/, ""), 16);
    if (hex < 0x100000 || hex > 0xffffff) {
        return false;
    }
    return true;
};

export default function ColorChangeText({defaultColor}) {
    const [mainColor, setMainColor] = useState(defaultColor);
    const [referenceElement, setReferenceElement] = useState(null);
    const [popperMessage, setPopperMessage] = useState(null);
    const [popperElement, setPopperElement] = useState(null);
    const [arrowElement, setArrowElement] = useState(null);
    const onTextInput = event => {
        const val = event.target.value;
        // Do some sanity checks on the input
        if (checkValidColor(val)) {
            console.log("Setting color to: ", val);
            setMainColor(val);
            if (popperMessage) {
                popperMessage.innerText = defaultTooltipMessage;
            }
        } else {
            // Report it to user
            if (popperMessage) {
                popperMessage.innerText = "Please enter a valid color 🙌";
            }
            console.info("Please enter a valid color 🙌");
        }
    };
    const {update, styles, attributes} = usePopper(
        referenceElement,
        popperElement,
        {
            modifiers: [
                {
                    name: "offset",
                    options: {element: arrowElement, offset: [0, 8]}
                }
            ]
        }
    );
    const showPopper = () => {
        popperElement.setAttribute("data-show", "");
        update();
    };
    const hidePopper = () => {
        popperElement.removeAttribute("data-show");
    };
    return (
        <>
            <div>
                <input
                    type="text"
                    onChange={onTextInput}
                    placeholder="Enter color hex here"
                    className={HexRgbStyle.hex_input}
                    defaultValue={mainColor}
                    name="colorInp"
                    ref={setReferenceElement}
                    onFocus={showPopper}
                    onMouseEnter={showPopper}
                    onMouseLeave={hidePopper}
                    onBlur={hidePopper}
                />
                <div
                    ref={setPopperElement}
                    style={styles.popper}
                    className={HexRgbStyle.tooltip}
                    // role="tooltip"
                    {...attributes.popper}
                >
                    <div
                        ref={setArrowElement}
                        style={styles.arrow}
                        className={HexRgbStyle.arrow}
                    />
                    <p ref={setPopperMessage}>{defaultTooltipMessage}</p>
                </div>
            </div>
            Let's take an example color{" "}
            <ColoredText color={mainColor} children={mainColor} />, it can be
            written in hexadecimal as{" "}
            <ColoredText
                children={
                    "0x" +
                    parseInt(mainColor.replace(/^#+/, ""), 16).toString(16)
                }
            />{" "}
            and in binary as{" "}
            <ColoredText
                children={
                    "0b" +
                    parseInt(mainColor.replace(/^#+/, ""), 16).toString(2)
                }
            />
            .
            <NoteBlock>
                I've used the prefix <code>0x</code> to represent hexadecimal
                and <code>0b</code> to represent binary numbers (that's how it's
                done in Python, so just for some clarity).
            </NoteBlock>
            In <ColoredText color={mainColor} children={mainColor} /> the first
            two characters, ie.{" "}
            <ColoredText children={mainColor.slice(1, 3)}></ColoredText>,
            represents red component. But this is in hexadecimal format,{" "}
            <ColoredText children={"0x" + mainColor.slice(1, 3)} />, which is
            equivalent to{" "}
            <ColoredText children={parseInt(mainColor.slice(1, 3), 16)} /> when
            converted to an integer. So, the red component of the color{" "}
            <ColoredText color={mainColor} children={mainColor} /> is{" "}
            <ColoredText children={parseInt(mainColor.slice(1, 3), 16)} /> out
            of 255. Similarly, the green component is{" "}
            <ColoredText children={parseInt(mainColor.slice(3, 5), 16)} /> out
            of 255 and the blue component is{" "}
            <ColoredText children={parseInt(mainColor.slice(5, 7), 16)} /> out
            of 255.
            <div className={HexRgbStyle.table}>
                <table>
                    <thead>
                        <tr>
                            <th scope="col">Color</th>
                            <th scope="col">Hex representation</th>
                            <th scope="col">Value</th>
                            <th scope="col">Binary</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Red</th>
                            <td>
                                <code>{"0x" + mainColor.slice(1, 3)}</code>
                            </td>
                            <td>
                                <code>
                                    {parseInt(mainColor.slice(1, 3), 16)}
                                </code>
                            </td>
                            <td>
                                <code>
                                    {"0b" +
                                        parseInt(
                                            mainColor.slice(1, 3),
                                            16
                                        ).toString(2)}
                                </code>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Green</th>
                            <td>
                                <code>{"0x" + mainColor.slice(3, 5)}</code>
                            </td>
                            <td>
                                <code>
                                    {parseInt(mainColor.slice(3, 5), 16)}
                                </code>
                            </td>
                            <td>
                                <code>
                                    {"0b" +
                                        parseInt(
                                            mainColor.slice(3, 5),
                                            16
                                        ).toString(2)}
                                </code>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Blue</th>
                            <td>
                                <code>{"0x" + mainColor.slice(5, 7)}</code>
                            </td>
                            <td>
                                <code>
                                    {parseInt(mainColor.slice(5, 7), 16)}
                                </code>
                            </td>
                            <td>
                                <code>
                                    {"0b" +
                                        parseInt(
                                            mainColor.slice(5, 7),
                                            16
                                        ).toString(2)}
                                </code>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p>
                In short, the first 8 bits of the color represents the RED
                component, and the next 8 bits represent the GREEN component,
                and the last 8 bits represents BLUE component.
            </p>
            <p>
                Now that we learnt how color is stored, we can look into how to
                get these stored values using Bitwise operators.
            </p>
        </>
    );
}
