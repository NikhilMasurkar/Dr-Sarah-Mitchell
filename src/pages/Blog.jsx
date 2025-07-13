import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Avatar,
  Button,
  Divider,
} from "@mui/material";
import {
  CalendarToday,
  Person,
  ArrowForward,
  Favorite,
  Share,
  BookmarkBorder,
} from "@mui/icons-material";
import { makeStyles } from "tss-react/mui";
import SEOHead from "../components/SEOHead";
import AnimatedSection from "../components/AnimatedSection";
import {
  getBlogPostsByCategory,
  getFeaturedPost,
} from "../customData/blogsData";

const useStyles = makeStyles()((theme) => ({
  heroSection: {
    background:
      "linear-gradient(135deg, #E91E63 0%, #FF6B9D 50%, #FFB6C1 100%)",
    color: "white",
    borderRadius: theme.spacing(4),
    overflow: "hidden",
    marginBottom: theme.spacing(6),
    position: "relative",
    boxShadow: "0 20px 60px rgba(233, 30, 99, 0.3)",
  },
  heroTitle: {
    fontSize: "3.2rem",
    marginBottom: theme.spacing(2),
    fontWeight: 800,
    [theme.breakpoints.down("md")]: {
      fontSize: "2.2rem",
    },
  },
  blogCard: {
    borderRadius: theme.spacing(3),
    boxShadow: "0 8px 32px rgba(202, 8, 88, 0.1)",
    transition: "all 0.3s ease",
    overflow: "hidden",
    "&:hover": {
      transform: "translateY(-8px)",
      boxShadow: "0 16px 48px rgba(202, 8, 88, 0.2)",
    },
  },
  featuredCard: {
    borderRadius: theme.spacing(4),
    boxShadow: "0 12px 40px rgba(202, 8, 88, 0.15)",
    overflow: "hidden",
    marginBottom: theme.spacing(6),
  },
  categoryChip: {
    fontWeight: 600,
    fontSize: "0.85rem",
    borderRadius: theme.spacing(2),
  },
  readMoreButton: {
    borderRadius: theme.spacing(3),
    textTransform: "none",
    fontWeight: 600,
    padding: theme.spacing(1.5, 3),
  },
}));

