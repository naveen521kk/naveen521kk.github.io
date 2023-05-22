import React from "react";
import {createPortal} from "react-dom";
import {useScroll, animated} from "@react-spring/web";
import * as S from "./scroll-progress-bar.module.scss";

const ScrollProgressBar = () => {
    const {scrollYProgress} = useScroll();

    return (
        <>
            {createPortal(
                <animated.div
                    style={{
                        width: scrollYProgress.to({
                            range: [0, 1],
                            output: ["0%", "100%"]
                        })
                    }}
                    className={S.scrollProgressBar}
                />,
                document.body
            )}
        </>
    );
};

export {ScrollProgressBar};
