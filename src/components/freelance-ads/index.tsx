import React from "react";
import {CloseIcon} from "../icons";
import {createPortal} from "react-dom";
import * as styles from "./freelance-ads.module.scss";
import {useTransition, animated} from "@react-spring/web";
import {addEvent} from "../../api";

const NUM_DAYS_HIDE = 3;

declare global {
    interface Window {
        gtag: any;
    }
}

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

    React.useEffect(() => {
        if (!isVisibile) {
            return;
        }
        if (typeof window !== "undefined" && window.gtag) {
            window.gtag("event", "show_freelance_ad", {
                event_category: "engagement",
                event_label: "freelance_ad"
            });
        }
        addEvent(`show_freelance_ad`);
    }, [isVisibile]);

    const hideFreeLanceAd = () => {
        var now = new Date();
        var time = now.getTime();
        var expireTime = time + NUM_DAYS_HIDE * 24 * 3600 * 1000;
        now.setTime(expireTime);
        document.cookie =
            "hideFreelanceAd=true;expires=" + now.toUTCString() + ";path=/";
        setIsVisible(false);

        if (typeof window !== "undefined" && window.gtag) {
            window.gtag("event", "close_freelance_ad", {
                event_category: "engagement",
                event_label: "freelance_ad"
            });
        }

        addEvent(`close_freelance_ad`);
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
                                                            href="https://www.fiverr.com/webwizardnk?utm_source=naveenmk.me"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            onClick={() => {
                                                                if (
                                                                    typeof window !==
                                                                        "undefined" &&
                                                                    window.gtag
                                                                ) {
                                                                    window.gtag(
                                                                        "event",
                                                                        "open_freelance_ad",
                                                                        {
                                                                            event_category:
                                                                                "engagement",
                                                                            event_label:
                                                                                "freelance_ad"
                                                                        }
                                                                    );
                                                                }
                                                                addEvent(
                                                                    `open_freelance_ad`
                                                                );

                                                                hideFreeLanceAd();
                                                            }}
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
                                                        aria-label="Close"
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
