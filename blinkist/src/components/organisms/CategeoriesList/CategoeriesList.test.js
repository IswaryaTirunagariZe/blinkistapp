import { shallow, render } from "enzyme";
import CategeoriesList from "./CategeoriesList";

describe("Categeories List", () => {
  it("Renders Categeories List", () => {
    const wrapper = render(<CategeoriesList/>);
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });
});