import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
  container: {
    padding: { xs: theme.spacing(4), md: theme.spacing(10) },
    textAlign: "center",
    marginTop: theme.spacing(6),
    background: "linear-gradient(135deg, #FAF6FB 0%, #FFF0F5 100%)",
    color: theme.palette.primary.main,
    borderRadius: theme.spacing(2),
    position: "relative",
    overflow: "hidden",
    boxShadow: "0 8px 32px rgba(233, 30, 99, 0.08)",
    marginBottom: theme.spacing(10),
  },
  contentWrapper: {
    position: "relative",
    zIndex: 2,
    margin: theme.spacing(10),
  },
  title: {
    fontWeight: 700,
    marginBottom: theme.spacing(3),
    fontSize: { xs: "2rem", md: "2.4rem" },
    color: theme.palette.primary.main,
  },
  subtitle: {
    marginBottom: theme.spacing(5),
    fontSize: "1.15rem",
    opacity: 0.95,
    maxWidth: "600px",
    marginLeft: "auto",
    marginRight: "auto",
    lineHeight: 1.7,
    color: theme.palette.text.secondary,
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(3),
    flexWrap: "wrap",
    marginBottom: theme.spacing(3),
  },
  primaryButton: {
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    fontSize: "1.15rem",
    fontWeight: 700,
    borderRadius: theme.spacing(2),
    textTransform: "none",
    boxShadow: "0 4px 18px rgba(233, 30, 99, 0.10)",
  },
  secondaryButton: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    fontSize: "1.08rem",
    fontWeight: 600,
    borderRadius: theme.spacing(2),
    textTransform: "none",
    borderWidth: 2,
    color: "#2D3748",
    borderColor: "#2D3748",
    "&:hover": {
      transform: "translateY(-2px)",
      borderColor: "#2D3748",
      backgroundColor: "unset",
      color: "#2D3748",
      boxShadow: "none",
    },
  },
}));

const ContactSection = ({
  title,
  subtitle,
  primaryButton,
  secondaryButton,
  children,
}) => {
  const { classes } = useStyles();
  return (
    <Box className={classes.container}>
      <Box className={classes.contentWrapper}>
        <Typography variant="h2" gutterBottom className={classes.title}>
          {title}
        </Typography>
        <Typography variant="subtitle1" className={classes.subtitle}>
          {subtitle}
        </Typography>
        <Box className={classes.buttonContainer}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={primaryButton.icon}
            component={primaryButton.href ? "a" : "button"}
            href={primaryButton.href}
            onClick={primaryButton.onClick}
            aria-label={primaryButton.ariaLabel}
            className={classes.primaryButton}
          >
            {primaryButton.label}
          </Button>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            startIcon={secondaryButton.icon}
            component={secondaryButton.href ? "a" : "button"}
            href={secondaryButton.href}
            onClick={secondaryButton.onClick}
            aria-label={secondaryButton.ariaLabel}
            className={classes.secondaryButton}
          >
            {secondaryButton.label}
          </Button>
        </Box>
        {children}
      </Box>
    </Box>
  );
};

export default ContactSection;
