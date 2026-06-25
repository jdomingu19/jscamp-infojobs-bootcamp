// JSCamp InfoJobs Bootcamp @jdomingu19
// Full-Stack Web Bootcamp @midudev
// Module 4: React: src/components/Route.jsx

import { useRouter } from "../hooks/useRouter";

export function Route({ path, componet: Component }) {
  const { currentPath } = useRouter();

  if (currentPath !== path) return null;

  return <Component />;
}
