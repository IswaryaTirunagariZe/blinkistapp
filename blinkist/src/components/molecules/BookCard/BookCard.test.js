import { shallow, render } from "enzyme";

import BookCard from "./BookCard";
import {allBooks} from '../../../api/books';

describe("BookCard", () => {
  it("Renders BookCard", () => {
      const classes={};
    const mockFunction = jest.fn();
    const wrapper = shallow(<BookCard books={allBooks[1]} buttonAction="+ Add To Library"
    classes={classes}
    handleClick={()=>mockFunction()}></BookCard>);
    wrapper.simulate("click");
    wrapper.update();
  // expect(mockFunction).toBeCalled();
  });
});