// JSCamp InfoJobs Bootcamp @jdomingu19
// Full-Stack Web Bootcamp @midudev
// Module 3: JavaScript: DevJobs Avatar Element

/**
 * Custom Web Component that renders a user avatar.
 * @class DevJobsAvatar
 * @extends HTMLElement
 * @description
 * - Accepts attributes (service, username, size) to generate avatar URL.
 * - Attaches a shadow DOM to encapsulate styles and markup.
 * - Renders a circular avatar image using unavatar.io.
 * - Automatically renders when connected to the DOM.
 */
class DevJobsAvatar extends HTMLElement {
  constructor() {
    super();
    // Attach shadow DOM in open mode to allow inspection and styling
    this.attachShadow({ mode: "open" });
  }

  /**
   * Build the avatar URL based on service and username.
   * @param {string} service - The avatar provider (e.g., github, x, google).
   * @param {string} username - The username or domain for the avatar.
   * @returns {string} - The complete URL to fetch the avatar image.
   */
  createUrl(service, username) {
    return `https://unavatar.io/${service}/${username}`;
  }

  /**
   * Render the avatar element inside the shadow DOM.
   * - Reads attributes (service, username, size).
   * - Applies scoped CSS for size and rounded shape.
   * - Displays an image sourced from unavatar.io.
   */
  render() {
    const service = this.getAttribute("service") ?? "github";
    const username = this.getAttribute("username") ?? "jdomingu19";
    const size = this.getAttribute("size") ?? "40";
    const url = this.createUrl(service, username);

    this.shadowRoot.innerHTML = `
    <style>
      img {
        width: ${size}px;
        height: ${size}px;
        border-radius: 9999px;
      }
    </style>
    <img
      src="${url}"
      alt="${username}'s avatar"
      class="avatar"
    />`;
  }

  /**
   * Lifecycle method called when the element is added to the DOM.
   * - Ensures the avatar is rendered immediately.
   */
  connectedCallback() {
    this.render();
  }
}

// Define the custom element so it can be used as <devjobs-avatar>
customElements.define("devjobs-avatar", DevJobsAvatar);
