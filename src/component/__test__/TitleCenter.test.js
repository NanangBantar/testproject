import React from "react";
import { render } from "@testing-library/react";
import TitleCenter from "../TitleCenter";

describe("TitleCenter Component", () => {
    it("renders with light mode by default", () => {
        const { getByText } = render(<TitleCenter mode={true}/>);
        const adipisciElement = getByText("adipisci");
        const quiaElement = getByText("quia non");

        expect(adipisciElement).toHaveStyle("color: rgba(255, 0, 0, 1)");
        expect(quiaElement).toHaveStyle("color: rgba(255, 0, 0, 1)");
    });

    it("renders with dark mode", () => {
        const { getByText } = render(<TitleCenter mode={false} />);
        const adipisciElement = getByText("adipisci");
        const quiaElement = getByText("quia non");

        expect(adipisciElement).toHaveStyle("color: rgba(255, 0, 0, 1)");
        expect(quiaElement).toHaveStyle("color: rgba(255, 0, 0, 1)");
    });
});
