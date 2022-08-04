import React from "react";
import * as noteblockcss from "../styles/note-block.module.scss";

const NoteBlock = ({children}) => (
    <div class={noteblockcss.admonition}>
        <p class={noteblockcss.admonition_title}>Note</p>
        <div className={noteblockcss.inner_div}>{children}</div>
    </div>
);

export default NoteBlock;
