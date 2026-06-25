// JSCamp InfoJobs Bootcamp @jdomingu19
// Full-Stack Web Bootcamp @midudev
// Module 4: React: src/App.jsx

import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";

import { HomePage } from "./pages/Home.jsx";
import { SearchPage } from "./pages/Search.jsx";
// import { NotFoundPage } from "./pages/NotFound.jsx";
import { Route } from "./components/Route.jsx";

function App() {
  return (
    <>
      <Header />
      <Route path="/" componet={HomePage} />
      <Route path="/search" componet={SearchPage} />
      <Footer />
    </>
  );
}

export default App;
