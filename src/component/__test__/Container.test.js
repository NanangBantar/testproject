import React from "react";
import { render } from "@testing-library/react";
import Container from "../Container";

describe("Container Component", () => {
    it("renders children correctly", () => {
        const { getByText } = render(
            <Container>
                <div>Child 1</div>
                <div>Child 2</div>
            </Container>
        );
        expect(getByText("Child 1")).toBeInTheDocument();
        expect(getByText("Child 2")).toBeInTheDocument();
    });

    it("renders with light mode by default", () => {
        const { container } = render(<Container mode={true} />);
        expect(container.firstChild).toHaveStyle("background-color: #D9D9D9");
    });

    it("renders with dark mode", () => {
        const { container } = render(<Container mode={false} />);
        expect(container.firstChild).toHaveStyle("background-color: #262626");
    });
});
