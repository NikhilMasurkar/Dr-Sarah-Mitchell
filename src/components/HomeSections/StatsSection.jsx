import React from "react";
import { Container, Grid, Card, Box, Typography } from "@mui/material";
import useHomeStyles from "../../pages/HomeStyles";

const StatsSection = React.memo(({ statsData, iconMap, AnimatedSection }) => {
  const { classes } = useHomeStyles();
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
      <Grid container spacing={4}>
        {statsData.map((stat, index) => (
          <Grid item xs={6} md={3} key={index}>
            <AnimatedSection animation="fade" delay={index * 200}>
              <Card
                sx={{
                  textAlign: "center",
                  p: 4,
                  borderRadius: 5,
                  background:
                    "linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 240, 245, 0.8) 100%)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(202, 8, 88, 0.1)",
                  transition: "all 0.4s ease",
                }}
              >
                <Box
                  className="stat-icon"
                  sx={{ color: "primary.main", mb: 2, fontSize: "2.5rem" }}
                >
                  {iconMap[stat.icon]}
                </Box>
                <Typography variant="h2" sx={{ fontWeight: 800, mb: 1 }}>
                  {stat.number}
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  {stat.label}
                </Typography>
              </Card>
            </AnimatedSection>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
});

export default StatsSection;
