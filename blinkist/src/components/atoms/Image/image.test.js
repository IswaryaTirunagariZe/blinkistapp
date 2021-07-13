import {  render } from "enzyme";

import Image from "./Image";

describe("image", () => {
  it("Renders an Image", () => {
    const wrapper = render(<Image src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2015%2F04%2F23%2F22%2F00%2Ftree-736885__480.jpg&imgrefurl=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fnature%2F&tbnid=L8xfQakH9a8tJM&vet=12ahUKEwiPu9bCg9_xAhV2kksFHcdQDdIQMygAegUIARDPAQ..i&docid=Ba_eiczVaD9-zM&w=771&h=480&q=images&ved=2ahUKEwiPu9bCg9_xAhV2kksFHcdQDdIQMygAegUIARDPAQ" />);
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });

});