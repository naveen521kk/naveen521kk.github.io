import React from "react";
import * as styles from "./xor-ops.module.scss";

const dec2bin = (dec: number) => {
    return (dec >>> 0).toString(2);
};

export const XORTruthTable = () => {
    return (
        <div className={styles.tableDiv}>
            <table>
                <thead>
                    <tr>
                        <th>A</th>
                        <th>B</th>
                        <th>A XOR B</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>1</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>0</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>0</td>
                        <td>1</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export const XOROpsDisplay = ({
    defaultFirstNumber,
    defaultSecondNumber
}: {
    defaultFirstNumber: number;
    defaultSecondNumber: number;
}) => {
    const [firstNumber, setFirstNumber] = React.useState(defaultFirstNumber);
    const [secondNumber, setSecondNumber] = React.useState(defaultSecondNumber);
    return (
        <div className={styles.outerDiv}>
            <div className={styles.mainDiv}>
                <div className={styles.textDiv}>
                    <div>
                        <label>
                            First Number:{" "}
                            <input
                                type="number"
                                name="firstNumber"
                                value={firstNumber}
                                onChange={e =>
                                    setFirstNumber(Number(e.target.value))
                                }
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Second Number:{" "}
                            <input
                                type="number"
                                name="secondNumber"
                                value={secondNumber}
                                onChange={e =>
                                    setSecondNumber(Number(e.target.value))
                                }
                            />
                        </label>
                    </div>
                </div>
                <div className={styles.textDiv}>
                    {firstNumber} ^ {secondNumber} ={" "}
                    {firstNumber ^ secondNumber}
                </div>
                {/* show operation of XOR between the two number */}
                <div className={styles.sumDiv}>
                    <div className={styles.innerDiv}>
                        <div>{dec2bin(firstNumber).padStart(4, "0")}</div>
                        <div>{dec2bin(secondNumber).padStart(4, "0")}</div>
                        <div className={styles.line}></div>
                        <div>
                            {dec2bin(firstNumber ^ secondNumber).padStart(
                                4,
                                "0"
                            )}
                        </div>
                        <div className={styles.line}></div>
                    </div>
                </div>
                <p><em>Try changing the input fields</em> 😉</p>
            </div>
            
        </div>
    );
};
