// JSCamp InfoJobs Bootcamp @jdomingu19
// Full-Stack Web Bootcamp @midudev
// Module 4: React: src/App.jsx

import { Header } from "./components/Header.jsx";
import { SearchFormSection } from "./components/SearchFormSection.jsx";
import { JobList } from "./components/JobList.jsx";
import { Pagination } from "./components/Pagination.jsx";
import { Footer } from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <SearchFormSection />
        <section>
          <JobList />
          <Pagination />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
