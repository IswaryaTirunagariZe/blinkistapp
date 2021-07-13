import { shallow, render } from "enzyme";

import CategoryType from "./CategoryType";

describe("Categeory List", () => {
  it("Renders Categeory List", () => {
    const categeories = ['Entrepreneurship',
    'Politics',
    'Marketing & Sales',
    'Science',
    'Health & Nutrition',
    'Personal Development',
    'Economics',
    'History',
  ]
    const wrapper = render(<CategoryType categoryType={categeories} />);
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });
});