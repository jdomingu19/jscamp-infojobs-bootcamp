// JSCamp InfoJobs Bootcamp @jdomingu19
// Full-Stack Web Bootcamp @midudev
// Module 4: React: src/components/SearchFormSection.jsx

import { useId } from "react";

export function SearchFormSection({ onSearch, onTextFilter }) {
  const searchId = useId();
  const technologyId = useId();
  const locationId = useId();
  const experienceLevelId = useId();

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const filters = {
      search: formData.get(searchId),
      technology: formData.get(technologyId),
      location: formData.get(locationId),
      experienceLevel: formData.get(experienceLevelId),
    };

    onSearch(filters);
  };

  const handleTextChange = (event) => {
    const text = event.target.value;
    onTextFilter(text);
  };

  return (
    <>
      {/* Section dedicated to the job search functionality */}
      <section className="jobs-search">
        <h1>Find your next job</h1>
        <p>Explore thousands of opportunities in the technology sector.</p>

        <form id="jobs-search-form" role="search" onSubmit={handleSubmit}>
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
              name={searchId}
              id="jobs-search-input"
              placeholder="Search jobs, companies or skills"
              onChange={handleTextChange}
            />

            <button type="submit">Search</button>
          </div>

          {/* Filter options for refining job search results */}
          <div className="search-filters">
            {/* Dropdown to filter jobs by technology */}
            <select name={technologyId} id="filter-technology">
              <option value="">Technologies</option>

              <optgroup label="Frontend">
                <option value="html">HTML</option>
                <option value="css">CSS</option>
                <option value="javascript">JavaScript</option>
                <option value="typescript">TypeScript</option>
                <option value="react">React</option>
                <option value="vue">Vue</option>
                <option value="swift">Swift</option>
                <option value="kotlin">Kotlin</option>
                <option value="figma">Figma</option>
              </optgroup>

              <optgroup label="Backend">
                <option value="node.js">Node.js</option>
                <option value="python">Python</option>
                <option value="php">PHP</option>
                <option value="java">Java</option>
                <option value="express">Express</option>
                <option value="nosql">NoSQL</option>
                <option value="docker">Docker</option>
                <option value="bash">Bash</option>
                <option value="restapis">REST APIs</option>
              </optgroup>

              <optgroup label="Database">
                <option value="mysql">MySQL</option>
                <option value="mongodb">MongoDB</option>
                <option value="postgresql">PostgreSQL</option>
              </optgroup>

              <optgroup label="Cloud & AI">
                <option value="aws">AWS</option>
                <option value="azure">Azure</option>
                <option value="gcp">GCP</option>
                <option value="tensorflow">TensorFlow</option>
                <option value="pytorch">PyTorch</option>
                <option value="opencv">OpenCV</option>
                <option value="huggingface">Hugging Face</option>
                <option value="mlops">MLOps</option>
                <option value="machinelearning">Machine Learning</option>
                <option value="bigdata">Big Data</option>
              </optgroup>

              <optgroup label="Testing">
                <option value="selenium">Selenium</option>
                <option value="cypress">Cypress</option>
                <option value="playwright">Playwright</option>
              </optgroup>

              <optgroup label="Other">
                <option value="r">R</option>
              </optgroup>
            </select>

            {/* Dropdown to filter jobs by location */}
            <select name={locationId} id="filter-location">
              <option value="">Location</option>
              <option value="remote">Remote</option>

              {/* Spain group */}
              <optgroup label="Spain">
                <option value="barcelona">Barcelona</option>
                <option value="valencia">Valencia</option>
                <option value="girona">Girona</option>
                <option value="tarragona">Tarragona</option>
                <option value="lleida">Lleida</option>
                <option value="manresa">Manresa</option>
                <option value="sabadell">Sabadell</option>
                <option value="terrassa">Terrassa</option>
                <option value="mataro">Mataró</option>
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
            <select name={experienceLevelId} id="filter-experience-level">
              <option value="">Experience Level</option>
              <option value="junior">Junior</option>
              <option value="midlevel">Mid-level</option>
              <option value="senior">Senior</option>
              <option value="lead">Lead</option>
            </select>
          </div>
        </form>
      </section>
    </>
  );
}
