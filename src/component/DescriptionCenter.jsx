import React from "react";

const DescriptionCenter = ({ mode }) => {
    return (
        <p style={{ textAlign: "center", fontSize: "12px", color: mode ? "black" : "white" }}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam
        </p>
    )
}

export default DescriptionCenter;