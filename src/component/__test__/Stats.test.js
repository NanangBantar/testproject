import React from "react";
import { render } from "@testing-library/react";
import Stats from "../Stats";

describe("Stats Component", () => {
    it("renders title and description correctly aligned to the left by default", () => {
        const { getByText } = render(<Stats title="Title" desc="Description" />);
        const titleElement = getByText("Title");
        const descElement = getByText("Description");

        expect(titleElement).toHaveStyle("text-align: left");
        expect(descElement).toHaveStyle("text-align: left");
    });

    it("renders title and description correctly aligned to the right", () => {
        const { getByText } = render(<Stats title="Title" desc="Description" align="right" />);
        const titleElement = getByText("Title");
        const descElement = getByText("Description");

        expect(titleElement).toHaveStyle("text-align: right");
        expect(descElement).toHaveStyle("text-align: right");
    });

    it("renders title and description with light mode by default", () => {
        const { getByText } = render(<Stats title="Title" desc="Description" />);
        const titleElement = getByText("Title");
        const descElement = getByText("Description");

        expect(titleElement).toHaveStyle("color: white");
        expect(descElement).toHaveStyle("color: #919191");
    });

    it("renders title and description with dark mode", () => {
        const { getByText } = render(<Stats title="Title" desc="Description" mode="dark" />);
        const titleElement = getByText("Title");
        const descElement = getByText("Description");

        expect(titleElement).toHaveStyle("color: black");
        expect(descElement).toHaveStyle("color: #919191");
    });
});
