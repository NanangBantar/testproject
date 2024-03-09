import React from "react";

const Stats = ({ title, desc, align = "left", mode }) => {
    const position = align === "left" ? { textAlign: "left" } : { textAlign: "right" };
    return (
        <>
            <p style={{ fontSize: "12px", color: mode ? "black" : "white", margin: "0px 0px", ...position }}>
                {title}
            </p>
            <p style={{ fontSize: "10px", color: "#919191", margin: "5px 0px", ...position }}>
                {desc}
            </p>
        </>
    )
}

export default Stats