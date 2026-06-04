// JSCamp InfoJobs Bootcamp @jdomingu19
// Full-Stack Web Bootcamp @midudev
// Module 4: React: src/components/Pagination.jsx

import styles from "./Pagination.module.css";

export function Pagination({ currentPage = 1, totalPages = 10, onPageChange }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const stylePreviousButton = isFirstPage
    ? { pointerEvents: "none", opacity: 0.5 }
    : {};
  const styleNextButton = isLastPage
    ? { pointerEvents: "none", opacity: 0.5 }
    : {};

  const handlePreviousClick = (event) => {
    event.preventDefault();
    if (!isFirstPage && currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = (event) => {
    event.preventDefault();
    if (!isLastPage && currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handleChangePage = (event, page) => {
    event.preventDefault();
    if (page !== currentPage) {
      onPageChange(page);
    }
  };

  return (
    <nav className={styles.pagination}>
      <a href="#" style={stylePreviousButton} onClick={handlePreviousClick}>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M15 6l-6 6l6 6" />
        </svg>
      </a>

      {pages.map((page) => (
        <a
          key={page}
          href="#"
          className={currentPage === page ? styles.isActive : ""}
          onClick={(event) => handleChangePage(event, page)}
        >
          {page}
        </a>
      ))}

      <a href="#" style={styleNextButton} onClick={handleNextClick}>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M9 6l6 6l-6 6" />
        </svg>
      </a>
    </nav>
  );
}
