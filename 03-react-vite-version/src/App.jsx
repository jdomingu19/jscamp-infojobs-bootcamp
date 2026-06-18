// JSCamp InfoJobs Bootcamp @jdomingu19
// Full-Stack Web Bootcamp @midudev
// Module 4: React: src/App.jsx

import { useEffect, useState } from "react";

import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";

import { HomePage } from "./pages/Home.jsx";
import { SearchPage } from "./pages/Search.jsx";
import { NotFoundPage } from "./pages/NotFound.jsx";

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handledLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handledLocationChange);

    return () => {
      window.removeEventListener("popstate", handledLocationChange);
    };
  }, []);

  return (
    <>
      <Header />
      {currentPath === "/" && <HomePage />}
      {currentPath === "/search" && <SearchPage />}
      {currentPath !== "/search" && currentPath !== "/" && <NotFoundPage />}
      <Footer />
    </>
  );
}

export default App;
