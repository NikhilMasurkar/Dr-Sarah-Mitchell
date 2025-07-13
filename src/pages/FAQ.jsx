import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Tabs,
  Tab,
  Paper,
  Button,
} from "@mui/material";
import {
  ExpandMore,
  Phone,
  Email,
  LocationOn,
  AccessTime,
} from "@mui/icons-material";
import { makeStyles } from "tss-react/mui";
import SEOHead from "../components/SEOHead";
import AnimatedSection from "../components/AnimatedSection";
import ContactSection from "../components/ContactSection";

// Import Home styles for CTA
import { makeStyles as makeHomeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
  tabsContainer: {
    marginBottom: theme.spacing(4),
    borderRadius: 5,
    background:
      "linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 243, 246, 0.9) 100%)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(202, 8, 88, 0.1)",
  },
  accordionContainer: {
    maxWidth: "800px",
    margin: "0 auto",
    opacity: 1,
    transform: "translateY(0)",
    transition: "all 0.5s ease",
  },
  accordionContainerTransition: {
    opacity: 0.3,
    transform: "translateY(20px)",
  },
  accordion: {
    marginBottom: theme.spacing(2),
    borderRadius: 5,
    background:
      "linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 243, 246, 0.5) 100%)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(202, 8, 88, 0.1)",
    "&:before": { display: "none" },
    transition: "all 0.3s ease",
  },
  contactSection: {
    padding: theme.spacing(4, 6),
    textAlign: "center",
    marginTop: theme.spacing(6),
    background:
      "linear-gradient(135deg, #E91E63 0%, #FF6B9D 50%, #FFB6C1 100%)",
    color: "white",
    borderRadius: 5,
    position: "relative",
    overflow: "hidden",
    boxShadow: "0 20px 60px rgba(233, 30, 99, 0.3)",
    "&:before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background:
        "radial-gradient(circle at 30% 70%, rgba(255, 255, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(255, 255, 255, 0.05) 0%, transparent 50%)",
    },
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(4),
    },
  },
}));

const useHomeStyles = makeHomeStyles()((theme) => ({
  ctaSection: {
    padding: theme.spacing(7, 8),
    textAlign: "center",
    background: "linear-gradient(135deg, #FEE2EF 0%, #FFB6C1 100%)", // lighter, softer pink
    color: "#CA0858",
    borderRadius: theme.spacing(6),
    position: "relative",
    overflow: "hidden",
    boxShadow: "0 20px 60px rgba(233, 30, 99, 0.18)",
    "&:before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background:
        "radial-gradient(circle at 30% 70%, rgba(255, 255, 255, 0.13) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(255, 255, 255, 0.07) 0%, transparent 50%)",
    },
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(5, 2),
    },
  },
  ctaPrimaryButton: {
    background: "linear-gradient(135deg, #E91E63 0%, #FF6B9D 100%)",
    color: "#fff",
    padding: theme.spacing(2.5, 6),
    fontSize: "1.3rem",
    fontWeight: 700,
    borderRadius: 5,
    border: "2px solid #fff",
    boxShadow: "0 8px 30px rgba(233, 30, 99, 0.25)",
    transition: "all 0.3s cubic-bezier(.4,0,.2,1)",
    textTransform: "none",
    "&:hover": {
      background: "linear-gradient(135deg, #C2185B 0%, #E91E63 100%)",
      color: "#fff",
      boxShadow: "0 15px 40px rgba(233, 30, 99, 0.35)",
      borderColor: "#fff",
      transform: "translateY(-3px) scale(1.03)",
    },
    "&:focus": {
      outline: "2px solid #fff",
      outlineOffset: "2px",
    },
  },
  ctaSecondaryButton: {
    border: "2px solid #fff",
    color: "#fff",
    background: "transparent",
    padding: theme.spacing(2.5, 5),
    fontSize: "1.2rem",
    fontWeight: 600,
    borderRadius: 5,
    boxShadow: "0 4px 18px rgba(233, 30, 99, 0.10)",
    transition: "all 0.3s cubic-bezier(.4,0,.2,1)",
    textTransform: "none",
    "&:hover": {
      background: "rgba(255,255,255,0.13)",
      color: "#fff",
      borderColor: "#fff",
      transform: "translateY(-2px) scale(1.02)",
    },
    "&:focus": {
      outline: "2px solid #fff",
      outlineOffset: "2px",
    },
  },
}));

