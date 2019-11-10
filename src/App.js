import React from 'react';
import { ThemeProvider } from '@material-ui/styles'
import { theme } from './theme';
import { Route, Switch, withRouter } from 'react-router-dom';
import CustomAppBar from './components/CustomAppBar';
import TheProject from './pages/TheProject';
import RoadMap from './pages/RoadMap';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CustomAppBar />
      <Switch>
        <Route path='/roadmap' component={RoadMap} />
        <Route path='/the-project' component={TheProject} />
      </Switch>
    </ThemeProvider>
  );
}

export default withRouter(App);
