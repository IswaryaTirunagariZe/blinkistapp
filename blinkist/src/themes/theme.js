import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

import { grey, cyan, orange } from "@material-ui/core/colors";

const defaultTheme = createMuiTheme();

const baseTheme = createMuiTheme({
  typography: {
    fontSize: 12,
  },
});

const mainTheme = responsiveFontSizes(baseTheme);

export default mainTheme;
