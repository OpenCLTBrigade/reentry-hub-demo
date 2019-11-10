import React from 'react';
import { ThemeProvider } from '@material-ui/styles'
import { theme } from './theme';
import { Route, Switch, withRouter } from 'react-router-dom';
import CustomAppBar from './components/CustomAppBar';
import TheProject from './pages/TheProject';
import RoadMap from './pages/RoadMap';
import ImpactCascade from './pages/impactcascade';
import Home from './pages/home'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CustomAppBar />
      <Switch>
        <Route path='/' component={Home} />
        <Route path='/roadmap' component={RoadMap} />
        <Route path='/the-project' component={TheProject} />
        <Route path='/impact-cascade' component={ImpactCascade} />
      </Switch>
    </ThemeProvider>
  );
}

export default withRouter(App);
