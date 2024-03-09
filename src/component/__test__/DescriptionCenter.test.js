import React from "react";
import { render } from "@testing-library/react";
import DescriptionCenter from "../DescriptionCenter";

describe("DescriptionCenter Component", () => {
    it("renders with light mode by default", () => {
        const { getByText } = render(<DescriptionCenter mode={false} />);
        const description = getByText(
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam"
        );
        expect(description).toBeInTheDocument();
        expect(description).toHaveStyle("color: white");
    });

    it("renders with dark mode", () => {
        const { getByText } = render(<DescriptionCenter mode={true} />);
        const description = getByText(
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam"
        );
        expect(description).toBeInTheDocument();
        expect(description).toHaveStyle("color: black");
    });
});
