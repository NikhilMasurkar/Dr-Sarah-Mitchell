import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import useHomeStyles from "../../pages/HomeStyles";

const GallerySection = React.memo(
  ({ galleryRef, galleryImages, currentImageIndex, AnimatedSection }) => {
    const { classes } = useHomeStyles();
    return (
      <Box ref={galleryRef} className={classes.gallerySection}>
        <Container maxWidth="lg">
          <AnimatedSection animation="fade">
            <Box sx={{ textAlign: "center", mb: 10 }}>
              <Typography
                variant="h2"
                gutterBottom
                sx={{ fontWeight: 700, mb: 3 }}
              >
                Caring for Women & Families
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
                Every moment matters in your journey to motherhood and wellness
              </Typography>
            </Box>
          </AnimatedSection>

          <Grid container spacing={4}>
            {galleryImages.map((image, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <AnimatedSection animation="fade">
                  <Box
                    className={classes.galleryImageAnimation}
                    sx={{
                      backgroundImage: `url(${
                        galleryImages[
                          (currentImageIndex + index) % galleryImages.length
                        ]
                      })`,
                      transform:
                        index === currentImageIndex
                          ? "scale(1.02)"
                          : "scale(1)",
                      boxShadow:
                        index === currentImageIndex
                          ? "0 20px 40px rgba(202, 8, 88, 0.3)"
                          : "0 10px 20px rgba(202, 8, 88, 0.1)",
                    }}
                  />
                </AnimatedSection>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    );
  }
);

export default GallerySection;
