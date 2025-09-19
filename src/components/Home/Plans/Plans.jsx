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
  ListItemText,
  Chip,
  LinearProgress
} from '@mui/material';
import { 
  School,
  LocalHospital,
  Work,
  Home,
  Nature,
  Security,
  CheckCircle,
  TrendingUp
} from '@mui/icons-material';
import styles from './style';


const Plans = () => {
  const plans = [
     {
      icon: <Home sx={styles.planIcon} />,
      title: 'Housing Solutions',
      description: 'Addressing the housing crisis with affordable options and protecting homeowners\' rights.',
      goals: [
        'Build 50,000 affordable housing units',
        'First-time buyer assistance programs',
        'Prevent predatory lending',
        'Homeless prevention initiatives',
        'Senior housing development'
      ],
      priority: 'High Priority',
      color: 'error'
    },
    {
      icon: <LocalHospital sx={styles.planIcon} />,
      title: 'Healthcare Access',
      description: 'Ensuring quality, affordable healthcare for every citizen regardless of their economic status.',
      goals: [
        'Lower prescription drug costs',
        'Expand Medicaid coverage',
        'Build 20 new community health centers',
        'Mental health support programs',
        'Preventive care initiatives'
      ],
      priority: 'High Priority',
      color: 'error'
    },
    {
      icon: <Nature sx={styles.planIcon} />,
      title: 'Climate Action',
      description: 'Leading the fight against climate change with renewable energy and environmental protection.',
      goals: [
        'Achieve net-zero emissions by 2030',
        '50% renewable energy by 2028',
        'Green transportation initiatives',
        'Protect natural habitats',
        'Clean air and water standards'
      ],
      priority: 'Medium Priority',
      color: 'warning'
    },
    {
      icon: <Security sx={styles.planIcon} />,
      title: 'Public Safety',
      description: 'Ensuring community safety through reformed policing, crime prevention, and emergency preparedness.',
      goals: [
        'Community policing programs',
        'Crime prevention initiatives',
        'Emergency response improvements',
        'Gun safety measures',
        'Domestic violence support'
      ],
      priority: 'Medium Priority',
      color: 'warning'
    },
    {
      icon: <Work sx={styles.planIcon} />,
      title: 'Job Creation',
      description: 'Creating sustainable, well-paying jobs through infrastructure investment and supporting local businesses.',
      goals: [
        'Create 100,000 new jobs',
        'Support small business growth',
        'Infrastructure modernization',
        'Green energy job training',
        'Minimum wage increase to $15/hour'
      ],
      priority: 'Medium Priority',
      color: 'warning'
    },
    {
      icon: <School sx={styles.planIcon} />,
      title: 'Education Reform',
      description: 'Investing in our children\'s future through modernized schools, better teacher pay, and accessible higher education.',
      goals: [
        'Increase teacher salaries by 25%',
        'Build 50 new schools in underserved areas',
        'Expand free pre-K programs statewide',
        'Reduce college debt by 40%',
        'Modernize STEM curricula'
      ],
      priority: 'High Priority',
      color: 'error'
    },
  ];

  const progressData = [
    { name: 'Education Funding Bill', progress: 85 },
    { name: 'Healthcare Access Act', progress: 72 },
    { name: 'Infrastructure Investment', progress: 60 },
    { name: 'Climate Protection Law', progress: 45 }
  ];

  return (
    <Box sx={styles.section}>
      <Container maxWidth="lg">
        <Typography variant="h2" sx={styles.sectionTitle}>
          Our Vision for the Future
        </Typography>
        <Typography variant="h6" sx={styles.sectionSubtitle}>
          Comprehensive plans to build a better tomorrow for all Americans
        </Typography>

        <Grid container spacing={4} sx={{...styles.plans, mb: 6,spacing:'2' }}>
          {plans.map((plan, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <Card sx={styles.planCard}>
                <CardContent sx={{ p: 4, textAlign: 'center' }}>
                  {plan.icon}
                  <Typography variant="h5" sx={styles.planTitle}>
                    {plan.title}
                  </Typography>
                  <Typography sx={styles.planDescription}>
                    {plan.description}
                  </Typography>
                  
                  <Chip 
                    label={plan.priority} 
                    color={plan.color}
                    size="small"
                    sx={styles.priorityChip}
                  />

                  <List sx={styles.goalsList}>
                    {plan.goals.map((goal, goalIndex) => (
                      <ListItem key={goalIndex} sx={styles.goalItem}>
                        <ListItemIcon sx={styles.goalIcon}>
                          <CheckCircle fontSize="small" />
                        </ListItemIcon>
                        <ListItemText 
                          primary={goal}
                          primaryTypographyProps={{ sx: styles.goalText }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Progress Tracking */}
        <Box sx={styles.progressSection}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <TrendingUp sx={{ fontSize: '2rem', color: '#1565c0', mr: 2 }} />
            <Typography sx={styles.progressTitle}>
              Current Legislative Progress
            </Typography>
          </Box>
          
          <Grid container spacing={4}>
            {progressData.map((item, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Box sx={styles.progressItem}>
                  <Box sx={styles.progressLabel}>
                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                      {item.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#1565c0', fontWeight: 'bold' }}>
                      {item.progress}%
                    </Typography>
                  </Box>
                  <LinearProgress 
                    variant="determinate" 
                    value={item.progress}
                    sx={styles.progressBar}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Plans;