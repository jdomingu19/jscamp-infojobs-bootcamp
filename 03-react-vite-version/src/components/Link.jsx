// JSCamp InfoJobs Bootcamp @jdomingu19
// Full-Stack Web Bootcamp @midudev
// Module 4: React: src/components/Link.jsx

import { useRouter } from "../hooks/useRouter";

export function Link({ href, children, ...props }) {
  const { navigateTo } = useRouter();

  const handleClick = (event) => {
    event.preventDefault();
    navigateTo(href);
  };

  return (
    <a href={href} {...props} onClick={handleClick}>
      {children}
    </a>
  );
}
