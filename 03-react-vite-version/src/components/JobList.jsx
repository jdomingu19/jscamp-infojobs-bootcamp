// JSCamp InfoJobs Bootcamp @jdomingu19
// Full-Stack Web Bootcamp @midudev
// Module 4: React: src/components/JobListings.jsx

import { JobCard } from "./JobCard.jsx";

export function JobList({ jobs }) {
  return (
    <>
      <h2 style={{ textAlign: "center" }}>Search Results</h2>
      <div className="jobs-listings">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </>
  );
}
