import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  TextField,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Alert,
  CircularProgress,
  Card,
  CardContent,
} from "@mui/material";
import {
  Phone,
  Email,
  LocationOn,
  AccessTime,
  Send,
  Fax,
} from "@mui/icons-material";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoading(false);
    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      <Helmet>
        <title>
          Contact Dr. Sarah Mitchell | Book Appointment | Melbourne Obstetrician
        </title>
        <meta
          name="description"
          content="Contact Dr. Sarah Mitchell to book your appointment. Located in Werribee, Melbourne. Phone, email and online contact form available. Serving Werribee, Pointcook, Tarneit and Wyndham."
        />
        <meta
          name="keywords"
          content="contact dr sarah mitchell, book appointment, werribee obstetrician, melbourne gynaecologist contact, women's health appointment"
        />
        <meta
          property="og:title"
          content="Contact Dr. Sarah Mitchell | Book Appointment"
        />
        <meta
          property="og:description"
          content="Get in touch to schedule your appointment with Dr. Sarah Mitchell. Expert women's health care in Werribee, Melbourne."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://drpriyarajagopal.com.au/contact" />
      </Helmet>

      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography variant="h1" gutterBottom sx={{ fontWeight: 700, mb: 2 }}>
            Contact Us
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            gutterBottom
            sx={{ mb: 3 }}
          >
            Get in touch to schedule your appointment
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: "700px",
              mx: "auto",
              fontSize: "1.1rem",
              lineHeight: 1.7,
            }}
          >
            We're here to help and answer any questions you may have. Contact us
            today to schedule your consultation or to learn more about our
            services.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {/* Contact Information */}
          <Grid item xs={12} lg={5}>
            <Card sx={{ height: "100%", borderRadius: 5 }}>
              <CardContent sx={{ p: 4 }}>
                <Typography
                  variant="h3"
                  gutterBottom
                  sx={{ color: "primary.main", fontWeight: 600, mb: 4 }}
                >
                  Get in Touch
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{ mb: 4, lineHeight: 1.7 }}
                >
                  We look forward to hearing from you and helping you with your
                  healthcare needs.
                </Typography>

                <List disablePadding>
                  <ListItem
                    component="a"
                    href="tel:0416151600"
                    sx={{
                      px: 0,
                      py: 2,
                      textDecoration: "none",
                      color: "inherit",
                      borderRadius: 2,
                      transition: "all 0.3s ease",
                    }}
                  >
                    <ListItemIcon>
                      <Phone
                        sx={{ color: "primary.main", fontSize: "1.8rem" }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary="Mobile Phone"
                      secondary={
                        <Box component="span" sx={{ display: "block" }}>
                          <Typography
                            variant="h6"
                            component="span"
                            sx={{ color: "primary.main", fontWeight: 600 }}
                          >
                            0416 151 600
                          </Typography>
                          <br />
                          <Typography variant="body2" color="text.secondary">
                            Click to call directly
                          </Typography>
                        </Box>
                      }
                    />
                  </ListItem>

                  <ListItem sx={{ px: 0, py: 2 }}>
                    <ListItemIcon>
                      <Fax sx={{ color: "primary.main", fontSize: "1.8rem" }} />
                    </ListItemIcon>
                    <ListItemText
                      primary="Fax"
                      secondary={
                        <Typography
                          variant="h6"
                          sx={{ color: "text.primary", fontWeight: 500 }}
                        >
                          03 9492 5956
                        </Typography>
                      }
                    />
                  </ListItem>

                  <ListItem sx={{ px: 0, py: 2 }}>
                    <ListItemIcon>
                      <Email
                        sx={{ color: "primary.main", fontSize: "1.8rem" }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary="Email"
                      secondary={
                        <Box component="span" sx={{ display: "block" }}>
                          <Typography
                            variant="body1"
                            component="span"
                            sx={{ fontWeight: 500 }}
                          >
                            info@drpriyarajagopal.com.au
                          </Typography>
                          <br />
                          <Typography variant="body2" color="text.secondary">
                            We'll respond within 24 hours
                          </Typography>
                        </Box>
                      }
                    />
                  </ListItem>

                  <ListItem sx={{ px: 0, py: 2 }}>
                    <ListItemIcon>
                      <LocationOn
                        sx={{ color: "primary.main", fontSize: "1.8rem" }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary="Location"
                      secondary={
                        <Box component="span" sx={{ display: "block" }}>
                          <Typography
                            variant="body1"
                            component="span"
                            sx={{ fontWeight: 500 }}
                          >
                            Private Practice, Werribee
                          </Typography>
                          <br />
                          <Typography variant="body1" component="span">
                            Melbourne, Victoria
                          </Typography>
                          <br />
                          <Typography variant="body2" color="text.secondary">
                            Serving Werribee, Pointcook, Tarneit & Wyndham
                          </Typography>
                        </Box>
                      }
                    />
                  </ListItem>

                  <ListItem sx={{ px: 0, py: 2 }}>
                    <ListItemIcon>
                      <AccessTime
                        sx={{ color: "primary.main", fontSize: "1.8rem" }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary="Consultation Hours"
                      secondary={
                        <Box component="span" sx={{ display: "block" }}>
                          <Typography
                            variant="body1"
                            component="span"
                            sx={{ fontWeight: 500 }}
                          >
                            By Appointment Only
                          </Typography>
                          <br />
                          <Typography variant="body2" color="text.secondary">
                            Emergency consultations available
                          </Typography>
                        </Box>
                      }
                    />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} lg={7}>
            <Card sx={{ height: "100%", borderRadius: 5 }}>
              <CardContent sx={{ p: 4 }}>
                <Typography
                  variant="h3"
                  gutterBottom
                  sx={{ color: "primary.main", fontWeight: 600, mb: 4 }}
                >
                  Send Us a Message
                </Typography>

                {submitted && (
                  <Alert
                    severity="success"
                    sx={{
                      mb: 3,
                      borderRadius: 2,
                      "& .MuiAlert-message": {
                        fontSize: "1rem",
                      },
                    }}
                  >
                    Thank you for your message! We'll get back to you within 24
                    hours.
                  </Alert>
                )}

                <Box component="form" onSubmit={handleSubmit} noValidate>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Full Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        error={!!errors.name}
                        helperText={errors.name}
                        required
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 2,
                          },
                        }}
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 2,
                          },
                        }}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Email Address"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        error={!!errors.email}
                        helperText={errors.email}
                        required
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 2,
                          },
                        }}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 2,
                          },
                        }}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Message"
                        name="message"
                        multiline
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        error={!!errors.message}
                        helperText={errors.message}
                        required
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 2,
                          },
                        }}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        disabled={loading}
                        startIcon={
                          loading ? (
                            <CircularProgress size={20} color="inherit" />
                          ) : (
                            <Send />
                          )
                        }
                        sx={{
                          mt: 2,
                          px: 4,
                          py: 1.5,
                          fontSize: "1.1rem",
                          borderRadius: 3,
                        }}
                      >
                        {loading ? "Sending..." : "Send Message"}
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Map Section */}
        <Paper sx={{ mt: 6, p: 4, borderRadius: 5 }}>
          <Typography
            variant="h3"
            gutterBottom
            sx={{ color: "primary.main", fontWeight: 600, mb: 3 }}
          >
            Find Us
          </Typography>
          <Typography variant="body1" paragraph sx={{ mb: 4, lineHeight: 1.7 }}>
            Our clinic is conveniently located in Werribee, Melbourne, with easy
            access to public transport and parking. We proudly serve the Wyndham
            area including Pointcook, Tarneit and surrounding suburbs.
          </Typography>
          <Box
            sx={{
              width: "100%",
              height: "400px",
              borderRadius: 3,
              overflow: "hidden",
              position: "relative",
              boxShadow: "0 8px 32px rgba(202, 8, 88, 0.1)",
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3146.123456789!2d144.6612345!3d-37.8987654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b9c1234%3A0x5017d681632ccc0!2sWerribee%20VIC%2C%20Australia!5e0!3m2!1sen!2sau!4v1234567890123!5m2!1sen!2sau"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dr. Sarah Mitchell Clinic Location - Werribee"
            />
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Contact;
