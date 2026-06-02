// JSCamp InfoJobs Bootcamp @jdomingu19
// Full-Stack Web Bootcamp @midudev
// Module 4: React: src/components/JobListings.jsx

import jobsData from "../data/data.json";
import { JobCard } from "./JobCard.jsx";

export function JobList() {
  return (
    <>
      <h2>Search Results</h2>
      <div className="jobs-listings">
        {jobsData.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </>
  );
}
