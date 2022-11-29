import * as React from "react";
import * as BinaryRepresentationStyle from "./binary-representation.module.scss";
import Tippy from "@tippyjs/react";

const twos_complement = (value, bits) => {
    if (value >= 0) {
        return value;
    }
    return (1 << bits) + value;
};

function DisplayBinaryArray({binary, highlightSignedBit = false}) {
    return (
        <div className={BinaryRepresentationStyle.binaryBoxesDiv}>
            {binary.reverse().map((bit, i) => {
                let toHighlight = highlightSignedBit && i == 0;
                if (toHighlight) {
                    return (
                        <Tippy
                            content={
                                <span className="tippy-text">
                                    This is the signed bit
                                </span>
                            }
                        >
                            <div
                                key={i}
                                className={
                                    bit
                                        ? BinaryRepresentationStyle.binaryBoxOne
                                        : BinaryRepresentationStyle.binaryBoxZero
                                }
                                style={{
                                    marginRight: "1em",
                                }}
                            >
                                {bit}
                            </div>
                        </Tippy>
                    );
                }
                return (
                    <div
                        key={i}
                        className={
                            bit
                                ? BinaryRepresentationStyle.binaryBoxOne
                                : BinaryRepresentationStyle.binaryBoxZero
                        }
                    >
                        {bit}
                    </div>
                );
            })}
        </div>
    );
}

function BinaryRepresentation({value, signed = true, maxBits = 8}) {
    const [inputValue, setInputValue] = React.useState(value || 0);
    const binary = [];
    let current = Number(inputValue);
    let numberOfBits = 0;
    let error_message = "";
    let using_twos_complement = false;

    if (current < 0) {
        if (signed) {
            current = twos_complement(current, maxBits);
            using_twos_complement = true;
        } else {
            error_message = "Value is negative, should be positive or zero";
        }
    } else if (current == 0) {
        binary.push(0);
        numberOfBits = 1;
    }
    for (; current > 0; numberOfBits++) {
        binary.push(current & 1);
        current >>= 1;
    }
    if (signed && inputValue >= 0){
        // Sign bit for positive numbers is 0 for positive numbers
        // Negative number sign bit is handled already
        binary.push(0);
        numberOfBits++;
    }
    if (numberOfBits > maxBits) {
        error_message = (
            <span>
                Number of bits <em>{numberOfBits}</em> exceeds maximum number of
                bits
                <em> {maxBits}</em>. Only last <em>{maxBits}</em> bits will be
                shown.
            </span>
        );
        binary.length = maxBits;
    }
    if (using_twos_complement && inputValue < -128) {
        error_message = (
            <span>
                The number isn't displayed correctly because it's large to
                display in 8 bits. Enter a number between -128 and 127.
            </span>
        );
    }
    // Highlight the signed bit only if the number is negative and correctly represented
    let highlightSignedBit = signed && inputValue >= -128;
    return (
        <div className={BinaryRepresentationStyle.outerDiv}>
            <div className={BinaryRepresentationStyle.mainDiv}>
                <DisplayBinaryArray
                    binary={binary}
                    highlightSignedBit={highlightSignedBit}
                />
                {error_message && (
                    <div className={BinaryRepresentationStyle.errorMessage}>
                        {error_message}
                    </div>
                )}
                <div className={BinaryRepresentationStyle.textDiv}>
                    <input
                        type="number"
                        name="text"
                        value={inputValue}
                        onChange={event => {
                            setInputValue(event.target.value);
                            event.preventDefault();
                        }}
                    />{" "}
                    stored in binary
                </div>
                
            </div>
        </div>
    );
}

const SignedBinaryRepresentation = ({value, maxBits = 8}) => {
    return (
        <BinaryRepresentation value={value} maxBits={maxBits} signed={true} />
    );
};

function UnsignedBinaryRepresentation({value, maxBits = 8}) {
    return (
        <BinaryRepresentation value={value} maxBits={maxBits} signed={false} />
    );
}

export {UnsignedBinaryRepresentation, SignedBinaryRepresentation};
