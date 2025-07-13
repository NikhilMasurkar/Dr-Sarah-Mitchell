import React from "react";
import { Box, Container, Typography, Button, Chip } from "@mui/material";
import { ArrowForward, Phone, LocationOn } from "@mui/icons-material";
import useHomeStyles from "../../pages/HomeStyles";

const HeroSection = React.memo(({ highlights, navigate }) => {
  const { classes } = useHomeStyles();
  return (
    <Box className={classes.heroSection}>
      {/* Decorative Elements */}
      <Box className={classes.decorativeElement1} />
      <Box className={classes.decorativeElement2} />
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 3 }}>
        <div
          style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}
        >
          <div style={{ flex: 1, minWidth: 300 }}>
            <Box sx={{ mb: 4 }}>
              <Typography variant="h1" className={classes.heroTitle}>
                Dr. Sarah Mitchell
              </Typography>
              <Typography variant="h4" className={classes.heroSubtitle}>
                Female Obstetrician & Gynaecologist
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 4 }}>
                {highlights.map((highlight, index) => (
                  <Chip
                    key={index}
                    label={highlight}
                    className={classes.highlightChip}
                  />
                ))}
              </Box>
            </Box>
            <Typography
              variant="subtitle1"
              sx={{
                mb: 5,
                fontSize: "1.3rem",
                lineHeight: 1.7,
                maxWidth: "600px",
                color: "#4A5568",
                fontWeight: 400,
              }}
            >
              Providing compassionate, expert women's health care to Werribee,
              Pointcook, Tarneit and Wyndham areas. Your health and wellbeing
              are my priority.
            </Typography>
            <Box sx={{ display: "flex", gap: 4, flexWrap: "wrap", mb: 5 }}>
              <Button
                variant="contained"
                size="large"
                onClick={() => navigate("/contact")}
                endIcon={<ArrowForward />}
                className={classes.primaryButton}
              >
                Book Appointment
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<Phone />}
                component="a"
                href="tel:0416151600"
                className={classes.secondaryButton}
              >
                Call Now
              </Button>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                color: "#718096",
              }}
            >
              <LocationOn sx={{ color: "#E91E63" }} />
              <Typography
                variant="body1"
                sx={{ fontSize: "1.1rem", fontWeight: 500 }}
              >
                Private Practice in Werribee • Northern & Sunshine Hospitals
              </Typography>
            </Box>
          </div>
          <div
            style={{
              flex: 1,
              minWidth: 300,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box className={classes.avatarContainer}>
              <img
                src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Dr. Sarah Mitchell"
                style={{
                  width: "85%",
                  height: "85%",
                  borderRadius: "50%",
                  objectFit: "cover",
                  boxShadow: "0 25px 50px rgba(233, 30, 99, 0.3)",
                }}
                loading="lazy"
              />
            </Box>
          </div>
        </div>
      </Container>
    </Box>
  );
});

export default HeroSection;
