// JSCamp InfoJobs Bootcamp @jdomingu19
// Full-Stack Web Bootcamp @midudev
// Module 4: React: src/pages/NotFound.jsx

import styles from "./NotFound.module.css";

export function NotFoundPage() {
  return (
    <main className={styles.notFound}>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for does not exist...</p>
      <a href="./">Return to Home</a>
    </main>
  );
}
