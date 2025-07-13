import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Fade,
  Slide,
  Zoom,
} from "@mui/material";
import {
  ExpandMore,
  FavoriteOutlined,
  HealthAndSafetyOutlined,
  MedicalServicesOutlined,
  CheckCircleOutlined,
  LocalHospital,
  Psychology,
  Healing,
} from "@mui/icons-material";

const Gynaecology = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const services = [
    {
      title: "Reproductive Health",
      icon: <FavoriteOutlined sx={{ fontSize: 40 }} />,
      description:
        "Comprehensive reproductive health services for women of all ages.",
      features: [
        "Menstrual disorders treatment",
        "Fertility assessment and counseling",
        "Contraceptive advice and services",
        "Preconception counseling",
        "STI screening and treatment",
      ],
      image:
        "https://images.pexels.com/photos/4386483/pexels-photo-4386483.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Specialized Conditions",
      icon: <MedicalServicesOutlined sx={{ fontSize: 40 }} />,
      description: "Expert treatment for complex gynecological conditions.",
      features: [
        "PCOS management",
        "Endometriosis treatment",
        "Fibroids management",
        "Ovarian cysts treatment",
        "Pelvic pain diagnosis",
      ],
      image:
        "https://images.pexels.com/photos/4386484/pexels-photo-4386484.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Preventive Care",
      icon: <HealthAndSafetyOutlined sx={{ fontSize: 40 }} />,
      description:
        "Preventive care services to maintain optimal women's health.",
      features: [
        "Pap smears and cervical screening",
        "Breast examination",
        "Bone density screening",
        "Menopause management",
        "Health maintenance check-ups",
      ],
      image:
        "https://images.pexels.com/photos/4386485/pexels-photo-4386485.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  const conditions = [
    {
      name: "PCOS (Polycystic Ovary Syndrome)",
      description:
        "A hormonal disorder affecting reproductive-aged women, causing irregular periods, excess hair growth, and metabolic issues.",
      symptoms: [
        "Irregular periods",
        "Weight gain",
        "Acne",
        "Hair loss",
        "Difficulty conceiving",
      ],
      treatment: [
        "Lifestyle modifications",
        "Hormonal therapy",
        "Metformin for insulin resistance",
        "Fertility treatments",
      ],
      image:
        "https://images.pexels.com/photos/3845457/pexels-photo-3845457.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Endometriosis",
      description:
        "A condition where tissue similar to the uterine lining grows outside the uterus, causing pain and potentially affecting fertility.",
      symptoms: [
        "Pelvic pain",
        "Heavy periods",
        "Pain during intercourse",
        "Bloating",
        "Fatigue",
      ],
      treatment: [
        "Pain management",
        "Hormonal therapy",
        "Laparoscopic surgery",
        "Fertility preservation",
      ],
      image:
        "https://images.pexels.com/photos/3845456/pexels-photo-3845456.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Menopause",
      description:
        "The natural transition when menstrual periods stop, typically occurring in women aged 45-55.",
      symptoms: [
        "Hot flashes",
        "Night sweats",
        "Mood changes",
        "Sleep disturbances",
        "Vaginal dryness",
      ],
      treatment: [
        "Hormone replacement therapy",
        "Lifestyle modifications",
        "Non-hormonal medications",
        "Counseling support",
      ],
      image:
        "https://images.pexels.com/photos/3845623/pexels-photo-3845623.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  const faqs = [
    {
      question: "When should I start having regular gynecological check-ups?",
      answer:
        "It's recommended to start regular gynecological check-ups around age 18 or when you become sexually active, whichever comes first. Annual check-ups are important for preventive care.",
    },
    {
      question: "How often should I have a Pap smear?",
      answer:
        "Generally, Pap smears are recommended every 2-3 years for women aged 21-65, depending on your age and risk factors. Your doctor will advise on the appropriate schedule for you.",
    },
    {
      question: "What are the symptoms of PCOS?",
      answer:
        "Common symptoms include irregular periods, excess hair growth, acne, weight gain, and difficulty conceiving. If you experience these symptoms, consult with a gynecologist for proper diagnosis.",
    },
    {
      question: "Is hormone replacement therapy safe?",
      answer:
        "HRT can be safe and effective for many women when used appropriately. The benefits and risks vary for each individual, so it's important to discuss your specific situation with your doctor.",
    },
    {
      question: "What contraceptive options are available?",
      answer:
        "Options include hormonal methods (pills, patches, rings), IUDs, implants, barrier methods, and permanent sterilization. We'll help you choose the best option based on your needs and health history.",
    },
  ];

  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      <Helmet>
        <title>
          Gynaecology Services Melbourne | Women's Health | Dr. Sarah Mitchell
        </title>
        <meta
          name="description"
          content="Comprehensive gynaecology services in Melbourne. Expert treatment for PCOS, endometriosis, menopause, contraceptive advice and women's health. Serving Werribee and surrounding areas."
        />
        <meta
          name="keywords"
          content="gynaecology melbourne, women's health, PCOS treatment, endometriosis, menopause care, contraceptive advice, pap smear, werribee gynaecologist"
        />
        <meta
          property="og:title"
          content="Gynaecology Services Melbourne | Women's Health"
        />
        <meta
          property="og:description"
          content="Expert women's health care including PCOS treatment, endometriosis management, menopause care and preventive health services."
        />
        <meta property="og:type" content="website" />
        <link
          rel="canonical"
          href="https://drpriyarajagopal.com.au/gynaecology"
        />
      </Helmet>

      {/* Floating Background Elements */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          overflow: "hidden",
        }}
      >
        {[...Array(4)].map((_, i) => (
          <Box
            key={i}
            sx={{
              position: "absolute",
              width: { xs: "40px", md: "70px" },
              height: { xs: "40px", md: "70px" },
              borderRadius: "50%",
              background: `linear-gradient(45deg, rgba(202, 8, 88, 0.05), rgba(255, 200, 219, 0.1))`,
              animation: `float${i % 3} ${14 + i * 2}s ease-in-out infinite`,
              top: `${15 + Math.random() * 70}%`,
              left: `${10 + Math.random() * 80}%`,
            }}
          />
        ))}
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
        {/* Header */}
        <Fade in timeout={800}>
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="h1"
              gutterBottom
              sx={{ fontWeight: 800, mb: 2 }}
            >
              Gynaecology Services
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              gutterBottom
              sx={{ mb: 3 }}
            >
              Comprehensive women's health care for all life stages
            </Typography>
            <Typography
              variant="body1"
              sx={{
                maxWidth: "800px",
                mx: "auto",
                fontSize: "1.1rem",
                lineHeight: 1.7,
              }}
            >
              Our gynaecology services provide complete care for women's
              reproductive health, from adolescence through menopause, with
              personalized treatment plans and compassionate care.
            </Typography>
          </Box>
        </Fade>

        {/* Hero Image */}
        <Zoom in timeout={1000}>
          <Box sx={{ mb: 8, position: "relative" }}>
            <img
              src="https://sunwayfertility.com.my/wp-content/uploads/2020/08/shutterstock_562602514-1170x658.jpg"
              alt="Gynaecology Care"
              style={{
                width: "100%",
                height: "400px",
                objectFit: "cover",
                borderRadius: "20px",
                boxShadow: "0 20px 60px rgba(202, 8, 88, 0.2)",
              }}
              loading="lazy"
            />
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background:
                  "linear-gradient(45deg, rgba(202, 8, 88, 0.1), transparent)",
                borderRadius: "20px",
              }}
            />
          </Box>
        </Zoom>

        {/* Services Grid */}
        <Typography
          variant="h2"
          align="center"
          gutterBottom
          sx={{ mb: 6, fontWeight: 700 }}
        >
          Our Comprehensive Services
        </Typography>

        <Grid container spacing={4} sx={{ mb: 8 }}>
          {services.map((service, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Slide direction="up" in timeout={800 + index * 200}>
                <Card
                  sx={{
                    height: "100%",
                    borderRadius: 5,
                    overflow: "hidden",
                    transition: "all 0.4s ease",
                  }}
                >
                  <Box
                    sx={{
                      height: 200,
                      backgroundImage: `url(${service.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      position: "relative",
                      "&:after": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background:
                          "linear-gradient(45deg, rgba(202, 8, 88, 0.1), transparent)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        top: 20,
                        right: 20,
                        bgcolor: "white",
                        borderRadius: "50%",
                        p: 2,
                        color: "primary.main",
                        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                        zIndex: 2,
                      }}
                    >
                      {service.icon}
                    </Box>
                  </Box>
                  <CardContent sx={{ p: 4 }}>
                    <Typography
                      variant="h4"
                      gutterBottom
                      sx={{ fontWeight: 600, mb: 2 }}
                    >
                      {service.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 3, lineHeight: 1.6 }}
                    >
                      {service.description}
                    </Typography>

                    <List disablePadding>
                      {service.features.map((feature, featureIndex) => (
                        <ListItem
                          key={featureIndex}
                          disablePadding
                          sx={{ mb: 1 }}
                        >
                          <ListItemIcon sx={{ minWidth: 32 }}>
                            <CheckCircleOutlined
                              color="primary"
                              sx={{ fontSize: "1.2rem" }}
                            />
                          </ListItemIcon>
                          <ListItemText
                            primary={feature}
                            primaryTypographyProps={{
                              variant: "body2",
                              fontSize: "0.9rem",
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </Slide>
            </Grid>
          ))}
        </Grid>

        {/* Common Conditions */}
        <Typography
          variant="h2"
          align="center"
          gutterBottom
          sx={{ mb: 6, fontWeight: 700 }}
        >
          Common Conditions We Treat
        </Typography>

        <Grid container spacing={4} sx={{ mb: 8 }}>
          {conditions.map((condition, index) => (
            <Grid item xs={12} key={index}>
              <Fade in timeout={1000 + index * 300}>
                <Paper
                  sx={{
                    borderRadius: 5,
                    overflow: "hidden",
                    boxShadow: "0 8px 32px rgba(202, 8, 88, 0.1)",
                  }}
                >
                  <Grid container>
                    <Grid item xs={12} md={4}>
                      <Box
                        sx={{
                          height: { xs: 200, md: "100%" },
                          minHeight: 300,
                          backgroundImage: `url(${condition.image})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          position: "relative",
                          "&:after": {
                            content: '""',
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background:
                              "linear-gradient(45deg, rgba(202, 8, 88, 0.1), transparent)",
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} md={8}>
                      <Box sx={{ p: 4 }}>
                        <Typography
                          variant="h4"
                          gutterBottom
                          color="primary"
                          sx={{ fontWeight: 700, mb: 2 }}
                        >
                          {condition.name}
                        </Typography>
                        <Typography
                          variant="body1"
                          paragraph
                          sx={{ lineHeight: 1.7, mb: 3 }}
                        >
                          {condition.description}
                        </Typography>

                        <Grid container spacing={3}>
                          <Grid item xs={12} md={6}>
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                mb: 2,
                              }}
                            >
                              <Psychology
                                sx={{ color: "primary.main", mr: 1 }}
                              />
                              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                Common Symptoms:
                              </Typography>
                            </Box>
                            <List disablePadding>
                              {condition.symptoms.map(
                                (symptom, symptomIndex) => (
                                  <ListItem
                                    key={symptomIndex}
                                    disablePadding
                                    sx={{ mb: 0.5 }}
                                  >
                                    <ListItemIcon sx={{ minWidth: 28 }}>
                                      <CheckCircleOutlined
                                        color="secondary"
                                        sx={{ fontSize: "1rem" }}
                                      />
                                    </ListItemIcon>
                                    <ListItemText
                                      primary={symptom}
                                      primaryTypographyProps={{
                                        variant: "body2",
                                      }}
                                    />
                                  </ListItem>
                                )
                              )}
                            </List>
                          </Grid>

                          <Grid item xs={12} md={6}>
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                mb: 2,
                              }}
                            >
                              <Healing sx={{ color: "primary.main", mr: 1 }} />
                              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                Treatment Options:
                              </Typography>
                            </Box>
                            <List disablePadding>
                              {condition.treatment.map(
                                (treatment, treatmentIndex) => (
                                  <ListItem
                                    key={treatmentIndex}
                                    disablePadding
                                    sx={{ mb: 0.5 }}
                                  >
                                    <ListItemIcon sx={{ minWidth: 28 }}>
                                      <CheckCircleOutlined
                                        color="primary"
                                        sx={{ fontSize: "1rem" }}
                                      />
                                    </ListItemIcon>
                                    <ListItemText
                                      primary={treatment}
                                      primaryTypographyProps={{
                                        variant: "body2",
                                      }}
                                    />
                                  </ListItem>
                                )
                              )}
                            </List>
                          </Grid>
                        </Grid>
                      </Box>
                    </Grid>
                  </Grid>
                </Paper>
              </Fade>
            </Grid>
          ))}
        </Grid>

        {/* FAQ Section */}
        <Typography
          variant="h2"
          align="center"
          gutterBottom
          sx={{ mb: 6, fontWeight: 700 }}
        >
          Frequently Asked Questions
        </Typography>

        <Box sx={{ maxWidth: "800px", mx: "auto" }}>
          {faqs.map((faq, index) => (
            <Fade in timeout={600 + index * 200} key={index}>
              <Accordion
                expanded={expanded === `panel${index}`}
                onChange={handleChange(`panel${index}`)}
                sx={{
                  mb: 2,
                  borderRadius: 2,
                  "&:before": { display: "none" },
                  boxShadow: "0 4px 20px rgba(202, 8, 88, 0.08)",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  sx={{
                    bgcolor: expanded === `panel${index}` ? "#FFF3F6" : "white",
                    borderRadius: 2,
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ pt: 2 }}>
                  <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Fade>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Gynaecology;
