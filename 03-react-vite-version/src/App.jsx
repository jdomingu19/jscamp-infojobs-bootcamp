// JSCamp InfoJobs Bootcamp @jdomingu19
// Full-Stack Web Bootcamp @midudev
// Module 4: React: src/App.jsx

import { useState } from "react";

import { Header } from "./components/Header.jsx";
import { SearchFormSection } from "./components/SearchFormSection.jsx";
import { JobList } from "./components/JobList.jsx";
import { Pagination } from "./components/Pagination.jsx";
import { Footer } from "./components/Footer.jsx";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePageChange = (page) => {
    console.log("Changing to page:", page);
    setCurrentPage(page);
  };

  return (
    <>
      <Header />
      <main>
        <SearchFormSection />
        <section>
          <JobList />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
