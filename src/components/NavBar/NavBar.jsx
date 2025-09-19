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
    <AppBar position="static" sx={styles.appBar}>
      <Container maxWidth="lg">
        <Toolbar sx={styles.toolbar}>
          <Typography variant="h6" sx={styles.logo}>
            John Senator
          </Typography>
          <Box sx={styles.navButtons}>
            <Button sx={styles.navButton} startIcon={<Home />}>
              Home
            </Button>
            <Button sx={styles.navButton} startIcon={<Person />}>
              About
            </Button>
            <Button sx={styles.navButton} startIcon={<Group />}>
              Party
            </Button>
            <Button sx={styles.navButton} startIcon={<Event />}>
              Events
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;