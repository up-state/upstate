import { mount } from "@vue/test-utils";
import Another from "./Another.vue";

describe("Another.test.ts", () => {
  it("renders message", () => {
    const wrapper = mount(Another);

    expect(wrapper.text()).toContain("Andother");
  });
});
