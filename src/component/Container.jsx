import React from "react";

const Container = ({ children, mode }) => {
    return (
        <div
            style={{
                backgroundColor: mode ? "#D9D9D9" : "#262626"
            }}
            className="container">
            {children}
        </div >
    )
}

export default Container