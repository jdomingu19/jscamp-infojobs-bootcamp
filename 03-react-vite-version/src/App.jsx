// JSCamp InfoJobs Bootcamp @jdomingu19
// Full-Stack Web Bootcamp @midudev
// Module 4: React: src/App.jsx

import Header from "./components/Header";
import Footer from "./components/Footer";
import JobCard from "./components/JobCard";

function App() {
  return (
    <>
      <Header />
      {/* The main section holds the core page content */}
      <main>
        {/* Section dedicated to the job search functionality */}
        <section className="jobs-search">
          <h1>Find your next job</h1>
          <p>Explore thousands of opportunities in the technology sector.</p>

          <form id="jobs-search-form" role="search">
            {/* Search bar with icon and input field */}
            <div className="search-bar">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-search"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                <path d="M21 21l-6 -6" />
              </svg>
              <input
                type="text"
                name="search"
                id="jobs-search-input"
                required
                placeholder="Search jobs, companies or skills"
              />
            </div>

            {/* Filter options for refining job search results */}
            <div className="search-filters">
              {/* Dropdown to filter jobs by technology */}
              <select name="technology" id="filter-technology">
                <option value="">Technologies</option>
                <optgroup label="Frontend">
                  <option value="html">HTML</option>
                  <option value="css">CSS</option>
                  <option value="javascript">JavaScript</option>
                  <option value="react">React</option>
                  <option value="vue">Vue</option>
                </optgroup>

                <optgroup label="Backend">
                  <option value="node">Node.js</option>
                  <option value="python">Python</option>
                  <option value="php">PHP</option>
                  <option value="java">Java</option>
                </optgroup>

                <optgroup label="Database">
                  <option value="mysql">MySQL</option>
                  <option value="mongodb">MongoDB</option>
                  <option value="postgresql">PostgreSQL</option>
                </optgroup>
              </select>

              {/* Dropdown to filter jobs by location */}
              <select name="location" id="filter-location">
                <option value="">Location</option>
                <option value="remote">Remote</option>

                {/* Spain group */}
                <optgroup label="Spain">
                  <option value="barcelona">Barcelona</option>
                  <option value="valencia">Valencia</option>
                  <option value="madrid">Madrid</option>
                </optgroup>

                {/* France group */}
                <optgroup label="France">
                  <option value="paris">Paris</option>
                  <option value="lyon">Lyon</option>
                  <option value="marseille">Marseille</option>
                </optgroup>

                {/* Italy group */}
                <optgroup label="Italy">
                  <option value="rome">Rome</option>
                  <option value="milan">Milán</option>
                  <option value="florence">Florence</option>
                </optgroup>

                {/* Switzerland group */}
                <optgroup label="Switzerland">
                  <option value="berna">Berna</option>
                  <option value="zurich">Zurich</option>
                  <option value="ginebra">Geneva</option>
                </optgroup>
              </select>

              {/* Dropdown to filter jobs by experience level */}
              <select name="experience-level" id="filter-experience-level">
                <option value="">Experience Level</option>
                <option value="junio">Junior</option>
                <option value="mid">Mid-level</option>
                <option value="senior">Senior</option>
                <option value="lead">Lead</option>
              </select>
            </div>
          </form>

          {/* Span element to display the selected filter value dynamically */}
          {/* <span id="filter-selected-value"></span> */}
        </section>

        {/* Section dedicated to displaying search results */}
        <section>
          <h2>Search Results</h2>

          {/* Job listings container: groups multiple job cards with consistent styling */}
          <div className="jobs-listings">
            {/* TODO: Create dynamic JobCard elements with data.json */}
            <JobCard
              title="Frontend Developer"
              company="Tech Solutions Inc."
              location="Remote"
              description="We are looking for a frontend developer with experience in React, TypeScript and Tailwind CSS."
              data={{
                technology: ["react", "typescript", "tailwindcss"],
                location: "remote",
                level: "mid-level",
              }}
            />
            <JobCard
              title="Senior Software Engineer"
              company="Data Driven Co."
              location="Barcelona"
              description="We are looking for a software engineer with experience in web development."
              data={{
                technology: ["typescript", "next.js", "node.js"],
                location: "barcelona",
                level: "senior",
              }}
            />
          </div>

          {/* Loading indicator shown until jobs are fetched and rendered */}
          <p id="jobs-loading">Loading jobs...</p>
        </section>

        {/* Pagination navigation: allows users to move between pages of job listings */}
        <nav className="pagination">
          {/* Previous page button with left arrow icon */}
          <a href="#">
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

          {/* Page number links */}
          <a className="is-active" href="#">
            1
          </a>
          <a href="#">2</a>
          <a href="#">3</a>
          <a href="#">4</a>
          <a href="#">5</a>

          {/* Next page button with right arrow icon */}
          <a href="#">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 6l6 6l-6 6" />
            </svg>
          </a>
        </nav>
      </main>
      <Footer />
    </>
  );
}

export default App;
