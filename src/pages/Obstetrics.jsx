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
  PregnantWomanOutlined,
  ChildCareOutlined,
  FavoriteOutlined,
  CheckCircleOutlined,
  Healing,
  MonitorHeart,
} from "@mui/icons-material";

const Obstetrics = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const services = [
    {
      title: "Antenatal Care",
      icon: <PregnantWomanOutlined sx={{ fontSize: 40 }} />,
      description:
        "Comprehensive prenatal care to monitor your health and your baby's development throughout pregnancy.",
      features: [
        "Regular check-ups and monitoring",
        "Ultrasound examinations",
        "Blood tests and screening",
        "Nutrition and lifestyle counseling",
        "Birth plan development",
      ],
      image:
        "https://images.pexels.com/photos/1556652/pexels-photo-1556652.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Delivery & Birth",
      icon: <ChildCareOutlined sx={{ fontSize: 40 }} />,
      description:
        "Expert support during labor and delivery with various birth options available.",
      features: [
        "Natural birth support",
        "Cesarean section when necessary",
        "Pain management options",
        "Emergency obstetric care",
        "Partner support guidance",
      ],
      image:
        "https://images.pexels.com/photos/1556691/pexels-photo-1556691.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Postnatal Care",
      icon: <FavoriteOutlined sx={{ fontSize: 40 }} />,
      description:
        "Ongoing support for mother and baby after birth to ensure healthy recovery.",
      features: [
        "Postpartum health monitoring",
        "Breastfeeding support",
        "Newborn care guidance",
        "Emotional support and counseling",
        "Family planning advice",
      ],
      image:
        "https://images.pexels.com/photos/1556707/pexels-photo-1556707.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  const faqs = [
    {
      question: "When should I start antenatal care?",
      answer:
        "It's recommended to start antenatal care as soon as you know you're pregnant, ideally before 10 weeks. Early care helps identify and manage any potential complications.",
    },
    {
      question: "How often will I have appointments during pregnancy?",
      answer:
        "Typically, appointments are monthly until 28 weeks, then every 2 weeks until 36 weeks, and weekly thereafter. High-risk pregnancies may require more frequent visits.",
    },
    {
      question: "What tests are performed during pregnancy?",
      answer:
        "Common tests include blood tests for anemia and infections, urine tests, ultrasounds, glucose screening, and genetic screening tests based on your risk factors.",
    },
    {
      question: "What are the signs of labor?",
      answer:
        "Signs include regular contractions, water breaking, bloody show, and persistent lower back pain. Contact your healthcare provider when contractions are 5 minutes apart for an hour.",
    },
    {
      question: "When can I go home after delivery?",
      answer:
        "For vaginal delivery, typically 24-48 hours. For cesarean section, usually 3-4 days. This depends on your recovery and your baby's health.",
    },
  ];

  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      <Helmet>
        <title>
          Obstetrics Services Melbourne | Pregnancy Care | Dr. Sarah Mitchell
        </title>
        <meta
          name="description"
          content="Comprehensive obstetrics services in Melbourne. Expert pregnancy care, antenatal care, delivery support and postnatal services. Serving Werribee, Pointcook, Tarneit and Wyndham areas."
        />
        <meta
          name="keywords"
          content="obstetrics melbourne, pregnancy care, antenatal care, delivery, postnatal care, high risk pregnancy, werribee obstetrician"
        />
        <meta
          property="og:title"
          content="Obstetrics Services Melbourne | Pregnancy Care"
        />
        <meta
          property="og:description"
          content="Expert pregnancy care from conception to delivery. Comprehensive obstetrics services including antenatal care, delivery support and postnatal care."
        />
        <meta property="og:type" content="website" />
        <link
          rel="canonical"
          href="https://drpriyarajagopal.com.au/obstetrics"
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
        {[...Array(5)].map((_, i) => (
          <Box
            key={i}
            sx={{
              position: "absolute",
              width: { xs: "30px", md: "60px" },
              height: { xs: "30px", md: "60px" },
              borderRadius: "50%",
              background: `linear-gradient(45deg, rgba(202, 8, 88, 0.05), rgba(255, 200, 219, 0.1))`,
              animation: `float${i % 3} ${12 + i * 2}s ease-in-out infinite`,
              top: `${10 + Math.random() * 80}%`,
              left: `${5 + Math.random() * 90}%`,
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
              Obstetrics Services
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              gutterBottom
              sx={{ mb: 3 }}
            >
              Comprehensive pregnancy care from conception to delivery
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
              Our obstetrics services provide complete care throughout your
              pregnancy journey, ensuring the health and wellbeing of both
              mother and baby with personalized, evidence-based medical care.
            </Typography>
          </Box>
        </Fade>

        {/* Hero Image */}
        <Zoom in timeout={1000}>
          <Box sx={{ mb: 8, position: "relative" }}>
            <img
              src="https://images.pexels.com/photos/1134204/pexels-photo-1134204.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Obstetrics Care"
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

        {/* Additional Information */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          <Grid item xs={12} md={6}>
            <Slide direction="right" in timeout={1000}>
              <Paper
                sx={{
                  p: 5,
                  height: "100%",
                  borderRadius: 5,
                  boxShadow: "0 8px 32px rgba(202, 8, 88, 0.1)",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                  <MonitorHeart
                    sx={{ color: "primary.main", fontSize: "2rem", mr: 2 }}
                  />
                  <Typography variant="h3" sx={{ fontWeight: 700 }}>
                    High-Risk Pregnancy Care
                  </Typography>
                </Box>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{ lineHeight: 1.7, mb: 3 }}
                >
                  We provide specialized care for high-risk pregnancies,
                  including:
                </Typography>
                <List>
                  {[
                    "Gestational diabetes management",
                    "Preeclampsia monitoring",
                    "Multiple pregnancies (twins, triplets)",
                    "Previous pregnancy complications",
                    "Advanced maternal age support",
                    "Chronic medical conditions",
                  ].map((item, index) => (
                    <ListItem key={index} disablePadding>
                      <ListItemIcon>
                        <CheckCircleOutlined color="primary" />
                      </ListItemIcon>
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Slide>
          </Grid>

          <Grid item xs={12} md={6}>
            <Slide direction="left" in timeout={1200}>
              <Paper
                sx={{
                  p: 5,
                  height: "100%",
                  borderRadius: 5,
                  boxShadow: "0 8px 32px rgba(202, 8, 88, 0.1)",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                  <ChildCareOutlined
                    sx={{ color: "primary.main", fontSize: "2rem", mr: 2 }}
                  />
                  <Typography variant="h3" sx={{ fontWeight: 700 }}>
                    Birth Options
                  </Typography>
                </Box>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{ lineHeight: 1.7, mb: 3 }}
                >
                  We support various birth preferences and options:
                </Typography>
                <List>
                  {[
                    "Natural birth support",
                    "Water birth options",
                    "Epidural and pain relief",
                    "Cesarean section when necessary",
                    "VBAC (Vaginal Birth After Cesarean)",
                    "Partner and family support",
                  ].map((item, index) => (
                    <ListItem key={index} disablePadding>
                      <ListItemIcon>
                        <CheckCircleOutlined color="primary" />
                      </ListItemIcon>
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Slide>
          </Grid>
        </Grid>

        {/* Pregnancy Journey Timeline */}
        <Fade in timeout={1400}>
          <Paper sx={{ p: 5, mb: 8, borderRadius: 5, bgcolor: "#FFF3F6" }}>
            <Typography
              variant="h2"
              align="center"
              gutterBottom
              sx={{ mb: 4, fontWeight: 700 }}
            >
              Your Pregnancy Journey
            </Typography>
            <Grid container spacing={4}>
              {[
                {
                  title: "First Trimester",
                  weeks: "0-12 weeks",
                  icon: <Healing />,
                  points: [
                    "Initial consultation",
                    "Blood tests & screening",
                    "First ultrasound",
                    "Nutrition counseling",
                  ],
                },
                {
                  title: "Second Trimester",
                  weeks: "13-26 weeks",
                  icon: <MonitorHeart />,
                  points: [
                    "Anatomy scan",
                    "Regular check-ups",
                    "Glucose screening",
                    "Birth plan discussion",
                  ],
                },
                {
                  title: "Third Trimester",
                  weeks: "27-40 weeks",
                  icon: <ChildCareOutlined />,
                  points: [
                    "Weekly monitoring",
                    "Birth preparation",
                    "Hospital planning",
                    "Delivery support",
                  ],
                },
              ].map((trimester, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Box sx={{ textAlign: "center" }}>
                    <Box
                      sx={{
                        bgcolor: "primary.main",
                        color: "white",
                        borderRadius: "50%",
                        width: 80,
                        height: 80,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mx: "auto",
                        mb: 2,
                        fontSize: "2rem",
                      }}
                    >
                      {trimester.icon}
                    </Box>
                    <Typography
                      variant="h4"
                      gutterBottom
                      sx={{ fontWeight: 600 }}
                    >
                      {trimester.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 2 }}
                    >
                      {trimester.weeks}
                    </Typography>
                    <List>
                      {trimester.points.map((point, pointIndex) => (
                        <ListItem
                          key={pointIndex}
                          sx={{ justifyContent: "center", py: 0.5 }}
                        >
                          <ListItemText
                            primary={point}
                            primaryTypographyProps={{
                              variant: "body2",
                              align: "center",
                              fontSize: "0.9rem",
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Fade>

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

export default Obstetrics;
