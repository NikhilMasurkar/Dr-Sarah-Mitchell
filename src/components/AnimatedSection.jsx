import React from "react";
import { Box, Fade, Slide } from "@mui/material";

const AnimatedSection = ({ children, animation = "fade" }) => {
  const renderAnimation = () => {
    switch (animation) {
      case "slideUp":
        return (
          <Slide direction="up" in={true}>
            <Box>{children}</Box>
          </Slide>
        );
      case "slideLeft":
        return (
          <Slide direction="left" in={true}>
            <Box>{children}</Box>
          </Slide>
        );
      case "slideRight":
        return (
          <Slide direction="right" in={true}>
            <Box>{children}</Box>
          </Slide>
        );
      default:
        return (
          <Fade in={true}>
            <Box>{children}</Box>
          </Fade>
        );
    }
  };

  return <Box sx={{ minHeight: "20px" }}>{renderAnimation()}</Box>;
};

export default AnimatedSection;
