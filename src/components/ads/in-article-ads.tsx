import React from "react";

import Banner from "./banner-ad";

export const InArticleAds = {
    First: () => (
        <Banner
            style={{display: "block", textAlign: "center"}}
            layout="in-article"
            format="fluid"
            client="ca-pub-7183740147103241"
            slot="5517461733"
        />
    ),
    Second: () => (
        <Banner
            style={{display: "block", textAlign: "center"}}
            layout="in-article"
            format="fluid"
            client="ca-pub-7183740147103241"
            slot="3138917231"
        />
    )
};
