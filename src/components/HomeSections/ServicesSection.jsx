import React from "react";
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
} from "@mui/material";
import useHomeStyles from "../../pages/HomeStyles";

const ServicesSection = React.memo(
  ({ servicesData, iconMap, navigate, AnimatedSection }) => {
    const { classes } = useHomeStyles();
    return (
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <AnimatedSection animation="fade">
          <Box sx={{ textAlign: "center", mb: 10 }}>
            <Typography
              variant="h2"
              gutterBottom
              sx={{ fontWeight: 700, mb: 3 }}
            >
              Comprehensive Women's Health Services
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              sx={{
                fontSize: "1.3rem",
                maxWidth: "800px",
                mx: "auto",
                lineHeight: 1.7,
              }}
            >
              Expert care tailored to every stage of your life, from adolescence
              through menopause and beyond
            </Typography>
          </Box>
        </AnimatedSection>
        <Grid container spacing={5}>
          {servicesData.map((service, index) => (
            <Grid item xs={12} lg={4} key={index}>
              <AnimatedSection animation="slideUp" delay={index * 300}>
                <Card
                  sx={{
                    height: "100%",
                    cursor: "pointer",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    borderRadius: 5,
                    overflow: "hidden",
                    position: "relative",
                    background: "rgba(255, 255, 255, 0.8)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    "&:before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "5px",
                      background: `linear-gradient(90deg, ${service.color}, #E91E63)`,
                    },
                  }}
                  onClick={() => navigate(service.path)}
                >
                  <Box
                    sx={{
                      height: 250,
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
                        background: `linear-gradient(45deg, ${service.color}15, transparent)`,
                      },
                    }}
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        top: 20,
                        right: 20,
                        bgcolor: "rgba(255, 255, 255, 0.95)",
                        borderRadius: "50%",
                        p: 2.5,
                        color: service.color,
                        boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
                        backdropFilter: "blur(10px)",
                      }}
                    >
                      {iconMap[service.icon]}
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
                      variant="body1"
                      color="text.secondary"
                      sx={{
                        lineHeight: 1.7,
                        fontSize: "1.05rem",
                        mb: 3,
                      }}
                    >
                      {service.description}
                    </Typography>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                      {service.features.map((feature, featureIndex) => (
                        <Chip
                          key={featureIndex}
                          label={feature}
                          size="small"
                          sx={{
                            background: `linear-gradient(135deg, ${service.color}15, ${service.color}10)`,
                            color: service.color,
                            border: `1px solid ${service.color}30`,
                            fontWeight: 500,
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  }
);

export default ServicesSection;
