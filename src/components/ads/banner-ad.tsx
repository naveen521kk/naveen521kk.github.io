import React, {useEffect} from "react";
import clx from "classnames";
import {container} from "./Banner.module.scss";

interface BannerProps {
    className?: string;
    style?: React.CSSProperties;
    layout?: string;
    format?: string;
    client?: string;
    responsive?: string;
    slot: string;
    layoutKey?: string;
}

declare global {
    interface Window {
        adsbygoogle: any;
    }
}

const Banner: React.FC<BannerProps> = ({
    className,
    style,
    layout,
    format,
    client = "ca-pub-7183740147103241",
    slot,
    responsive,
    layoutKey
}) => {
    useEffect(() => {
        try {
            const adsbygoogle = window.adsbygoogle || [];
            adsbygoogle.push({});
        } catch (e) {
            console.error(e);
        }
    }, []);
    return (
        <div className={clx(container, className)}>
            <ins
                className="adsbygoogle"
                style={style}
                data-ad-layout={layout}
                data-ad-format={format}
                data-ad-client={client}
                data-ad-slot={slot}
                data-ad-layout-key={layoutKey}
                data-full-width-responsive={responsive}
            />
        </div>
    );
};

export default Banner;
