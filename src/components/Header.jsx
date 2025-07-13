import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const navigate = useNavigate();
  const location = useLocation();

  const navigationItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/profile" },
    { label: "Obstetrics", path: "/obstetrics" },
    { label: "Gynaecology", path: "/gynaecology" },
    { label: "Blog", path: "/blogs" },
    { label: "FAQ", path: "/faq" },
    { label: "Contact", path: "/contact" },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setMobileOpen(false);
  };

  const drawer = (
    <Box sx={{ width: 280, bgcolor: "#FFF3F6", height: "100%" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 2,
        }}
      >
        <Typography
          variant="h6"
          sx={{ color: "primary.main", fontWeight: 700 }}
        >
          Dr. Sarah Mitchell
        </Typography>
        <IconButton onClick={handleDrawerToggle} sx={{ color: "primary.main" }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List sx={{ px: 2 }}>
        {navigationItems.map((item) => (
          <ListItem
            key={item.path}
            onClick={() => handleNavigation(item.path)}
            sx={{
              borderRadius: 2,
              mb: 1,
              cursor: "pointer",
              bgcolor:
                location.pathname === item.path
                  ? "primary.main"
                  : "transparent",
              color: location.pathname === item.path ? "white" : "text.primary",
              "&:hover": {
                bgcolor:
                  location.pathname === item.path
                    ? "primary.main"
                    : "rgba(202, 8, 88, 0.1)",
              },
            }}
          >
            <ListItemText
              primary={item.label}
              primaryTypographyProps={{
                fontWeight: location.pathname === item.path ? 600 : 500,
                fontSize: "1.1rem",
              }}
            />
          </ListItem>
        ))}
        <ListItem sx={{ mt: 2 }}>
          <Button
            variant="contained"
            fullWidth
            onClick={() => handleNavigation("/contact")}
            sx={{
              py: 1.5,
              fontSize: "1.1rem",
              borderRadius: 3,
            }}
          >
            Book Enquiry
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="sticky" elevation={0}>
        <Toolbar sx={{ py: 1 }}>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontWeight: 700,
              color: "text.primary",
              cursor: "pointer",
              fontSize: { xs: "1.2rem", md: "1.4rem" },
              background: "linear-gradient(45deg, #2D3748, #CA0858)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            onClick={() => navigate("/")}
          >
            Dr. Sarah Mitchell
          </Typography>

          {isMobile ? (
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Button
                variant="contained"
                size="small"
                onClick={() => navigate("/contact")}
                sx={{
                  px: 2,
                  py: 0.8,
                  fontSize: "0.9rem",
                  borderRadius: 2,
                }}
              >
                Enquiry
              </Button>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ color: "primary.main" }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          ) : (
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              {navigationItems.map((item) => (
                <Button
                  key={item.path}
                  color="inherit"
                  onClick={() => handleNavigation(item.path)}
                  sx={{
                    fontWeight: location.pathname === item.path ? 600 : 500,
                    color:
                      location.pathname === item.path
                        ? "primary.main"
                        : "text.primary",
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    fontSize: "1rem",
                    "&:hover": {
                      bgcolor: "rgba(202, 8, 88, 0.08)",
                      color: "primary.main",
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
              <Button
                variant="contained"
                onClick={() => navigate("/contact")}
                sx={{
                  ml: 2,
                  px: 3,
                  py: 1,
                  fontSize: "1rem",
                  borderRadius: 3,
                }}
              >
                Book Enquiry
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", lg: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 280,
            bgcolor: "#FFF3F6",
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;
