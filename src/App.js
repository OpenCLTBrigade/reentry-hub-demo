import React from 'react';
import { ThemeProvider } from '@material-ui/styles'
import { theme } from './theme';
import { Route, Switch, withRouter } from 'react-router-dom';
import CustomAppBar from './components/CustomAppBar';
import About from './pages/About';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CustomAppBar />
      <Switch>
        <Route path='/about' component={About} />
      </Switch>
    </ThemeProvider>
  );
}

export default withRouter(App);
