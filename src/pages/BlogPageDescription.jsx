import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Button,
  Chip,
  Avatar,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Paper,
} from "@mui/material";
import {
  ArrowBack,
  CalendarToday,
  AccessTime,
  Person,
  Share,
  BookmarkBorder,
  Favorite,
  ArrowForward,
} from "@mui/icons-material";
import { makeStyles } from "tss-react/mui";
import { getBlogPostById, getRelatedPosts } from "../customData/blogsData";
import SEOHead from "../components/SEOHead";
import AnimatedSection from "../components/AnimatedSection";

const useStyles = makeStyles()((theme) => ({
  heroSection: {
    background:
      "linear-gradient(135deg, #FFF8FA 0%, #F8F4FF 50%, #FFF0F5 100%)",
    borderRadius: theme.spacing(4),
    overflow: "hidden",
    marginBottom: theme.spacing(6),
    position: "relative",
    boxShadow: "0 8px 32px rgba(202, 8, 88, 0.1)",
  },
  backButton: {
    marginBottom: theme.spacing(3),
    borderRadius: theme.spacing(3),
    padding: theme.spacing(1.5, 3),
    background: "rgba(255, 255, 255, 0.9)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(202, 8, 88, 0.2)",
    "&:hover": {
      background: "linear-gradient(45deg, #E91E63, #FF6B9D)",
      color: "white",
      transform: "translateY(-2px)",
    },
  },
  categoryChip: {
    fontWeight: 600,
    fontSize: "0.9rem",
    borderRadius: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  heroImage: {
    width: "100%",
    height: "400px",
    objectFit: "cover",
    borderRadius: theme.spacing(3),
    boxShadow: "0 12px 40px rgba(202, 8, 88, 0.15)",
    marginBottom: theme.spacing(4),
  },
  contentSection: {
    background: "rgba(255, 255, 255, 0.8)",
    backdropFilter: "blur(20px)",
    borderRadius: theme.spacing(4),
    padding: theme.spacing(5),
    marginBottom: theme.spacing(4),
    border: "1px solid rgba(255, 255, 255, 0.2)",
    boxShadow: "0 8px 32px rgba(202, 8, 88, 0.08)",
  },
  articleContent: {
    "& h2": {
      color: theme.palette.primary.main,
      fontWeight: 700,
      fontSize: "2rem",
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(2),
    },
    "& h3": {
      color: theme.palette.text.primary,
      fontWeight: 600,
      fontSize: "1.5rem",
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(1.5),
    },
    "& h4": {
      color: theme.palette.text.primary,
      fontWeight: 600,
      fontSize: "1.25rem",
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(1),
    },
    "& h5": {
      color: theme.palette.text.primary,
      fontWeight: 600,
      fontSize: "1.1rem",
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(1),
    },
    "& p": {
      lineHeight: 1.8,
      fontSize: "1.1rem",
      marginBottom: theme.spacing(2),
      color: theme.palette.text.primary,
    },
    "& ul, & ol": {
      marginBottom: theme.spacing(2),
      paddingLeft: theme.spacing(3),
    },
    "& li": {
      lineHeight: 1.7,
      fontSize: "1.05rem",
      marginBottom: theme.spacing(0.5),
      color: theme.palette.text.primary,
    },
    "& strong": {
      fontWeight: 600,
      color: theme.palette.primary.main,
    },
  },
  relatedCard: {
    borderRadius: theme.spacing(3),
    boxShadow: "0 8px 32px rgba(202, 8, 88, 0.1)",
    transition: "all 0.3s ease",
    overflow: "hidden",
    "&:hover": {
      transform: "translateY(-8px)",
      boxShadow: "0 16px 48px rgba(202, 8, 88, 0.2)",
    },
  },
  shareSection: {
    background:
      "linear-gradient(135deg, rgba(233, 30, 99, 0.05) 0%, rgba(255, 107, 157, 0.05) 100%)",
    borderRadius: theme.spacing(3),
    padding: theme.spacing(3),
    marginBottom: theme.spacing(4),
    border: "1px solid rgba(233, 30, 99, 0.1)",
  },
}));

const BlogPageDescription = () => {
  const { classes } = useStyles();
  const { id } = useParams();
  const navigate = useNavigate();

  const post = getBlogPostById(id || "");

  if (!post) {
    return (
      <Container maxWidth="lg" sx={{ py: 8, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Blog post not found
        </Typography>
        <Button
          variant="contained"
          onClick={() => navigate("/blog")}
          startIcon={<ArrowBack />}
        >
          Back to Blog
        </Button>
      </Container>
    );
  }

  const relatedPosts = getRelatedPosts(post.id, post.category);

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
        title={`${post.title} | Dr. Sarah Mitchell Blog`}
        description={post.excerpt}
        keywords={post.tags.join(", ")}
        canonicalUrl={`https://drpriyarajagopal.com.au/blog/${post.id}`}
        ogTitle={post.title}
        ogDescription={post.excerpt}
        ogImage={post.image}
        ogType="article"
      />

      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
        {/* Back Button */}
        <AnimatedSection animation="fade">
          <Button
            variant="outlined"
            startIcon={<ArrowBack />}
            onClick={() => navigate("/blogs")}
            className={classes.backButton}
          >
            Back to Blog
          </Button>
        </AnimatedSection>

        {/* Hero Section */}
        <AnimatedSection animation="slideUp" delay={200}>
          <Box className={classes.heroSection}>
            <Container maxWidth="lg">
              <Box sx={{ p: { xs: 4, md: 6 } }}>
                <Chip
                  label={post.category}
                  className={classes.categoryChip}
                  sx={{
                    bgcolor: getCategoryColor(post.category),
                    color: "white",
                  }}
                />

                <Typography
                  variant="h1"
                  sx={{
                    fontWeight: 800,
                    mb: 3,
                    fontSize: { xs: "2.5rem", md: "3.5rem" },
                    lineHeight: 1.2,
                    color: "text.primary",
                  }}
                >
                  {post.title}
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 3,
                    mb: 4,
                    flexWrap: "wrap",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Avatar sx={{ width: 40, height: 40 }}>
                      <Person />
                    </Avatar>
                    <Box>
                      <Typography variant="body1" sx={{ fontWeight: 600 }}>
                        {post.author}
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <CalendarToday
                      sx={{ fontSize: "1rem", color: "text.secondary" }}
                    />
                    <Typography variant="body2" color="text.secondary">
                      {post.date}
                    </Typography>
                  </Box>

                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <AccessTime
                      sx={{ fontSize: "1rem", color: "text.secondary" }}
                    />
                    <Typography variant="body2" color="text.secondary">
                      {post.readTime}
                    </Typography>
                  </Box>
                </Box>

                <Typography
                  variant="subtitle1"
                  sx={{
                    fontSize: "1.3rem",
                    lineHeight: 1.7,
                    color: "text.secondary",
                    maxWidth: "800px",
                  }}
                >
                  {post.excerpt}
                </Typography>
              </Box>
            </Container>
          </Box>
        </AnimatedSection>

        {/* Hero Image */}
        <AnimatedSection animation="fade" delay={400}>
          <img
            src={post.image}
            alt={post.title}
            className={classes.heroImage}
            loading="lazy"
          />
        </AnimatedSection>

        <Grid container spacing={4}>
          {/* Main Content */}
          <Grid item xs={12} lg={8}>
            {/* Share Section */}
            <AnimatedSection animation="slideUp" delay={600}>
              <Box className={classes.shareSection}>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontWeight: 600, mb: 2 }}
                >
                  Share this article
                </Typography>
                <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                  <Button
                    variant="outlined"
                    startIcon={<Share />}
                    size="small"
                    sx={{ borderRadius: 3 }}
                  >
                    Share
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<BookmarkBorder />}
                    size="small"
                    sx={{ borderRadius: 3 }}
                  >
                    Bookmark
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<Favorite />}
                    size="small"
                    sx={{ borderRadius: 3 }}
                  >
                    Like
                  </Button>
                </Box>
              </Box>
            </AnimatedSection>

            {/* Article Content */}
            <AnimatedSection animation="slideUp" delay={800}>
              <Paper className={classes.contentSection}>
                <Box
                  className={classes.articleContent}
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </Paper>
            </AnimatedSection>

            {/* Tags */}
            <AnimatedSection animation="slideUp" delay={1000}>
              <Paper sx={{ p: 3, borderRadius: 3, mb: 4 }}>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontWeight: 600, mb: 2 }}
                >
                  Tags
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {post.tags.map((tag, index) => (
                    <Chip
                      key={index}
                      label={tag}
                      variant="outlined"
                      size="small"
                      sx={{
                        borderColor: "primary.main",
                        color: "primary.main",
                        "&:hover": {
                          bgcolor: "primary.main",
                          color: "white",
                        },
                      }}
                    />
                  ))}
                </Box>
              </Paper>
            </AnimatedSection>
          </Grid>

          {/* Sidebar */}
          <Grid item xs={12} lg={4}>
            {/* Author Info */}
            <AnimatedSection animation="slideUp" delay={1200}>
              <Paper sx={{ p: 4, borderRadius: 3, mb: 4, textAlign: "center" }}>
                <Avatar sx={{ width: 80, height: 80, mx: "auto", mb: 2 }}>
                  <img
                    src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=200"
                    alt="Dr. Sarah Mitchell"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Avatar>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
                  Dr. Sarah Mitchell
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 3, lineHeight: 1.6 }}
                >
                  FRANZCOG Specialist in Obstetrics and Gynaecology with over 15
                  years of experience providing comprehensive women's health
                  care.
                </Typography>
                <Button
                  variant="contained"
                  onClick={() => navigate("/profile")}
                  sx={{ borderRadius: 3 }}
                >
                  View Profile
                </Button>
              </Paper>
            </AnimatedSection>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <AnimatedSection animation="slideUp" delay={1400}>
                <Paper sx={{ p: 4, borderRadius: 3 }}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontWeight: 700, mb: 3 }}
                  >
                    Related Articles
                  </Typography>
                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 3 }}
                  >
                    {relatedPosts.map((relatedPost, index) => (
                      <Card
                        key={relatedPost.id}
                        className={classes.relatedCard}
                        sx={{ cursor: "pointer" }}
                        onClick={() => navigate(`/blog/${relatedPost.id}`)}
                      >
                        <CardMedia
                          component="img"
                          height="120"
                          image={relatedPost.image}
                          alt={relatedPost.title}
                        />
                        <CardContent sx={{ p: 2 }}>
                          <Chip
                            label={relatedPost.category}
                            size="small"
                            sx={{
                              bgcolor: getCategoryColor(relatedPost.category),
                              color: "white",
                              fontSize: "0.75rem",
                              mb: 1,
                            }}
                          />
                          <Typography
                            variant="subtitle2"
                            sx={{
                              fontWeight: 600,
                              lineHeight: 1.4,
                              mb: 1,
                              display: "-webkit-box",
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: "vertical",
                              overflow: "hidden",
                            }}
                          >
                            {relatedPost.title}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            {relatedPost.readTime}
                          </Typography>
                        </CardContent>
                      </Card>
                    ))}
                  </Box>
                </Paper>
              </AnimatedSection>
            )}
          </Grid>
        </Grid>

        {/* Navigation */}
        <AnimatedSection animation="fade" delay={1600}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mt: 6,
              p: 4,
              background:
                "linear-gradient(135deg, rgba(233, 30, 99, 0.05) 0%, rgba(255, 107, 157, 0.05) 100%)",
              borderRadius: 3,
              border: "1px solid rgba(233, 30, 99, 0.1)",
            }}
          >
            <Button
              variant="outlined"
              startIcon={<ArrowBack />}
              onClick={() => navigate("/blogs")}
              sx={{ borderRadius: 3 }}
            >
              All Articles
            </Button>
            <Button
              variant="contained"
              endIcon={<ArrowForward />}
              onClick={() => navigate("/contact")}
              sx={{ borderRadius: 3 }}
            >
              Book Consultation
            </Button>
          </Box>
        </AnimatedSection>
      </Container>
    </Box>
  );
};

export default BlogPageDescription;
