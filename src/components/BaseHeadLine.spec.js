import {mount} from "@vue/test-utils";
// import {expect, test} from "vitest";
import BaseHeadLine from "./BaseHeadLine.vue";

const wrapper = mount(BaseHeadLine, {});

it('should render BaseHeadLine', () => {
    expect(wrapper.exists()).toBe(true);
})

it('should test snapshot UI testing', () => {
    expect(wrapper.text()).toMatchSnapshot();
})
