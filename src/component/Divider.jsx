import React from "react"

const Divider = ({ width, align = "left", mode }) => {
    const position = align === "left" ? { marginLeft: "0px" } : { marginRight: "0px" };
    return (
        <hr style={{ width: width, ...position }} color={mode ? "black" : "white"} />
    )
}

export default Divider