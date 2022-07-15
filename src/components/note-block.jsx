import React from "react";
import * as noteblockcss from "../styles/note-block.module.scss";

const NoteBlock = ({children}) => (
    <div class={noteblockcss.admonition}>
        <p class={noteblockcss.admonition_title}>
            Note
        </p>
        <p>{children}</p>
    </div>
);

export default NoteBlock;
