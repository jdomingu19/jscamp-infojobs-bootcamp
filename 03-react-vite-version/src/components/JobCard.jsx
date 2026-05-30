// JSCamp InfoJobs Bootcamp @jdomingu19
// Full-Stack Web Bootcamp @midudev
// Module 4: React: src/components/JobCard.jsx

import { useState } from "react";

const JobCard = ({ data, title, company, location, description }) => {
  const [isApplied, setApplied] = useState(false);

  const handleClick = () => {
    setApplied(!isApplied);
  };

  const buttonText = isApplied ? "Applied!" : "Apply";
  const buttonClass = isApplied ? "is-applied" : "";

  return (
    <article
      className="job-listing-card"
      data-technology={data?.technology}
      data-location={data?.location}
      data-level={data?.level}
    >
      <div>
        <h3>{title}</h3>
        <small>
          {company} | {location}
        </small>
        <p>{description}</p>
      </div>
      <button
        className={`button-apply-job ${buttonClass}`}
        onClick={handleClick}
        disabled={isApplied}
      >
        {buttonText}
      </button>
    </article>
  );
};

export default JobCard;
