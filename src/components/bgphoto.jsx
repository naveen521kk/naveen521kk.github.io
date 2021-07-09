import React from "react";
import "../styles/bgphoto.scss";

export default function BgPhoto({img_loc /* image location to be passed*/}) {
    var style = {"background-image": `url(${img_loc})` };
    return (
        <div className="bg-photo-container">
            <div className="bg-photo" style={style}></div>
        </div>
    );
}
