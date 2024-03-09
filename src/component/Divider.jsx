import React from "react"

const Divider = ({ width, color, align = "left" }) => {
    const position = align === "left" ? { marginLeft: "0px" } : { marginRight: "0px" };
    return (
        <hr style={{ width: width, ...position }} color={color} />
    )
}

export default Divider