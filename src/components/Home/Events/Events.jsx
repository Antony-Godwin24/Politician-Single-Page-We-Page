import React from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
  Avatar,
  Divider
} from '@mui/material';
import { 
  Event,
  LocationOn,
  AccessTime,
  Person,
  Group,
  Mic,
  Campaign,
  Handshake
} from '@mui/icons-material';


import styles from './style';


const Events = () => {
  const upcomingEvents = [
     {
      title: 'Business Leaders Breakfast',
      date: 'March 06, 2026',
      time: '8:00 AM - 10:00 AM',
      location: 'Downtown Convention Center',
      description: 'Connect with local business leaders to discuss economic development and job creation initiatives.',
      type: 'Business Event',
      typeColor: 'success',
      icon: <Handshake />
    },
     {
      title: 'Education Policy Forum',
      date: 'March 14, 2026',
      time: '2:00 PM - 4:00 PM',
      location: 'High School Auditorium',
      description: 'Teachers, parents, and students are invited to discuss our comprehensive education reform plans.',
      type: 'Policy Forum',
      typeColor: 'secondary',
      icon: <Group />
    },
    {
      title: 'Healthcare Town Hall',
      date: 'March 22, 2026',
      time: '7:00 PM - 9:00 PM',
      location: 'Community Center, Main Street',
      description: 'Everyone who are interested are invited to discuss our comprehensive Heath Related reform plans.',
      type: 'Town Hall',
      typeColor: 'primary',
      icon: <Mic />
    },
  ];

  const pastEvents = [
    {
      title: 'Climate Action Rally',
      date: 'February 18, 2024',
      location: 'City Park',
      attendees: 2500,
      description: 'Successful rally bringing together environmental advocates and concerned citizens.'
    },
    {
      title: 'Veterans Support Meeting',
      date: 'February 10, 2024',
      location: 'VFW Hall',
      attendees: 180,
      description: 'Meaningful discussion about expanding veterans\' benefits and support services.'
    },
    {
      title: 'Housing Crisis Forum',
      date: 'January 25, 2024',
      location: 'Library Conference Room',
      attendees: 95,
      description: 'Productive forum addressing affordable housing solutions for our community.'
    }
  ];

  return (
    <Box sx={styles.section}>
      <Container maxWidth="lg">
        <Typography variant="h2" sx={styles.sectionTitle}>
          Upcoming Events
        </Typography>
        <Typography variant="h6" sx={styles.sectionSubtitle}>
          Join us as we work together to build a better future
        </Typography>

        {/* Featured Event */}
        <Card sx={{ ...styles.eventCard, ...styles.featuredCard, mb: 6 }}>
          <Box sx={styles.featuredImage} />
          <CardContent sx={{ p: 6, ...styles.featuredContent }}>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={8}>
                <Chip 
                  label="Featured Event" 
                  color="warning"
                  sx={{ ...styles.typeChip, color: 'white', backgroundColor: '#ffd700' }}
                />
                <Typography sx={styles.featuredTitle}>
                  Campaign Rally - "Together We Rise"
                </Typography>
                <Box sx={styles.featuredDetails}>
                  <Event sx={styles.eventIcon} />
                  <Typography>Saturday, March 30, 2024</Typography>
                </Box>
                <Box sx={styles.featuredDetails}>
                  <AccessTime sx={styles.eventIcon} />
                  <Typography>3:00 PM - 6:00 PM</Typography>
                </Box>
                <Box sx={styles.featuredDetails}>
                  <LocationOn sx={styles.eventIcon} />
                  <Typography>Riverside Park Amphitheater</Typography>
                </Box>
                <Typography sx={styles.featuredDescription}>
                  Join thousands of supporters for our biggest campaign rally yet! 
                  Experience inspiring speeches, live music, and connect with your community. 
                  Free food, family activities, and voter registration available.
                </Typography>
                <Button 
                  variant="contained"
                  size="large"
                  sx={styles.featuredButton}
                  startIcon={<Campaign />}
                >
                  Register to Attend
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <Grid container spacing={4} sx={{...styles.events, mb: 8 }}>
          {upcomingEvents.map((event, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={styles.eventCard}>
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Avatar sx={{ backgroundColor: '#1565c0', mr: 2 }}>
                      {event.icon}
                    </Avatar>
                    <Chip 
                      label={event.type}
                      color={event.typeColor}
                      size="small"
                      sx={styles.typeChip}
                    />
                  </Box>
                  
                  <Typography sx={styles.eventTitle}>
                    {event.title}
                  </Typography>
                  
                  <Box sx={styles.eventDetails}>
                    <Event sx={styles.eventIcon} />
                    <Typography>{event.date}</Typography>
                  </Box>
                  <Box sx={styles.eventDetails}>
                    <AccessTime sx={styles.eventIcon} />
                    <Typography>{event.time}</Typography>
                  </Box>
                  <Box sx={styles.eventDetails}>
                    <LocationOn sx={styles.eventIcon} />
                    <Typography>{event.location}</Typography>
                  </Box>
                  
                  <Typography sx={styles.eventDescription}>
                    {event.description}
                  </Typography>
                  
                  <Button 
                    variant="contained"
                    fullWidth
                    sx={styles.attendButton}
                    startIcon={<Person />}
                  >
                  Register to Attend
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 6 }} />

        {/* Past Events */}
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4, color: '#1565c0',display:'flex',justifyContent:'center',alignItems:'center' }}>
          Recent Events
        </Typography>
        <Grid container spacing={4} sx={styles.recent}>
          {pastEvents.map((event, index) => (
            <Grid item xs={12} md={4} key={index} sx={styles.recentX}>
              <Card sx={{ ...styles.eventCard, ...styles.pastEventCard }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography sx={styles.pastEventTitle}>
                    {event.title}
                  </Typography>
                  
                  <Box sx={styles.eventDetails}>
                    <Event sx={styles.eventIcon} />
                    <Typography>{event.date}</Typography>
                  </Box>
                  <Box sx={styles.eventDetails}>
                    <LocationOn sx={styles.eventIcon} />
                    <Typography>{event.location}</Typography>
                  </Box>
                  
                  <Typography sx={styles.eventDescription}>
                    {event.description}
                  </Typography>
                  
                  <Box sx={styles.attendeeCount}>
                    <Group sx={{ mr: 1 }} />
                    <Typography>{event.attendees.toLocaleString()} attendees</Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Events;