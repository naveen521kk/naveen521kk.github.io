import React from "react";

const JsonLd = ({data}: {data: object}) => (
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(data)}}
    />
);

export {JsonLd};
