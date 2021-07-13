import { ThemeProvider } from "@material-ui/core/styles";
import baseTheme from "themes";

import { render } from "enzyme";

import MainPage from "./MainPage";

describe("Render the Main Page", () => {
  it("Renders the Main Page", async () => {
    jest.useFakeTimers();
    const wrapper = render(
      <ThemeProvider theme={baseTheme}>
        <HomePage />
      </ThemeProvider>
    );
    await Promise.resolve();
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });
});
