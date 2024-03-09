import React from "react";
import { shallow } from "enzyme";
import Box from "./Box";

describe("Box Component", () => {
    it("renders children correctly", () => {
        const wrapper = shallow(
            <Box>
                <div>Child 1</div>
                <div>Child 2</div>
            </Box>
        );
        expect(wrapper.contains(<div>Child 1</div>)).toBeTruthy();
        expect(wrapper.contains(<div>Child 2</div>)).toBeTruthy();
    });

    it("renders with custom gap", () => {
        const wrapper = shallow(<Box gap="10px" />);
        expect(wrapper.prop("style").gap).toBe("10px");
    });

    it("renders with custom width", () => {
        const wrapper = shallow(<Box width="50%" />);
        expect(wrapper.prop("style").width).toBe("50%");
    });

    it("renders with custom justifyContent", () => {
        const wrapper = shallow(<Box justifyContent="center" />);
        expect(wrapper.prop("style").justifyContent).toBe("center");
    });

    it("renders with custom alignItems", () => {
        const wrapper = shallow(<Box alignItems="center" />);
        expect(wrapper.prop("style").alignItems).toBe("center");
    });
});
