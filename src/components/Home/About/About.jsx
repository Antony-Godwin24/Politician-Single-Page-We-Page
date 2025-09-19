import React from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import { 
  School, 
  Work, 
  People, 
  CheckCircle,
  LocationCity,
  Gavel
} from '@mui/icons-material';

import styles from './style';

const About = () => {
  const achievements = [
    'Led the Education Reform Act of 2020',
    'Secured $50M in infrastructure funding',
    'Champion of Healthcare Access Initiative',
    'Created 10,000+ jobs in renewable energy',
    'Reduced local unemployment by 15%'
  ];

  return (
    <Box sx={styles.section} id='about'>
      <Container maxWidth="lg">
        <Typography variant="h2" sx={styles.sectionTitle}>
          About John Senator
        </Typography>
        <Typography variant="h6" sx={styles.sectionSubtitle}>
          A dedicated public servant with a vision for progress
        </Typography>

        <Grid container spacing={4} sx={{ mb: 6 }}>
          <Grid item xs={12} md={8} sx={{mb:20}}>
            <Card sx={styles.card}>
              <CardContent sx={{ p: 4 }}>
                <Typography sx={styles.bioText}>
                  Senator John has dedicated over 15 years of his life to public service, 
                  fighting tirelessly for the rights and welfare of hardworking families. 
                  Born and raised in our great state, he understands the challenges we face 
                  and has the experience to deliver real solutions.
                </Typography>
                <Typography sx={styles.bioText}>
                  From his early days as a community organizer to his current role in the Senate, 
                  John has consistently stood up for what's right. He believes in transparent 
                  governance, economic opportunity for all, and building bridges across party lines 
                  to get things done.
                </Typography>
                <Typography sx={styles.bioText}>
                  His track record speaks for itself - dozens of bills passed, millions in 
                  funding secured for local communities, and a reputation as someone who 
                  listens to constituents and fights for their interests every single day.
                </Typography>

                <Typography variant="h6" sx={{ ...styles.cardTitle, mt: 4 }}>
                  Key Achievements
                </Typography>
                <List sx={styles.achievementsList}>
                  {achievements.map((achievement, index) => (
                    <ListItem key={index} sx={styles.achievementItem}>
                      <ListItemIcon>
                        <CheckCircle sx={styles.achievementIcon} />
                      </ListItemIcon>
                      <ListItemText primary={achievement} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4} sx={styles.cards}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Card sx={styles.card}>
                  <CardContent sx={{ textAlign: 'center', p: 3 }}>
                    <School sx={styles.cardIcon} />
                    <Typography variant="h6" sx={styles.cardTitle}>
                      Education
                    </Typography>
                    <Typography>
                      Harvard Law School, JD<br/>
                      State University, BA Political Science
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12}>
                <Card sx={styles.card}>
                  <CardContent sx={{ textAlign: 'center', p: 3 }}>
                    <People sx={styles.cardIcon} />
                    <Typography variant="h6" sx={styles.cardTitle}>
                      Family
                    </Typography>
                    <Typography>
                      Married to Sarah<br/>
                      Father of two children<br/>
                      Community volunteer
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              
              
              <Grid item xs={12}>
                <Card sx={styles.card}>
                  <CardContent sx={{ textAlign: 'center', p: 3 }}>
                    <Work sx={styles.cardIcon} />
                    <Typography variant="h6" sx={styles.cardTitle}>
                      Experience
                    </Typography>
                    <Typography>
                      15 Years in Public Service<br/>
                      Former City Council Member<br/>
                      Community Advocate
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;