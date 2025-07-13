import { lazy } from "react";

// Lazy load all page components
const HomePage = lazy(() => import("../pages/Home"));
const ProfilePage = lazy(() => import("../pages/Profile"));
const ObstetricsPage = lazy(() => import("../pages/Obstetrics"));
const GynaecologyPage = lazy(() => import("../pages/Gynaecology"));
const ContactPage = lazy(() => import("../pages/Contact"));
const FAQPage = lazy(() => import("../pages/FAQ"));
const BlogPage = lazy(() => import("../pages/Blog"));
const BlogPostPage = lazy(() => import("../pages/BlogPageDescription"));

export {
  HomePage,
  ProfilePage,
  ObstetricsPage,
  GynaecologyPage,
  ContactPage,
  FAQPage,
  BlogPage,
  BlogPostPage,
};
