import React from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { PlayArrow, HowToReg } from "@mui/icons-material";
import politicianPortrait from "../../../assets/politician-portrait.jpg";
import styles from "./style";

const Hero = () => {
  return (
    <Box sx={{ ...styles.heroSection, marginTop: "0" }} id="home">
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box sx={styles.heroContent}>
              <Typography variant="h1" sx={styles.heroTitle}>
                Leading with
                <br />
                <span style={{ color: "#ffd700" }}>Purpose</span>
              </Typography>
              <Typography variant="h5" sx={styles.heroSubtitle}>
                Together, we'll build a stronger future for our community and
                nation
              </Typography>
              <Box sx={styles.heroButtons}>
                <Button
                  variant="contained"
                  sx={styles.primaryButton}
                  startIcon={<HowToReg />}
                  size="large"
                >
                  Join Our Movement
                </Button>
                <Button
                  variant="outlined"
                  sx={styles.secondaryButton}
                  startIcon={<PlayArrow />}
                  size="large"
                >
                  Watch Video
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
              <img
                src={politicianPortrait}
                alt="John Senator"
                style={styles.profileImage}
              />
            </Box>
          </Grid>

          <Grid item xs={12} sx={{marginLeft:'100px'}}>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={12} sm={4}>
                <Card sx={styles.statsCard}>
                  <CardContent>
                    <Typography sx={styles.statsNumber}>15</Typography>
                    <Typography sx={styles.statsLabel}>
                      Years Experience
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Card sx={styles.statsCard}>
                  <CardContent>
                    <Typography sx={styles.statsNumber}>250K</Typography>
                    <Typography sx={styles.statsLabel}>Supporters</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Card sx={styles.statsCard}>
                  <CardContent>
                    <Typography sx={styles.statsNumber}>50+</Typography>
                    <Typography sx={styles.statsLabel}>Bills Passed</Typography>
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

export default Hero;
