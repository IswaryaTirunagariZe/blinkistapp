import { shallow, render } from "enzyme";
import BookCardsList from "./BookCardsList";
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from '../../../reducers/books'
import { getAllbooks } from '../../../actions/books.actions'

describe("Book Cards List", () => {
  it("Renders Book Cards List", () => {
    const store = createStore(
        reducer
      )
    const wrapper = shallow(<Provider store={store}>
        <BookCardsList/></Provider>);
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });
});