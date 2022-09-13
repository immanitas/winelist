import { LinkProps } from '@mui/material/Link';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import './App.css';
import { LinkBehavior } from './components/link/LinkBehavior';
import AddWineContainer from './containers/add-wine-container/AddWineContainer';
import DisplayWineContainer from './containers/display-wine-container/DisplayWineContainer';
import WineListContainer from './containers/wine-list-container/WineListContainer';
import store from './services/rootReducer';


function App() {
  let theme = useTheme();
  theme = {...theme, ...{
    components: {...theme.components, MuiLink: {
      defaultProps: {
        component: LinkBehavior,
      } as LinkProps,
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehavior,
      },
    }, }
  }}
  
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<WineListContainer />} />
            <Route path="/wines/:id" element={<DisplayWineContainer />} />
            <Route path="/wines/add" element={<AddWineContainer />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
