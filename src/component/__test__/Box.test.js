import React from "react";
import { render } from "@testing-library/react";
import Box from "../Box";

describe("Box Component", () => {
    it("renders children correctly", () => {
        const { getByText } = render(
            <Box>
                <div>Child 1</div>
                <div>Child 2</div>
            </Box>
        );
        expect(getByText("Child 1")).toBeInTheDocument();
        expect(getByText("Child 2")).toBeInTheDocument();
    });

    it("renders with custom gap", () => {
        const { container } = render(<Box gap="10px" />);
        expect(container.firstChild).toHaveStyle("gap: 10px");
    });

    it("renders with custom width", () => {
        const { container } = render(<Box width="50%" />);
        expect(container.firstChild).toHaveStyle("width: 50%");
    });

    it("renders with custom justifyContent", () => {
        const { container } = render(<Box justifyContent="center" />);
        expect(container.firstChild).toHaveStyle("justify-content: center");
    });

    it("renders with custom alignItems", () => {
        const { container } = render(<Box alignItems="center" />);
        expect(container.firstChild).toHaveStyle("align-items: center");
    });
});
