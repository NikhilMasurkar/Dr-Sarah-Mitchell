import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { HelmetProvider } from "react-helmet-async";
import { theme } from "./theme";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoadingSpinner from "./components/LoadingSpinner";
import ScrollToTop from "./components/ScrollToTop";
import {
  HomePage,
  ProfilePage,
  ObstetricsPage,
  GynaecologyPage,
  FAQPage,
  ContactPage,
  BlogPage,
  BlogPostPage,
} from "./components/LazyComponents";

// Wrapper to use useLocation in the router context
function AppRoutes() {
  const location = useLocation();
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/obstetrics" element={<ObstetricsPage />} />
      <Route path="/gynaecology" element={<GynaecologyPage />} />
      <Route path="/blogs" element={<BlogPage key={location.key} />} />
      <Route path="/blog/:id" element={<BlogPostPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/faq" element={<FAQPage />} />
    </Routes>
  );
}

const App = () => {
  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <ScrollToTop />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              minHeight: "100vh",
            }}
          >
            <Header />
            <main style={{ flexGrow: 1, minHeight: "60vh" }}>
              <Suspense fallback={<LoadingSpinner />}>
                <AppRoutes />
              </Suspense>
            </main>
            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;
