import React from 'react';
import { ThemeProvider } from '@material-ui/styles'
import { theme } from './theme';
import { Route, Switch, withRouter } from 'react-router-dom';
import CustomAppBar from './components/CustomAppBar';
import TheProject from './pages/TheProject';
import RoadMap from './pages/RoadMap';
import ImpactCascade from './pages/impactcascade';
import Home from './pages/home'
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CustomAppBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/roadmap' component={RoadMap} />
        <Route path='/the-project' component={TheProject} />
        <Route path='/impact-cascade' component={ImpactCascade} />
      </Switch>
      <Footer />
    </ThemeProvider>
  );
}

export default withRouter(App);
