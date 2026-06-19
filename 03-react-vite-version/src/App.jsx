// JSCamp InfoJobs Bootcamp @jdomingu19
// Full-Stack Web Bootcamp @midudev
// Module 4: React: src/App.jsx

import { useRouter } from "./hooks/useRouter.js";

import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";

import { HomePage } from "./pages/Home.jsx";
import { SearchPage } from "./pages/Search.jsx";
import { NotFoundPage } from "./pages/NotFound.jsx";

function App() {
  const { currentPath } = useRouter();

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
