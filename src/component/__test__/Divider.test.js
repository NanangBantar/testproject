import React from "react";
import { render } from "@testing-library/react";
import Divider from "../Divider";

describe("Divider Component", () => {
    it("renders with default settings", () => {
        const { container } = render(<Divider mode={true}/>);
        const divider = container.firstChild;
        expect(divider).toHaveStyle("width: auto");
        expect(divider).toHaveStyle("margin-left: 0px");
        expect(divider).toHaveAttribute("color", "black");
    });

    it("renders with custom width", () => {
        const { container } = render(<Divider width="50%" />);
        const divider = container.firstChild;
        expect(divider).toHaveStyle("width: 50%");
    });

    it("renders aligned to the left", () => {
        const { container } = render(<Divider align="left" />);
        const divider = container.firstChild;
        expect(divider).toHaveStyle("margin-left: 0px");
    });

    it("renders aligned to the right", () => {
        const { container } = render(<Divider align="right" />);
        const divider = container.firstChild;
        expect(divider).toHaveStyle("margin-right: 0px");
    });

    it("renders with light mode by default", () => {
        const { container } = render(<Divider mode={false} />);
        const divider = container.firstChild;
        expect(divider).toHaveAttribute("color", "white");
    });

    it("renders with dark mode", () => {
        const { container } = render(<Divider mode={true} />);
        const divider = container.firstChild;
        expect(divider).toHaveAttribute("color", "black");
    });
});
