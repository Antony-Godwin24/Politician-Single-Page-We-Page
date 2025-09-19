import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import NavBar from '../components/NavBar/NavBar.jsx';
import Hero from '../components/Home/Hero/Hero.jsx';
import About from '../components/Home/About/About.jsx';
import Party from '../components/Home/Party/Party.jsx';
import Plans from '../components/Home/Plans/Plans.jsx';
import Events from '../components/Home/Events/Events.jsx';
import Footer from '../components/Footer/Footer.jsx';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1565c0',
    },
    secondary: {
      main: '#ffd700',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

const Index = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
        <NavBar />
        <Box sx={{ height: '96px' }} /> {/* Matches AppBar height */}
        <Hero />
        <About />
        <Plans />
        <Party />
        <Events />
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default Index;
