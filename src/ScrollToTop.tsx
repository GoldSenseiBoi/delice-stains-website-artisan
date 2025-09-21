import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, 100); // attendre 100ms pour être sûr que la page a changé

    return () => clearTimeout(timer); // nettoyage
  }, [pathname]);

  return null;
};

export default ScrollToTop;