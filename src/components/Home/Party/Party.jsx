import React from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Avatar,
  Chip
} from '@mui/material';
import { 
  Flag, 
  Group, 
  History,
  EmojiEvents,
  People
} from '@mui/icons-material';
import styles from './style';

const Party = () => {
  const partyHistory = [
    { year: '1854', event: 'Democratic Party Founded', description: 'Established as the party of the common people' },
    { year: '1932', event: 'New Deal Era', description: 'Pioneered social safety net programs' },
    { year: '1964', event: 'Civil Rights Act', description: 'Championed civil rights legislation' },
    { year: '2008', event: 'Historic Election', description: 'First African American president elected' },
    { year: '2020', event: 'Climate Leadership', description: 'Leading the fight against climate change' }
  ];

  const partyLeaders = [
    { name: 'Sarah Johnson', position: 'Party Chairwoman', avatar: 'SJ' },
    { name: 'Michael Davis', position: 'Deputy Chair', avatar: 'MD' },
    { name: 'Lisa Chen', position: 'Policy Director', avatar: 'LC' },
    { name: 'Robert Wilson', position: 'Campaign Manager', avatar: 'RW' }
  ];

  return (
    <Box sx={styles.section} id='party'>
      <Container maxWidth="lg">
        <Typography variant="h2" sx={styles.sectionTitle}>
          Our Democratic Party
        </Typography>
        <Typography variant="h6" sx={styles.sectionSubtitle}>
          Standing together for progress, equality, and opportunity
        </Typography>

        {/* Party Overview */}
        <Card sx={styles.partyCard}>
          <CardContent sx={{ p: 6, textAlign: 'center' }}>
            <Flag sx={styles.partyLogo} />
            <Typography sx={styles.partyName}>
              Democratic Party
            </Typography>
            <Typography sx={styles.partyMotto}>
              "For the People, By the People"
            </Typography>
            
            <Grid container spacing={3} sx={styles.statsGrid}>
              <Grid item xs={6} md={3}>
                <Card sx={styles.statCard}>
                  <CardContent>
                    <Typography sx={styles.statNumber}>170</Typography>
                    <Typography sx={styles.statLabel}>Years of Service</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6} md={3}>
                <Card sx={styles.statCard}>
                  <CardContent>
                    <Typography sx={styles.statNumber}>47M</Typography>
                    <Typography sx={styles.statLabel}>Registered Voters</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6} md={3}>
                <Card sx={styles.statCard}>
                  <CardContent>
                    <Typography sx={styles.statNumber}>235</Typography>
                    <Typography sx={styles.statLabel}>House Seats</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6} md={3}>
                <Card sx={styles.statCard}>
                  <CardContent>
                    <Typography sx={styles.statNumber}>50</Typography>
                    <Typography sx={styles.statLabel}>Senate Seats</Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        <Grid container spacing={4} sx={styles.historyCardX}>
          {/* Party History */}
          <Grid item xs={12} md={6}>
            <Card sx={styles.historyCard}>
              <CardContent sx={{ p: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <History sx={{ fontSize: '2rem', color: '#1565c0', mr: 2 }} />
                  <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#1565c0' }}>
                    Party History
                  </Typography>
                </Box>
                <Container sx={styles.hist}>
                  <Box>
                    {partyHistory.map((item, index) => (
                      <Box key={index} sx={styles.historyItem}>
                        <Typography sx={styles.historyYear}>
                          {item.year}
                        </Typography>
                        <Box sx={styles.historyContent}>
                          <Typography sx={styles.historyTitle}>
                            {item.event}
                          </Typography>
                          <Typography sx={styles.historyDescription}>
                            {item.description}
                          </Typography>
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </Container>
              </CardContent>
            </Card>
          </Grid>

          {/* Party Leadership */}
          <Grid item xs={12} md={6}>
            <Box sx={{ mt:4,mb: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <People sx={{ fontSize: '2rem', color: '#1565c0', mr: 2 }} />
                <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#1565c0' }}>
                  Party Leadership
                </Typography>
              </Box>
            </Box>

            <Grid container spacing={3}>
              {partyLeaders.map((leader, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Card sx={styles.leaderCard}>
                    <CardContent sx={{ p: 3 }}>
                      <Avatar sx={styles.leaderAvatar}>
                        {leader.avatar}
                      </Avatar>
                      <Typography sx={styles.leaderName}>
                        {leader.name}
                      </Typography>
                      <Typography sx={styles.leaderPosition}>
                        {leader.position}
                      </Typography>
                      <Chip 
                        label="Democratic Leader" 
                        color="primary" 
                        size="small"
                      />
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            {/* Core Values */}
            <Card sx={{ mt: 3, ...styles.historyCard }}>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#1565c0', mb: 2 }}>
                  Core Values
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {['Equality', 'Justice', 'Opportunity', 'Progress', 'Unity', 'Democracy'].map((value) => (
                    <Chip key={value} label={value} color="primary" variant="outlined" sx={styles.core} />
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Party;