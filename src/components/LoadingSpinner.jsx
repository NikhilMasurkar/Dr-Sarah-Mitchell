import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
  loadingContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "60vh",
    gap: theme.spacing(3),
  },
  spinner: {
    color: "#E91E63",
  },
  loadingText: {
    color: "#718096",
    fontWeight: 500,
  },
}));

const LoadingSpinner = () => {
  const { classes } = useStyles();

  return (
    <Box className={classes.loadingContainer}>
      <CircularProgress size={50} className={classes.spinner} />
      <Typography variant="body1" className={classes.loadingText}>
        Loading...
      </Typography>
    </Box>
  );
};

export default LoadingSpinner;
