import React from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Link,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemText
} from '@mui/material';
import { 
  Facebook,
  Twitter,
  Instagram,
  YouTube,
  Email,
  Phone,
  LocationOn,
  Flag
} from '@mui/icons-material';
import styles from './style';


const Footer = () => {
  const quickLinks = [
    'About John',
    'Policy Platform',
    'News & Updates',
    'Campaign Events',
    'Volunteer',
    'Donate'
  ];

  const policies = [
    'Education Reform',
    'Healthcare Access',
    'Job Creation',
    'Climate Action',
    'Housing Solutions',
    'Public Safety'
  ];

  const resources = [
    'Voter Registration',
    'Contact Representative',
    'Town Halls',
    'Press Releases',
    'Campaign Store',
    'Privacy Policy'
  ];

  return (
    <Box component="footer" sx={styles.footer}>
      <Container maxWidth="lg">
        <Box sx={styles.footerTop}>
          <Grid container spacing={4}>
            {/* Brand Section */}
            <Grid item xs={12} md={4}>
              <Box sx={styles.footerLogo}>
                <Flag sx={styles.logoIcon} />
                <Typography sx={styles.logoText}>
                  John Senator
                </Typography>
              </Box>
              <Typography sx={styles.footerDescription}>
                Fighting for working families, defending our democracy, 
                and building a future where everyone has the opportunity 
                to succeed. Together, we can create lasting change.
              </Typography>
              
              <Box sx={styles.socialIcons}>
                <IconButton sx={styles.socialIcon} aria-label="Facebook">
                  <Facebook />
                </IconButton>
                <IconButton sx={styles.socialIcon} aria-label="Twitter">
                  <Twitter />
                </IconButton>
                <IconButton sx={styles.socialIcon} aria-label="Instagram">
                  <Instagram />
                </IconButton>
                <IconButton sx={styles.socialIcon} aria-label="YouTube">
                  <YouTube />
                </IconButton>
              </Box>
            </Grid>

            {/* Quick Links */}
            <Grid item xs={12} sm={6} md={2}>
              <Typography sx={styles.sectionTitle}>
                Quick Links
              </Typography>
              <List sx={styles.linkList}>
                {quickLinks.map((link, index) => (
                  <ListItem key={index} sx={styles.linkItem}>
                    <Link href="#" sx={styles.footerLink}>
                      {link}
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Grid>

            {/* Policies */}
            <Grid item xs={12} sm={6} md={2}>
              <Typography sx={styles.sectionTitle}>
                Our Policies
              </Typography>
              <List sx={styles.linkList}>
                {policies.map((policy, index) => (
                  <ListItem key={index} sx={styles.linkItem}>
                    <Link href="#" sx={styles.footerLink}>
                      {policy}
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Grid>

            {/* Resources */}
            <Grid item xs={12} sm={6} md={2}>
              <Typography sx={styles.sectionTitle}>
                Resources
              </Typography>
              <List sx={styles.linkList}>
                {resources.map((resource, index) => (
                  <ListItem key={index} sx={styles.linkItem}>
                    <Link href="#" sx={styles.footerLink}>
                      {resource}
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Grid>

            {/* Contact Info */}
            <Grid item xs={12} sm={6} md={2}>
              <Typography sx={styles.sectionTitle}>
                Contact Us
              </Typography>
              
              <Box sx={styles.contactItem}>
                <Phone sx={styles.contactIcon} />
                <Typography>(555) 123-4567</Typography>
              </Box>
              
              <Box sx={styles.contactItem}>
                <Email sx={styles.contactIcon} />
                <Typography>info@johnsenator.com</Typography>
              </Box>
              
              <Box sx={styles.contactItem}>
                <LocationOn sx={styles.contactIcon} />
                <Typography>
                  123 Capitol Street<br />
                  Washington, DC 20001
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.2)' }} />

        <Box sx={styles.footerBottom}>
          <Typography sx={styles.copyright}>
            © 2024 John Senator for Senate. All rights reserved.
          </Typography>
          <Typography sx={styles.disclaimer}>
            Paid for by John Senator for Senate Campaign Committee
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;