import React from "react";

const TitleCenter = ({ mode }) => {
    return (
        <p style={{ textAlign: "center", fontSize: "36px", color: mode ? "black" : "white" }}>
            Consectetur, <span style={{ color: "rgba(255, 0, 0, 1)" }}>adipisci</span> velit,
            sed <span style={{ color: "rgba(255, 0, 0, 1)" }}>quia non</span>
        </p>
    )
}

export default TitleCenter;