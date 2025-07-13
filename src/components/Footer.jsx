import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Link,
  Divider,
  Paper,
  Avatar,
} from "@mui/material";
import {
  Phone,
  Email,
  LocationOn,
  Fax,
  Schedule,
  LocalHospital,
} from "@mui/icons-material";

const Footer = () => {
  const styles = {
    footerContainer: {
      background: "#1A202C",
      color: "white",
      py: { xs: 6, md: 8 },
      mt: "auto",
      position: "relative",
      "&:before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "none",
      },
    },
    avatar: {
      width: 60,
      height: 60,
      mr: 3,
      border: "3px solid rgba(233, 30, 99, 0.3)",
    },
    avatarImage: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    doctorName: {
      fontWeight: 700,
      background: "linear-gradient(45deg, #FF6B9D, #E91E63)",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      mb: 0.5,
    },
    doctorTitle: {
      color: "rgba(255,255,255,0.8)",
      fontWeight: 500,
    },
    description: {
      mb: 3,
      lineHeight: 1.7,
      color: "rgba(255,255,255,0.9)",
      fontSize: "1.1rem",
    },
    quotePaper: {
      p: 3,
      background: "rgba(233, 30, 99, 0.1)",
      border: "1px solid rgba(233, 30, 99, 0.2)",
      borderRadius: 3,
    },
    quoteText: {
      color: "rgba(255,255,255,0.9)",
      fontStyle: "italic",
      textAlign: "center",
    },
    sectionTitle: {
      color: "#FF6B9D",
      fontWeight: 700,
      mb: 3,
      fontSize: "1.3rem",
    },
    footerLink: {
      color: "rgba(255,255,255,0.8)",
      textDecoration: "none",
      transition: "all 0.3s ease",
    },
    locationTitle: {
      color: "#FF6B9D",
      fontWeight: 600,
      mt: 4,
      mb: 2,
    },
    locationText: {
      color: "rgba(255,255,255,0.9)",
    },
    locationIcon: {
      fontSize: "1rem",
      color: "#FF6B9D",
    },
    contactCard: {
      p: 3,
      background: "rgba(255, 255, 255, 0.05)",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      borderRadius: 3,
    },
    contactCardHover: {
      p: 3,
      background: "rgba(255, 255, 255, 0.05)",
      backdropFilter: "blur(10px)",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      borderRadius: 3,
      transition: "all 0.3s ease",
      "&:hover": {
        background: "rgba(233, 30, 99, 0.1)",
        transform: "translateY(-2px)",
      },
    },
    contactLink: {
      display: "flex",
      alignItems: "center",
      gap: 2,
      textDecoration: "none",
      color: "inherit",
    },
    contactIcon: {
      color: "#FF6B9D",
      fontSize: "1.5rem",
    },
    contactLabel: {
      fontWeight: 600,
      color: "white",
    },
    contactValue: {
      color: "#FF6B9D",
      fontWeight: 700,
    },
    contactValueSecondary: {
      color: "rgba(255,255,255,0.9)",
    },
    divider: {
      my: 5,
      borderColor: "rgba(255, 107, 157, 0.3)",
    },
    serviceAreasTitle: {
      color: "#FF6B9D",
      fontWeight: 600,
    },
    serviceAreasContainer: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      gap: 2,
    },
    areaChip: {
      px: 3,
      py: 1,
      background: "rgba(233, 30, 99, 0.1)",
      border: "none",
      borderRadius: 25,
      transition: "all 0.3s ease",
    },
    areaText: {
      color: "white",
      fontWeight: 500,
    },
    bottomFooter: {
      display: "flex",
      justifyContent: { xs: "flex-start", md: "flex-end" },
      gap: 3,
      background: "transparent",
      borderWidth: 0,
      boxShadow: "none",
    },
    bottomLink: {
      transition: "color 0.3s ease",
      color: "rgba(255,255,255,0.8)",
      fontSize: "0.9rem",
    },
    copyright: {
      color: "rgba(255,255,255,0.8)",
    },
  };

  const NavigationStack = () => {
    const location =
      typeof window !== "undefined" ? window.location : { pathname: "" };
    const links = [
      { label: "About", href: "/profile" },
      { label: "Contact", href: "/contact" },
      { label: "FAQ", href: "/faq" },
    ];

    return (
      <Grid item xs={12} md={6}>
        <Paper sx={styles.bottomFooter}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              color="inherit"
              underline="hover"
              sx={{
                ...styles.bottomLink,
                textDecoration:
                  location.pathname === link.href ? "underline" : "none",
              }}
            >
              {link.label}
            </Link>
          ))}
        </Paper>
      </Grid>
    );
  };

  return (
    <Box sx={styles.footerContainer}>
      <Container maxWidth="lg">
        {/* Main Footer Content */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={5}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
              <Avatar sx={styles.avatar}>
                <img
                  src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=200"
                  alt="Dr. Sarah Mitchell"
                  style={styles.avatarImage}
                  loading="lazy"
                />
              </Avatar>
              <Box>
                <Typography variant="h4" gutterBottom sx={styles.doctorName}>
                  Dr. Sarah Mitchell
                </Typography>
                <Typography variant="body2" sx={styles.doctorTitle}>
                  FRANZCOG Specialist
                </Typography>
              </Box>
            </Box>
            <Typography variant="body1" sx={styles.description}>
              Providing compassionate, expert women's health care with over 15
              years of experience. Dedicated to your health and wellbeing at
              every stage of life.
            </Typography>
            <Paper sx={styles.quotePaper}>
              <Typography variant="body2" sx={styles.quoteText}>
                "Your health and wellbeing are my priority"
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="h5" gutterBottom sx={styles.sectionTitle}>
              Services
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              <Link
                href="/obstetrics"
                color="inherit"
                underline="hover"
                sx={styles.footerLink}
              >
                Pregnancy Care
              </Link>
              <Link
                href="/gynaecology"
                color="inherit"
                underline="hover"
                sx={styles.footerLink}
              >
                Women's Health
              </Link>
              <Link
                href="/gynaecology"
                color="inherit"
                underline="hover"
                sx={styles.footerLink}
              >
                PCOS Treatment
              </Link>
              <Link
                href="/gynaecology"
                color="inherit"
                underline="hover"
                sx={styles.footerLink}
              >
                Menopause Care
              </Link>
              <Link
                href="/faq"
                color="inherit"
                underline="hover"
                sx={styles.footerLink}
              >
                FAQ
              </Link>
            </Box>

            <Typography variant="h6" gutterBottom sx={styles.locationTitle}>
              Locations
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <LocalHospital sx={styles.locationIcon} />
                <Typography variant="body2" sx={styles.locationText}>
                  Northern Hospital
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <LocalHospital sx={styles.locationIcon} />
                <Typography variant="body2" sx={styles.locationText}>
                  Sunshine Hospital
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <LocationOn sx={styles.locationIcon} />
                <Typography variant="body2" sx={styles.locationText}>
                  Private Practice, Werribee
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h5" gutterBottom sx={styles.sectionTitle}>
              Contact Information
            </Typography>

            {/* Contact Cards */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <Paper sx={styles.contactCardHover}>
                <Box
                  component="a"
                  href="tel:0416151600"
                  sx={styles.contactLink}
                >
                  <Phone sx={styles.contactIcon} />
                  <Box>
                    <Typography variant="body2" sx={styles.contactLabel}>
                      Call Now
                    </Typography>
                    <Typography variant="h6" sx={styles.contactValue}>
                      0416 151 600
                    </Typography>
                  </Box>
                </Box>
              </Paper>

              <Paper sx={styles.contactCardHover}>
                <Box
                  component="a"
                  href="tel:0394925956"
                  sx={styles.contactLink}
                >
                  <Fax sx={styles.contactIcon} />
                  <Box>
                    <Typography variant="body2" sx={styles.contactLabel}>
                      Fax
                    </Typography>
                    <Typography variant="h6" sx={styles.contactValue}>
                      03 9492 5956
                    </Typography>
                  </Box>
                </Box>
              </Paper>

              <Paper sx={styles.contactCardHover}>
                <Box sx={styles.contactLink}>
                  <Email sx={styles.contactIcon} />
                  <Box>
                    <Typography variant="body2" sx={styles.contactLabel}>
                      Email Us
                    </Typography>
                    <Typography
                      variant="body2"
                      component="a"
                      href="mailto:info@drpriyarajagopal.com.au"
                      sx={{
                        ...styles.contactValueSecondary,
                        textDecoration: "none",
                        cursor: "pointer",
                        "&:hover": {
                          textDecoration: "underline",
                        },
                      }}
                    >
                      info@drpriyarajagopal.com.au
                    </Typography>
                  </Box>
                </Box>
              </Paper>

              <Box sx={styles.contactCard}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Schedule sx={styles.contactIcon} />
                  <Box>
                    <Typography variant="body2" sx={styles.contactLabel}>
                      Consultation Hours
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={styles.contactValueSecondary}
                    >
                      By Appointment Only
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={styles.divider} />

        {/* Service Areas */}
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography variant="h6" gutterBottom sx={styles.serviceAreasTitle}>
            Serving Melbourne Areas
          </Typography>
          <Box sx={styles.serviceAreasContainer}>
            {[
              "Werribee",
              "Pointcook",
              "Tarneit",
              "Wyndham",
              "Hoppers Crossing",
              "Williams Landing",
            ].map((area, index) => (
              <Box key={index} sx={styles.areaChip}>
                <Typography variant="body2" sx={styles.areaText}>
                  {area}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        <Divider sx={styles.divider} />

        {/* Bottom Footer */}
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="body2" sx={styles.copyright}>
              © 2024 Dr. Sarah Mitchell. All rights reserved.
            </Typography>
          </Grid>
          <NavigationStack />
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
