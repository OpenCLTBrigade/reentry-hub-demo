import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, ButtonGroup, Button, Hidden, Grid, Drawer, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import MapIcon from '@material-ui/icons/Map';
import WorkIcon from '@material-ui/icons/Work';
import { Link } from 'react-router-dom';

export default function CustomAppBar(props) {
  const [ drawerIn, setDrawer ] = useState(false);

  const toggleDrawer = () => setDrawer(!drawerIn)

  return (
    <AppBar position='static'>
      <Toolbar>
        <Grid
          container
          direction='row'
          justify='space-between'
          alignItems='center'
        >
          <Grid item>
            <Typography variant='h5'>Re-entry Roadmap</Typography>
          </Grid>
          <Grid item>
            <Hidden smDown>
              <ButtonGroup color='inherit' variant='text' size='large'>
                <Button component={Link} to='/'>Home</Button>
                <Button component={Link} to='/roadmap'>Road Map</Button>
                <Button component={Link} to='/the-project'>The Project</Button>
              </ButtonGroup>
            </Hidden>
            <Hidden mdUp>
              <Button color='inherit' onClick={toggleDrawer}><MenuIcon /></Button>
              <Drawer anchor='top' open={drawerIn} onClose={toggleDrawer}>
                <List>
                  <ListItem button component={Link} to='/'>
                    <ListItemIcon><HomeIcon /></ListItemIcon>
                    <ListItemText primary='Home'/>
                  </ListItem>
                  <ListItem button component={Link} to='/roadmap'>
                    <ListItemIcon><MapIcon /></ListItemIcon>
                    <ListItemText primary='Road Map'/>
                  </ListItem>
                  <ListItem button component={Link} to='/the-project'>
                    <ListItemIcon><WorkIcon /></ListItemIcon>
                    <ListItemText primary='The Project'/>
                  </ListItem>
                </List>
              </Drawer>
            </Hidden>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}