const Blog = () => {
  const { classes } = useStyles();
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [featuredPost, setFeaturedPost] = useState(getFeaturedPost());
  const [displayedPosts, setDisplayedPosts] = useState(
    getBlogPostsByCategory("All")
  );

  // Refresh blog data on focus or navigation
  useEffect(() => {
    setFeaturedPost(getFeaturedPost());
    setDisplayedPosts(getBlogPostsByCategory(selectedCategory));
  }, [selectedCategory, location.pathname]);

  useEffect(() => {
    const handleFocus = () => {
      setFeaturedPost(getFeaturedPost());
      setDisplayedPosts(getBlogPostsByCategory(selectedCategory));
    };
    window.addEventListener("focus", handleFocus);
    return () => window.removeEventListener("focus", handleFocus);
  }, [selectedCategory]);

  const categories = [
    "All",
    "Pregnancy",
    "Women's Health",
    "Menopause",
    "Family Planning",
    "Fertility",
    "Preventive Care",
  ];

  const getCategoryColor = (category) => {
    const colors = {
      Pregnancy: "#FF6B9D",
      "Women's Health": "#E91E63",
      Menopause: "#9C27B0",
      "Family Planning": "#673AB7",
      Fertility: "#3F51B5",
      "Preventive Care": "#2196F3",
      Postpartum: "#FF5722",
    };
    return colors[category] || "#E91E63";
  };

  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      <SEOHead
        title="Women's Health Blog - Dr. Sarah Mitchell"
        description="Expert insights on women's health, pregnancy care, fertility, and gynecological wellness from Dr. Sarah Mitchell, FRANZCOG specialist in Melbourne."
        keywords="women's health blog, pregnancy tips, fertility advice, gynecology, PCOS, menopause, contraception, melbourne"
        canonicalUrl="https://drpriyarajagopal.com.au/blog"
        ogTitle="Women's Health Blog - Expert Medical Insights"
        ogDescription="Stay informed with expert medical advice on women's health topics from Dr. Sarah Mitchell."
        ogType="website"
      />

      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
        {/* Hero Section */}
        <AnimatedSection animation="fade" duration={1000}>
          <Box className={classes.heroSection}>
            <Container maxWidth="lg">
              <Box
                sx={{
                  py: { xs: 6, md: 8 },
                  textAlign: "center",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                <AnimatedSection animation="slideUp" delay={200}>
                  <Typography variant="h1" className={classes.heroTitle}>
                    Women's Health Blog
                  </Typography>
                </AnimatedSection>
                <AnimatedSection animation="slideUp" delay={400}>
                  <Typography
                    variant="h5"
                    sx={{
                      mb: 4,
                      opacity: 0.95,
                      fontWeight: 400,
                      fontSize: "1.5rem",
                    }}
                  >
                    Expert insights and advice for your health journey
                  </Typography>
                </AnimatedSection>
                <AnimatedSection animation="slideUp" delay={600}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "1.15rem",
                      lineHeight: 1.8,
                      opacity: 0.9,
                      maxWidth: "600px",
                      mx: "auto",
                    }}
                  >
                    Stay informed with the latest medical insights, health tips,
                    and expert advice from Dr. Sarah Mitchell on women's health,
                    pregnancy, and wellness.
                  </Typography>
                </AnimatedSection>
              </Box>
            </Container>
          </Box>
        </AnimatedSection>

        {/* Category Filter */}
        <AnimatedSection animation="slideUp" delay={200}>
          <Box sx={{ mb: 6, textAlign: "center" }}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 2,
                justifyContent: "center",
              }}
            >
              {categories.map((category, index) => (
                <Chip
                  key={category}
                  label={category}
                  variant={
                    selectedCategory === category ? "filled" : "outlined"
                  }
                  color={selectedCategory === category ? "primary" : "default"}
                  className={classes.categoryChip}
                  sx={{
                    cursor: "pointer",
                    "&:hover": {
                      bgcolor:
                        selectedCategory === category
                          ? "primary.dark"
                          : "primary.light",
                      color: "white",
                    },
                  }}
                  onClick={() => setSelectedCategory(category)}
                />
              ))}
            </Box>
          </Box>
        </AnimatedSection>

        {/* Featured Post */}
        {featuredPost && (
          <AnimatedSection animation="slideUp" delay={400}>
            <Card
              className={classes.featuredCard}
              sx={{ cursor: "pointer" }}
              onClick={() => navigate(`/blog/${featuredPost.id}`)}
            >
              <Grid container>
                <Grid item xs={12} md={6}>
                  <CardMedia
                    component="img"
                    height="400"
                    image={featuredPost.image}
                    alt={featuredPost.title}
                    sx={{ objectFit: "cover" }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <CardContent
                    sx={{
                      p: { xs: 3, md: 5 },
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <Chip
                      label="Featured"
                      size="small"
                      sx={{
                        bgcolor: "#FFD700",
                        color: "#000",
                        fontWeight: 700,
                        mb: 2,
                        alignSelf: "flex-start",
                      }}
                    />
                    <Chip
                      label={featuredPost.category}
                      size="small"
                      sx={{
                        bgcolor: getCategoryColor(featuredPost.category),
                        color: "white",
                        fontWeight: 600,
                        mb: 2,
                        alignSelf: "flex-start",
                      }}
                    />
                    <Typography
                      variant="h4"
                      sx={{ fontWeight: 700, mb: 2, color: "text.primary" }}
                    >
                      {featuredPost.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ mb: 3, lineHeight: 1.7, color: "text.secondary" }}
                    >
                      {featuredPost.excerpt}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        mb: 3,
                      }}
                    >
                      <Avatar sx={{ width: 32, height: 32 }}>
                        <Person />
                      </Avatar>
                      <Box>
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>
                          {featuredPost.author}
                        </Typography>
                        <Box
                          sx={{ display: "flex", alignItems: "center", gap: 1 }}
                        >
                          <CalendarToday
                            sx={{ fontSize: "0.8rem", color: "text.secondary" }}
                          />
                          <Typography variant="caption" color="text.secondary">
                            {featuredPost.date} • {featuredPost.readTime}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                    <Button
                      variant="contained"
                      endIcon={<ArrowForward />}
                      className={classes.readMoreButton}
                      sx={{
                        background: "linear-gradient(45deg, #E91E63, #FF6B9D)",
                        alignSelf: "flex-start",
                      }}
                    >
                      Read Full Article
                    </Button>
                  </CardContent>
                </Grid>
              </Grid>
            </Card>
          </AnimatedSection>
        )}

        {/* Blog Posts Grid */}
        <AnimatedSection animation="slideUp" delay={600}>
          <Typography
            variant="h3"
            sx={{
              mb: 4,
              fontWeight: 700,
              color: "primary.main",
              textAlign: "center",
            }}
          >
            Latest Articles
          </Typography>
        </AnimatedSection>

        <Grid container spacing={4}>
          {displayedPosts.filter((post) => !post.featured).length === 0 ? (
            <Grid item xs={12}>
              <Box sx={{ textAlign: "center", py: 8, color: "text.secondary" }}>
                <Typography variant="h5" gutterBottom>
                  No articles found for this category.
                </Typography>
                <Typography variant="body1">
                  Please try a different category or check back later.
                </Typography>
              </Box>
            </Grid>
          ) : (
            displayedPosts
              .filter((post) => !post.featured)
              .map((post, index) => (
                <Grid item xs={12} sm={6} lg={4} key={post.id}>
                  <AnimatedSection
                    animation="slideUp"
                    delay={800 + index * 100}
                  >
                    <Card
                      className={classes.blogCard}
                      sx={{ cursor: "pointer" }}
                      onClick={() => navigate(`/blog/${post.id}`)}
                    >
                      <CardMedia
                        component="img"
                        height="240"
                        image={post.image}
                        alt={post.title}
                        sx={{ objectFit: "cover" }}
                      />
                      <CardContent sx={{ p: 3 }}>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            mb: 2,
                          }}
                        >
                          <Chip
                            label={post.category}
                            size="small"
                            className={classes.categoryChip}
                            sx={{
                              bgcolor: getCategoryColor(post.category),
                              color: "white",
                            }}
                          />
                          <Box sx={{ display: "flex", gap: 1 }}>
                            <BookmarkBorder
                              sx={{
                                fontSize: "1.2rem",
                                color: "text.secondary",
                                cursor: "pointer",
                              }}
                            />
                            <Share
                              sx={{
                                fontSize: "1.2rem",
                                color: "text.secondary",
                                cursor: "pointer",
                              }}
                            />
                            <Favorite
                              sx={{
                                fontSize: "1.2rem",
                                color: "text.secondary",
                                cursor: "pointer",
                              }}
                            />
                          </Box>
                        </Box>
                        <Typography
                          variant="h6"
                          sx={{ fontWeight: 700, mb: 2, lineHeight: 1.4 }}
                        >
                          {post.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ mb: 3, lineHeight: 1.6 }}
                        >
                          {post.excerpt}
                        </Typography>
                        <Divider sx={{ mb: 2 }} />
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            mb: 2,
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 1,
                            }}
                          >
                            <Avatar sx={{ width: 24, height: 24 }}>
                              <Person sx={{ fontSize: "1rem" }} />
                            </Avatar>
                            <Typography
                              variant="caption"
                              sx={{ fontWeight: 600 }}
                            >
                              {post.author}
                            </Typography>
                          </Box>
                          <Typography variant="caption" color="text.secondary">
                            {post.readTime}
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            mb: 3,
                          }}
                        >
                          <CalendarToday
                            sx={{ fontSize: "0.8rem", color: "text.secondary" }}
                          />
                          <Typography variant="caption" color="text.secondary">
                            {post.date}
                          </Typography>
                        </Box>
                        <Button
                          variant="outlined"
                          endIcon={<ArrowForward />}
                          className={classes.readMoreButton}
                          fullWidth
                          sx={{
                            borderColor: "primary.main",
                            color: "primary.main",
                            "&:hover": {
                              bgcolor: "primary.main",
                              color: "white",
                            },
                          }}
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate(`/blog/${post.id}`);
                          }}
                        >
                          Read More
                        </Button>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                </Grid>
              ))
          )}
        </Grid>

        {/* Load More Section */}
        <AnimatedSection animation="fade" delay={1200}>
          <Box sx={{ textAlign: "center", mt: 6 }}>
            <Button
              variant="contained"
              size="large"
              className={classes.readMoreButton}
              sx={{
                background: "linear-gradient(45deg, #E91E63, #FF6B9D)",
                px: 4,
                py: 2,
                fontSize: "1.1rem",
              }}
            >
              Load More Articles
            </Button>
          </Box>
        </AnimatedSection>
      </Container>
    </Box>
  );
};

export default Blog;
