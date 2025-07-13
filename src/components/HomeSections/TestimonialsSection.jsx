import React from "react";
import { Container, Box, Typography, Grid, Paper, Avatar } from "@mui/material";
import { StarOutlined } from "@mui/icons-material";
import useHomeStyles from "../../pages/HomeStyles";

const TestimonialsSection = React.memo(({ testimonials, AnimatedSection }) => {
  const { classes } = useHomeStyles();
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
      <AnimatedSection animation="fade">
        <Box sx={{ textAlign: "center", mb: 10 }}>
          <Typography variant="h2" gutterBottom sx={{ fontWeight: 700, mb: 3 }}>
            What Our Patients Say
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            sx={{
              fontSize: "1.3rem",
              maxWidth: "700px",
              mx: "auto",
              lineHeight: 1.7,
            }}
          >
            Real experiences from women who trust Dr. Priya with their health
          </Typography>
        </Box>
      </AnimatedSection>
      <Grid container spacing={5}>
        {testimonials.map((testimonial, index) => (
          <Grid item xs={12} md={4} key={index}>
            <AnimatedSection animation="slideUp" delay={index * 300}>
              <Paper
                sx={{
                  p: 5,
                  height: "100%",
                  borderRadius: 5,
                  position: "relative",
                  transition: "all 0.3s ease",
                  background: "rgba(255, 255, 255, 0.8)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                }}
              >
                <Box sx={{ display: "flex", mb: 3, justifyContent: "center" }}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarOutlined
                      key={i}
                      sx={{ color: "#FFD700", fontSize: "1.8rem" }}
                    />
                  ))}
                </Box>
                <Typography
                  variant="body1"
                  sx={{
                    mb: 4,
                    fontStyle: "italic",
                    lineHeight: 1.8,
                    fontSize: "1.1rem",
                    textAlign: "center",
                    color: "text.primary",
                  }}
                >
                  "{testimonial.text}"
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 3,
                  }}
                >
                  <Avatar
                    src={testimonial.image}
                    sx={{ width: 56, height: 56 }}
                  />
                  <Box sx={{ textAlign: "center" }}>
                    <Typography variant="h6" fontWeight="bold">
                      {testimonial.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {testimonial.location}
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </AnimatedSection>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
});

export default TestimonialsSection;
