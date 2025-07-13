import React, { useState, useEffect } from "react";
import { Box, Container } from "@mui/material";
import {
  FavoriteOutlined,
  PregnantWomanOutlined,
  HealthAndSafetyOutlined,
  Phone,
  ChildCare,
  Favorite,
  LocalHospital,
  ArrowForward,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import useHomeStyles from "./HomeStyles";
import SEOHead from "../components/SEOHead";
import AnimatedSection from "../components/AnimatedSection";
import ContactSection from "../components/ContactSection";
import {
  services as servicesData,
  testimonials,
  highlights,
  stats as statsData,
  structuredData,
  galleryImages,
} from "../customData/homePageData";
import HeroSection from "../components/HomeSections/HeroSection";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import StatsSection from "../components/HomeSections/StatsSection";
import ServicesSection from "../components/HomeSections/ServicesSection";
import GallerySection from "../components/HomeSections/GallerySection";
import TestimonialsSection from "../components/HomeSections/TestimonialsSection";

// Move iconMap outside Home
const iconMap = {
  PregnantWomanOutlined: <PregnantWomanOutlined sx={{ fontSize: 48 }} />,
  FavoriteOutlined: <FavoriteOutlined sx={{ fontSize: 48 }} />,
  HealthAndSafetyOutlined: <HealthAndSafetyOutlined sx={{ fontSize: 48 }} />,
  LocalHospital: <LocalHospital />,
  ChildCare: <ChildCare />,
  Favorite: <Favorite />,
};

const Home = () => {
  const { classes } = useHomeStyles();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { ref: galleryRef, isIntersecting: isGalleryVisible } =
    useIntersectionObserver({
      threshold: 0.3,
      rootMargin: "0px 0px -100px 0px",
      triggerOnce: false,
    });

  // Shuffle animation effect - only when gallery is visible
  useEffect(() => {
    if (!isGalleryVisible) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [galleryImages.length, isGalleryVisible]);

  return (
    <Box sx={{ bgcolor: "background.default", overflow: "hidden" }}>
      <SEOHead
        title="Dr. Sarah Mitchell - Female Obstetrician & Gynaecologist Melbourne"
        description="Dr. Sarah Mitchell is a specialist female obstetrician and gynaecologist in Melbourne, providing comprehensive women's health services to Werribee, Pointcook, Tarneit and Wyndham areas."
        keywords="obstetrician melbourne, gynaecologist melbourne, female doctor, women's health, pregnancy care, werribee, pointcook, tarneit, wyndham"
        canonicalUrl="https://drsarahmitchell.com.au"
        ogTitle="Dr. Sarah Mitchell - Female Obstetrician & Gynaecologist Melbourne"
        ogDescription="Specialist women's health services in Melbourne. Expert obstetric and gynaecological care for Werribee, Pointcook, Tarneit and Wyndham areas."
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <HeroSection
        classes={classes}
        highlights={highlights}
        navigate={navigate}
      />

      {/* Stats Section */}
      <StatsSection
        classes={classes}
        statsData={statsData}
        iconMap={iconMap}
        AnimatedSection={AnimatedSection}
      />

      {/* Services Section */}
      <ServicesSection
        servicesData={servicesData}
        iconMap={iconMap}
        navigate={navigate}
        AnimatedSection={AnimatedSection}
      />

      {/* Gallery Section */}
      <GallerySection
        galleryRef={galleryRef}
        galleryImages={galleryImages}
        currentImageIndex={currentImageIndex}
        AnimatedSection={AnimatedSection}
      />

      {/* Testimonials Section */}
      <TestimonialsSection
        testimonials={testimonials}
        AnimatedSection={AnimatedSection}
      />

      {/* Call to Action */}
      <Container maxWidth="lg">
        <AnimatedSection animation="fade">
          <ContactSection
            title="Ready to Take Care of Your Health?"
            subtitle="Take the first step towards better health. Book your consultation today and experience compassionate, expert women's health care."
            primaryButton={{
              label: "Book Appointment",
              icon: <ArrowForward />,
              onClick: () => navigate("/contact"),
              ariaLabel: "Book Appointment",
            }}
            secondaryButton={{
              label: "0416 151 600",
              icon: <Phone />,
              href: "tel:0416151600",
              ariaLabel: "Call Now",
            }}
          />
        </AnimatedSection>
      </Container>
    </Box>
  );
};

export default Home;
