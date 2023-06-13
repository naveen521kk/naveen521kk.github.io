import React from "react";
import {CloseIcon} from "../icons";
import {createPortal} from "react-dom";
import * as styles from "./freelance-ads.module.scss";
import {useTransition, animated} from "@react-spring/web";

const NUM_DAYS_HIDE = 3;

const FreelanceAds = () => {
    const [isClient, setIsClient] = React.useState(false);
    const [isVisibile, setIsVisible] = React.useState(false);

    const transitions = useTransition(isVisibile, {
        from: {opacity: 0},
        enter: {opacity: 1},
        leave: {opacity: 0},
        config: {duration: 1000}
    });

    React.useEffect(() => {
        setIsClient(true);
        const timeout = setTimeout(() => {
            setIsVisible(true);
        }, 2000);
        if (document.cookie.indexOf("hideFreelanceAd") !== -1) {
            setIsVisible(false);
            clearTimeout(timeout);
        }
    }, []);

    const hideFreeLanceAd = () => {
        var now = new Date();
        var time = now.getTime();
        var expireTime = time + NUM_DAYS_HIDE * 24 * 3600 * 1000;
        now.setTime(expireTime);
        document.cookie =
            "hideFreelanceAd=true;expires=" + now.toUTCString() + ";path=/";
        setIsVisible(false);
    };

    return (
        <>
            {isClient && (
                <>
                    {transitions((style, item) => {
                        return (
                            <>
                                {item && (
                                    <div>
                                        {createPortal(
                                            <>
                                                <animated.div
                                                    className={
                                                        styles.freelanceAd
                                                    }
                                                    style={style}
                                                >
                                                    <span
                                                        className={styles.text}
                                                    >
                                                        Psst... I do freelance
                                                        on Fiverr.{" "}
                                                        <a
                                                            href="https://www.fiverr.com/webwizardnk"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            Check it out!
                                                        </a>
                                                    </span>
                                                    <button
                                                        className={
                                                            styles.closeButton
                                                        }
                                                        onClick={
                                                            hideFreeLanceAd
                                                        }
                                                    >
                                                        <CloseIcon />
                                                    </button>
                                                </animated.div>
                                            </>,
                                            document.body
                                        )}
                                    </div>
                                )}
                            </>
                        );
                    })}
                </>
            )}
        </>
    );
};

export default FreelanceAds;
