import React from "react"

const Box = ({ children, gap = "0px", width, justifyContent = "unset", alignItems = "unset" }) => {
    return (
        <div
            style={{
                width: width,
                display: "flex",
                flexDirection: "column",
                gap: gap,
                justifyContent: justifyContent,
                alignItems: alignItems
            }}
        >{children}
        </div>
    )
}

export default Box