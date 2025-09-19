import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container
} from '@mui/material';
import { Home, Person, Group, Event, Flag } from '@mui/icons-material';

import styles from './style';

const NavBar = () => {
  return (
   <AppBar position="static" sx={{ ...styles.appBar, marginBottom: '0' }}>
  <Container maxWidth="lg">
    <Toolbar sx={styles.toolbar}>
      <Typography variant="h6" sx={styles.logo}>
        John Senator
      </Typography>
      <Box sx={styles.navButtons}>
        <Button
          sx={styles.navButton}
          startIcon={<Home />}
          component="a"
          href="#home"
        >
          Home
        </Button>
        <Button
          sx={styles.navButton}
          startIcon={<Person />}
          component="a"
          href="#about"
        >
          About
        </Button>
        <Button
          sx={styles.navButton}
          startIcon={<Group />}
          component="a"
          href="#party"
        >
          Party
        </Button>
        <Button
          sx={styles.navButton}
          startIcon={<Event />}
          component="a"
          href="#events"
        >
          Events
        </Button>
      </Box>
    </Toolbar>
  </Container>
</AppBar>
  );
};

export default NavBar;