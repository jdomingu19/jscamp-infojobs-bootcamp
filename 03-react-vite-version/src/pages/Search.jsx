// JSCamp InfoJobs Bootcamp @jdomingu19
// Full-Stack Web Bootcamp @midudev
// Module 4: React: src/pages/Search.jsx

import { useState, useEffect } from "react";

import { SearchForm } from "../components/SearchForm.jsx";
import { JobList } from "../components/JobList.jsx";
import { Pagination } from "../components/Pagination.jsx";

import jobsData from "../data/data.json";

const RESULTS_PER_PAGE = 4;

export function SearchPage() {
  const [filters, setFilters] = useState({
    technology: "",
    location: "",
    experienceLevel: "",
  });
  const [textToFilter, setTextToFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const jobsFilteredByFilters = jobsData.filter((job) => {
    return (
      (filters.technology === "" ||
        job.data.technology.includes(filters.technology)) &&
      (filters.location === "" || job.data.location === filters.location) &&
      (filters.experienceLevel === "" ||
        job.data.level === filters.experienceLevel)
    );
  });

  const jobsWithTextFilter =
    jobsFilteredByFilters === ""
      ? jobsData
      : jobsFilteredByFilters.filter((job) => {
          return job.title.toLowerCase().includes(textToFilter.toLowerCase());
        });

  const totalPages = Math.ceil(jobsWithTextFilter.length / RESULTS_PER_PAGE);

  const pagedResults = jobsWithTextFilter.slice(
    (currentPage - 1) * RESULTS_PER_PAGE,
    currentPage * RESULTS_PER_PAGE,
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = (newFilters) => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  const handleTextFilter = (newTextToFilter) => {
    setTextToFilter(newTextToFilter);
    setCurrentPage(1);
  };

  useEffect(() => {
    document.title = `Results: ${jobsWithTextFilter.length}, Page ${currentPage} - DevJobs`;
  }, [jobsWithTextFilter.length, currentPage, textToFilter]);

  return (
    <main>
      <SearchForm onSearch={handleSearch} onTextFilter={handleTextFilter} />
      <section>
        <JobList jobs={pagedResults} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </section>
    </main>
  );
}