const TabPanel = ({ children, value, index }) => {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
    </div>
  );
};

const FAQ = () => {
  const { classes } = useStyles();
  const { classes: homeClasses } = useHomeStyles();
  const [tabValue, setTabValue] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleTabChange = (event, newValue) => {
    setIsTransitioning(true);
    setExpanded(false);
    setTabValue(newValue);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const generalFAQs = [
    {
      question: "How do I book an appointment?",
      answer:
        "You can book an appointment by calling our office directly or using our online contact form. We will get back to you within 24 hours to confirm your appointment time.",
    },
    {
      question: "What should I bring to my first appointment?",
      answer:
        "Please bring a valid form of identification, your Medicare card, any private health insurance cards, a list of current medications, and any relevant medical records or test results.",
    },
    {
      question: "Do you accept private health insurance?",
      answer:
        "Yes, we accept most private health insurance plans. Please contact your insurance provider to confirm your coverage for specialist consultations.",
    },
    {
      question: "What are your office hours?",
      answer:
        "Our office is open Monday to Friday from 8:00 AM to 5:00 PM. Emergency consultations may be available outside these hours.",
    },
    {
      question: "How long is a typical appointment?",
      answer:
        "Initial consultations typically last 30-45 minutes, while follow-up appointments are usually 15-30 minutes, depending on the complexity of your case.",
    },
  ];

  const obstetricsFAQs = [
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
      question: "Can I have a natural birth if I've had a previous C-section?",
      answer:
        "VBAC (Vaginal Birth After Cesarean) may be possible depending on various factors including the reason for your previous C-section and your current pregnancy. We'll discuss this in detail during your consultations.",
    },
    {
      question: "What are the signs of preterm labor?",
      answer:
        "Signs include regular contractions before 37 weeks, pelvic pressure, lower back pain, cramping, and changes in vaginal discharge. Contact us immediately if you experience these symptoms.",
    },
  ];

  const gynaecologyFAQs = [
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

  const treatmentFAQs = [
    {
      question: "What is laparoscopic surgery?",
      answer:
        "Laparoscopic surgery is a minimally invasive technique using small incisions and a camera to perform operations. It typically results in less pain, shorter recovery time, and smaller scars compared to open surgery.",
    },
    {
      question: "How should I prepare for surgery?",
      answer:
        "Pre-surgery preparation includes fasting as instructed, stopping certain medications, arranging post-operative care, and following all pre-operative instructions provided by our team.",
    },
    {
      question: "What is the recovery time for different procedures?",
      answer:
        "Recovery times vary depending on the procedure. Minor procedures may require 1-2 days, while major surgeries may need 2-6 weeks. We'll provide specific recovery guidelines for your procedure.",
    },
    {
      question: "Are there alternatives to surgery?",
      answer:
        "Many conditions can be treated with non-surgical approaches first, including medications, lifestyle changes, and other therapies. We always explore conservative options when appropriate.",
    },
    {
      question: "What should I expect during recovery?",
      answer:
        "Recovery expectations include managing pain, following activity restrictions, attending follow-up appointments, and monitoring for any complications. We provide detailed recovery instructions for each procedure.",
    },
  ];

  const faqCategories = [
    { label: "General", faqs: generalFAQs },
    { label: "Obstetrics", faqs: obstetricsFAQs },
    { label: "Gynaecology", faqs: gynaecologyFAQs },
    { label: "Treatment", faqs: treatmentFAQs },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <SEOHead
        title="Frequently Asked Questions | Women's Health FAQ"
        description="Find answers to common questions about obstetrics, gynaecology, pregnancy care, women's health services and treatments. Expert advice from Dr. Sarah Mitchell."
        keywords="women's health FAQ, pregnancy questions, gynaecology FAQ, obstetrics questions, PCOS FAQ, menopause questions"
        canonicalUrl="https://drpriyarajagopal.com.au/faq"
        ogTitle="Frequently Asked Questions | Women's Health FAQ"
        ogDescription="Get answers to common questions about women's health, pregnancy care, and gynaecological services."
      />

      {/* Header */}
      <AnimatedSection animation="fade">
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography variant="h1" gutterBottom>
            Frequently Asked Questions
          </Typography>
          <Typography variant="h5" color="text.secondary" gutterBottom>
            Find answers to common questions about our services
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: "800px", mx: "auto" }}>
            We\'ve compiled answers to the most commonly asked questions about
            our obstetrics and gynaecology services. If you can\'t find the
            answer you\'re looking for, please don\'t hesitate to contact us
            directly.
          </Typography>
        </Box>
      </AnimatedSection>

      {/* FAQ Tabs */}
      <AnimatedSection animation="slideUp" delay={200}>
        <Paper className={classes.tabsContainer}>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            centered
            sx={{
              "& .MuiTab-root": {
                fontWeight: 600,
                fontSize: "1rem",
                color: "text.secondary",
                transition: "all 0.3s ease",
                "&:hover": {
                  color: "primary.main",
                  transform: "translateY(-2px)",
                },
                "&.Mui-selected": {
                  color: "primary.main",
                  fontWeight: 700,
                },
              },
              "& .MuiTabs-indicator": {
                height: 3,
                borderRadius: 2,
                background: "linear-gradient(90deg, #CA0858, #E91E63)",
              },
              "& .MuiTabs-flexContainer": {
                flexWrap: "wrap",
              },
            }}
          >
            {faqCategories.map((category, index) => (
              <Tab key={index} label={category.label} />
            ))}
          </Tabs>
        </Paper>
      </AnimatedSection>

      {/* FAQ Content */}
      <Box
        className={`${classes.accordionContainer} ${
          isTransitioning ? classes.accordionContainerTransition : ""
        }`}
      >
        {faqCategories.map((category, categoryIndex) => (
          <TabPanel key={categoryIndex} value={tabValue} index={categoryIndex}>
            {category.faqs.map((faq, faqIndex) => (
              <AnimatedSection
                key={faqIndex}
                animation="slideUp"
                delay={faqIndex * 100}
              >
                <Accordion
                  expanded={expanded === `panel${categoryIndex}-${faqIndex}`}
                  onChange={handleAccordionChange(
                    `panel${categoryIndex}-${faqIndex}`
                  )}
                  className={classes.accordion}
                >
                  <AccordionSummary
                    expandIcon={
                      <ExpandMore
                        sx={{
                          color: "primary.main",
                          transition: "transform 0.3s ease",
                        }}
                      />
                    }
                    sx={{
                      "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
                        transform: "rotate(180deg)",
                      },
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        color: "text.primary",
                      }}
                    >
                      {faq.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails
                    sx={{
                      pt: 0,
                      pb: 3,
                      px: 3,
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        lineHeight: 1.7,
                        color: "text.secondary",
                      }}
                    >
                      {faq.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </AnimatedSection>
            ))}
          </TabPanel>
        ))}
      </Box>

      {/* Contact Section */}
      <AnimatedSection animation="fade" delay={400}>
        <ContactSection
          title="Still Have Questions?"
          subtitle="If you couldn't find the answer you were looking for, we're here to help. Contact us directly and we'll be happy to assist you."
          primaryButton={{
            label: "Call: 0416 151 600",
            icon: <Phone />,
            href: "tel:0416151600",
            ariaLabel: "Call: 0416 151 600",
          }}
          secondaryButton={{
            label: "Send Email",
            icon: <Email />,
            href: "mailto:info@drpriyarajagopal.com.au",
            ariaLabel: "Send Email",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 6,
              flexWrap: "wrap",
              mt: 4,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                color: "primary.main",
                opacity: 0.9,
              }}
            >
              <LocationOn sx={{ fontSize: "1.5rem" }} />
              <Box>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  Visit Us
                </Typography>
                <Typography variant="body2">Werribee, Melbourne</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                color: "primary.main",
                opacity: 0.9,
              }}
            >
              <AccessTime sx={{ fontSize: "1.5rem" }} />
              <Box>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  Hours
                </Typography>
                <Typography variant="body2">By Appointment</Typography>
              </Box>
            </Box>
          </Box>
        </ContactSection>
      </AnimatedSection>
    </Container>
  );
};

export default FAQ;
