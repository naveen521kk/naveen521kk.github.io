import React from "react";
import Giscus from "@giscus/react";
import {ThemeContext} from "./ThemeContext";

/* <script src="https://giscus.app/client.js"
        data-repo="naveen521kk/naveen521kk.github.io"
        data-repo-id="MDEwOlJlcG9zaXRvcnkyOTU2NjY0ODk="
        data-category="Announcements"
        data-category-id="DIC_kwDOEZ-DOc4CWtyY"
        data-mapping="pathname"
        data-strict="1"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="top"
        data-theme="transparent_dark"
        data-lang="en"
        data-loading="lazy"
        crossorigin="anonymous"
        async>
</script> */

export default function GiscusComment() {
    const {colorMode} = React.useContext(ThemeContext);
    return (
        <Giscus
            id="comments"
            repo="naveen521kk/naveen521kk.github.io"
            repoId="MDEwOlJlcG9zaXRvcnkyOTU2NjY0ODk="
            category="Announcements"
            categoryId="DIC_kwDOEZ-DOc4CWtyY"
            mapping="pathname"
            strict="1"
            reactionsEnabled="1"
            emitMetadata="0"
            inputPosition="top"
            theme={colorMode === "dark" ? "dark" : "light"}
            lang="en"
            loading="lazy"
        />
    );
}
