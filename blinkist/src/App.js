import './App.css';
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';
import MainPage from '../src/components/pages/MainPage/MainPage';
import MyLibrary from '../src/components/pages/MyLibrary/MyLibrary';
import { ThemeProvider } from "@material-ui/core/styles";
import mainTheme from '../src/themes/theme'

function App() {
  return (
  
    <Router>
      <ThemeProvider theme={mainTheme}>
            <Switch>
              <Route exact path='/' component={MainPage}></Route>
              <Route exact path='/MyLibrary' component={MyLibrary}></Route>
            </Switch>
          </ThemeProvider>
</Router>
  );
}

export default App;
