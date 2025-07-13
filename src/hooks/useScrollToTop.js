import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Try smooth scroll first, fallback to instant scroll
    const scrollToTop = () => {
      try {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      } catch (error) {
        // Fallback for browsers that don't support smooth scroll
        window.scrollTo(0, 0);
      }
    };

    // Add a small delay to ensure the new page has loaded
    const timer = setTimeout(scrollToTop, 100);

    return () => clearTimeout(timer);
  }, [pathname]);
};

export default useScrollToTop;
