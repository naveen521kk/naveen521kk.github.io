import React from "react";
import * as bgphotocss from "../styles/bgphoto.module.css";

export default function BgPhoto({img_loc /* image location to be passed*/}) {
    var style = {"background-image": `url(${img_loc})`};
    return (
        <div
            className={
                bgphotocss.base_container + " " + bgphotocss.top_container
            }
        >
            <div
                className={
                    bgphotocss.base_container + " " + bgphotocss.inner_container
                }
                style={style}
            ></div>
        </div>
    );
}
