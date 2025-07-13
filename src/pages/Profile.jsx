import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  Card,
  CardContent,
  Divider,
} from "@mui/material";
import {
  School,
  LocationOn,
  Language,
  LocalHospital,
  EmojiEvents,
  SportsBaseball,
  Work,
  MedicalServices,
  HealthAndSafety,
  Favorite,
} from "@mui/icons-material";
import SEOHead from "../components/SEOHead";
import AnimatedSection from "../components/AnimatedSection";

const Profile = () => {
  const styles = {
    pageContainer: {
      bgcolor: "background.default",
      minHeight: "100vh",
    },
    floatingBackground: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: -1,
      overflow: "hidden",
    },
    floatingElement: {
      position: "absolute",
      width: { xs: "40px", md: "80px" },
      height: { xs: "40px", md: "80px" },
      borderRadius: "50%",
      background:
        "linear-gradient(45deg, rgba(202, 8, 88, 0.05), rgba(255, 200, 219, 0.1))",
      animation: "float 10s ease-in-out infinite",
    },
    heroSection: {
      background:
        "linear-gradient(135deg, #E91E63 0%, #FF6B9D 50%, #FFB6C1 100%)",
      color: "white",
      borderRadius: 4,
      overflow: "hidden",
      marginBottom: 6,
      position: "relative",
      boxShadow: "0 20px 60px rgba(233, 30, 99, 0.3)",
      "&:before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background:
          "radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.05) 0%, transparent 50%)",
      },
    },
    profileAvatar: {
      width: "280px",
      height: "280px",
      margin: "0 auto",
      marginBottom: 2,
      border: "6px solid rgba(255, 255, 255, 0.3)",
      boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
      transition: "all 0.3s ease",
      "&:hover": {
        transform: "scale(1.05)",
      },
      "@media (max-width: 900px)": {
        width: "200px",
        height: "200px",
      },
    },
    avatarImage: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    heroTitle: {
      fontSize: "3.2rem",
      marginBottom: 1,
      fontWeight: 800,
      "@media (max-width: 900px)": {
        fontSize: "2.2rem",
      },
    },
    heroSubtitle: {
      marginBottom: 3,
      opacity: 0.95,
      fontWeight: 400,
      fontSize: "1.5rem",
      "@media (max-width: 900px)": {
        fontSize: "1.2rem",
      },
    },
    heroDescription: {
      mb: 4,
      fontSize: "1.15rem",
      lineHeight: 1.8,
      opacity: 0.9,
    },
    heroChip: {
      bgcolor: "rgba(255, 255, 255, 0.2)",
      color: "white",
      fontSize: "1rem",
      py: 2,
    },
    sectionCard: {
      marginBottom: 4,
      borderRadius: 4,
      boxShadow: "0 8px 32px rgba(202, 8, 88, 0.1)",
    },
    cardContent: {
      p: { xs: 3, md: 5 },
    },
    sectionHeader: {
      display: "flex",
      alignItems: "center",
      mb: 3,
    },
    sectionIcon: {
      color: "primary.main",
      fontSize: "2rem",
      mr: 2,
    },
    sectionTitle: {
      color: "primary.main",
      fontWeight: 700,
    },
    sectionText: {
      lineHeight: 1.8,
      fontSize: "1.1rem",
      mb: 3,
    },
    personalBox: {
      display: "flex",
      alignItems: "center",
      gap: 2,
      p: 3,
      bgcolor: "#FFF3F6",
      borderRadius: 3,
      border: "2px solid #FFC8DB",
    },
    personalText: {
      fontStyle: "italic",
      color: "text.primary",
    },
    sidebarCardContent: {
      p: 4,
    },
    sidebarTitle: {
      color: "primary.main",
      fontWeight: 700,
      mb: 3,
    },
    listItem: {
      mb: 2,
    },
    listItemIcon: {
      minWidth: 40,
    },
    listItemText: {
      lineHeight: 1.6,
      fontWeight: 500,
      fontSize: "0.95rem",
    },
    specialtyListItem: {
      mb: 1.5,
    },
    specialtyText: {
      lineHeight: 1.5,
      fontSize: "0.9rem",
    },
    languageChip: {
      fontWeight: 600,
      fontSize: "0.9rem",
    },
    serviceAreaChip: {
      bgcolor: "#FFC8DB",
      color: "primary.main",
      fontWeight: 600,
      fontSize: "0.9rem",
      "&:hover": {
        bgcolor: "primary.main",
        color: "white",
      },
    },
    divider: {
      my: 3,
      borderColor: "#FFC8DB",
    },
  };

  const qualifications = [
    "MBBS - Bachelor of Medicine, Bachelor of Surgery",
    "MD - Doctor of Medicine in Obstetrics and Gynaecology",
    "FRANZCOG - Fellow of the Royal Australian and New Zealand College of Obstetricians and Gynaecologists",
  ];

  const currentAppointments = [
    "Specialist Gynaecologist at Northern Hospital, Melbourne",
    "Specialist Gynaecologist at Sunshine Hospital, Melbourne",
    "Private Practice in Werribee",
    "RANZCOG Accredited Training Supervisor",
  ];

  const specialties = [
    "Comprehensive obstetric care",
    "High-risk pregnancy management",
    "Gynaecological conditions and surgery",
    "PCOS treatment and management",
    "Menopause care and hormone therapy",
    "Contraceptive counselling",
    "Preventive women's health",
    "Training and mentoring medical professionals",
  ];

  const languages = ["English", "Hindi", "Tamil"];
  const serviceAreas = ["Werribee", "Pointcook", "Tarneit", "Wyndham"];

  return (
    <Box sx={styles.pageContainer}>
      <SEOHead
        title="About Dr. Sarah Mitchell - Profile & Qualifications"
        description="Learn about Dr. Sarah Mitchell's qualifications, experience and expertise. FRANZCOG specialist with MBBS and MD from Chennai, providing women's health services in Melbourne since 2009."
        keywords="dr sarah mitchell, obstetrician qualifications, gynaecologist experience, FRANZCOG, melbourne specialist, women's health doctor"
        canonicalUrl="https://drpriyarajagopal.com.au/profile"
        ogTitle="About Dr. Sarah Mitchell - Profile & Qualifications"
        ogDescription="FRANZCOG specialist with extensive experience in women's health. Learn about Dr. Sarah's qualifications and expertise in obstetrics and gynaecology."
        ogType="profile"
      />

      {/* Floating Background Elements */}
      <Box sx={styles.floatingBackground}>
        {[...Array(4)].map((_, i) => (
          <Box
            key={i}
            sx={{
              ...styles.floatingElement,
              animation: `float${i % 3} ${10 + i * 2}s ease-in-out infinite`,
              top: `${20 + Math.random() * 60}%`,
              left: `${10 + Math.random() * 80}%`,
            }}
          />
        ))}
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
        {/* Hero Section */}
        <AnimatedSection animation="fade">
          <Box sx={styles.heroSection}>
            <Container maxWidth="lg">
              <Grid
                container
                spacing={4}
                alignItems="center"
                sx={{ py: { xs: 6, md: 8 } }}
              >
                <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
                  <AnimatedSection animation="fade">
                    <Avatar sx={styles.profileAvatar}>
                      <img
                        src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=400"
                        alt="Dr. Sarah Mitchell"
                        style={styles.avatarImage}
                        loading="lazy"
                      />
                    </Avatar>
                  </AnimatedSection>
                </Grid>
                <Grid item xs={12} md={8}>
                  <Box sx={{ position: "relative", zIndex: 2 }}>
                    <AnimatedSection animation="slideRight">
                      <Typography variant="h1" sx={styles.heroTitle}>
                        Dr. Sarah Mitchell
                      </Typography>
                    </AnimatedSection>
                    <AnimatedSection animation="slideRight">
                      <Typography variant="h5" sx={styles.heroSubtitle}>
                        FRANZCOG Specialist • Female Obstetrician &
                        Gynaecologist
                      </Typography>
                    </AnimatedSection>
                    <AnimatedSection animation="slideRight">
                      <Typography variant="body1" sx={styles.heroDescription}>
                        Dedicated to providing exceptional women's health care
                        with over 15 years of experience. Specialist
                        appointments at Northern and Sunshine Hospitals with
                        private practice in Werribee.
                      </Typography>
                    </AnimatedSection>
                    <AnimatedSection animation="fade">
                      <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                        <Chip
                          icon={<LocationOn />}
                          label="Werribee, Melbourne"
                          sx={styles.heroChip}
                        />
                        <Chip
                          icon={<Language />}
                          label="Hindi, Tamil, English"
                          sx={styles.heroChip}
                        />
                        <Chip
                          icon={<MedicalServices />}
                          label="FRANZCOG Specialist"
                          sx={styles.heroChip}
                        />
                      </Box>
                    </AnimatedSection>
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </AnimatedSection>

        <Grid container spacing={4}>
          {/* Main Content */}
          <Grid item xs={12} lg={8}>
            {/* About Section */}
            <AnimatedSection animation="slideUp">
              <Card sx={styles.sectionCard}>
                <CardContent sx={styles.cardContent}>
                  <Box sx={styles.sectionHeader}>
                    <HealthAndSafety sx={styles.sectionIcon} />
                    <Typography variant="h3" sx={styles.sectionTitle}>
                      About Dr. Sarah
                    </Typography>
                  </Box>
                  <Typography variant="body1" paragraph sx={styles.sectionText}>
                    Dr. Sarah Mitchell completed her Bachelor of Medicine and
                    Bachelor of Surgery (MBBS) and specialist qualification in
                    Obstetrics and Gynaecology, Doctor of Medicine (MD) from the
                    Institute of Obstetrics and Gynaecology in Chennai, India.
                  </Typography>
                  <Typography variant="body1" paragraph sx={styles.sectionText}>
                    Sarah moved to Australia in 2009 and pursued her advanced
                    training in O&G across various health services in Victoria,
                    primarily at Eastern Health. She was subsequently awarded
                    the Fellowship of the Royal Australian and New Zealand
                    College of Obstetrician and Gynaecologists (FRANZCOG).
                  </Typography>
                  <Typography
                    variant="body1"
                    paragraph
                    sx={{ ...styles.sectionText, mb: 0 }}
                  >
                    Dr Sarah has private practice located in Werribee and offers
                    the best obstetric care to Werribee, Pointcook, Tarneit and
                    Wyndham area.
                  </Typography>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Professional Commitment */}
            <AnimatedSection animation="slideUp">
              <Card sx={styles.sectionCard}>
                <CardContent sx={styles.cardContent}>
                  <Box sx={styles.sectionHeader}>
                    <Work sx={styles.sectionIcon} />
                    <Typography variant="h3" sx={styles.sectionTitle}>
                      Professional Excellence
                    </Typography>
                  </Box>
                  <Typography variant="body1" paragraph sx={styles.sectionText}>
                    Sarah is actively engaged in teaching and training the next
                    generation of specialists in O&G. She is a RANZCOG
                    accredited training supervisor for junior doctors
                    undertaking diploma in the field.
                  </Typography>
                  <Typography
                    variant="body1"
                    paragraph
                    sx={{ ...styles.sectionText, mb: 0 }}
                  >
                    She strongly believes in the importance of specialists
                    maintaining and growing their knowledge and skills through
                    continual professional development, ensuring the highest
                    standard of care for all patients.
                  </Typography>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Personal Touch */}
            <AnimatedSection animation="slideUp">
              <Card sx={styles.sectionCard}>
                <CardContent sx={styles.cardContent}>
                  <Box sx={styles.sectionHeader}>
                    <Favorite sx={styles.sectionIcon} />
                    <Typography variant="h3" sx={styles.sectionTitle}>
                      Personal Life
                    </Typography>
                  </Box>
                  <Typography variant="body1" paragraph sx={styles.sectionText}>
                    In her free time, Sarah enjoys the outdoors and takes great
                    pleasure in losing a game of tennis with her son.
                  </Typography>
                  <Box sx={styles.personalBox}>
                    <SportsBaseball
                      sx={{ color: "primary.main", fontSize: "2rem" }}
                    />
                    <Typography variant="body1" sx={styles.personalText}>
                      Tennis enthusiast and outdoor activities lover
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </AnimatedSection>
          </Grid>

          {/* Sidebar */}
          <Grid item xs={12} lg={4}>
            {/* Qualifications */}
            <AnimatedSection animation="fade">
              <Card sx={styles.sectionCard}>
                <CardContent sx={styles.sidebarCardContent}>
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={styles.sidebarTitle}
                  >
                    Medical Qualifications
                  </Typography>
                  <List disablePadding>
                    {qualifications.map((qual, index) => (
                      <ListItem key={index} disablePadding sx={styles.listItem}>
                        <ListItemIcon sx={styles.listItemIcon}>
                          <School color="primary" sx={{ fontSize: "1.5rem" }} />
                        </ListItemIcon>
                        <ListItemText
                          primary={qual}
                          primaryTypographyProps={{
                            variant: "body2",
                            sx: styles.listItemText,
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Current Appointments */}
            <AnimatedSection animation="fade">
              <Card sx={styles.sectionCard}>
                <CardContent sx={styles.sidebarCardContent}>
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={styles.sidebarTitle}
                  >
                    Current Appointments
                  </Typography>
                  <List disablePadding>
                    {currentAppointments.map((appointment, index) => (
                      <ListItem key={index} disablePadding sx={styles.listItem}>
                        <ListItemIcon sx={styles.listItemIcon}>
                          <LocalHospital
                            color="primary"
                            sx={{ fontSize: "1.5rem" }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary={appointment}
                          primaryTypographyProps={{
                            variant: "body2",
                            sx: { ...styles.listItemText, fontWeight: 400 },
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Areas of Expertise */}
            <AnimatedSection animation="fade">
              <Card sx={styles.sectionCard}>
                <CardContent sx={styles.sidebarCardContent}>
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={styles.sidebarTitle}
                  >
                    Areas of Expertise
                  </Typography>
                  <List disablePadding>
                    {specialties.map((specialty, index) => (
                      <ListItem
                        key={index}
                        disablePadding
                        sx={styles.specialtyListItem}
                      >
                        <ListItemIcon sx={styles.listItemIcon}>
                          <EmojiEvents
                            color="primary"
                            sx={{ fontSize: "1.3rem" }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary={specialty}
                          primaryTypographyProps={{
                            variant: "body2",
                            sx: styles.specialtyText,
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Languages & Service Areas */}
            <AnimatedSection animation="fade">
              <Card sx={styles.sectionCard}>
                <CardContent sx={styles.sidebarCardContent}>
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={styles.sidebarTitle}
                  >
                    Languages
                  </Typography>
                  <Box
                    sx={{ display: "flex", flexWrap: "wrap", gap: 1.5, mb: 4 }}
                  >
                    {languages.map((language, index) => (
                      <Chip
                        key={index}
                        label={language}
                        variant="outlined"
                        color="primary"
                        size="medium"
                        sx={styles.languageChip}
                      />
                    ))}
                  </Box>

                  <Divider sx={styles.divider} />

                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ color: "primary.main", fontWeight: 700, mb: 2 }}
                  >
                    Service Areas
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
                    {serviceAreas.map((area, index) => (
                      <Chip
                        key={area}
                        label={area}
                        variant="filled"
                        sx={styles.serviceAreaChip}
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </AnimatedSection>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Profile;
