// JSCamp InfoJobs Bootcamp @jdomingu19
// Full-Stack Web Bootcamp @midudev
// Module 3: JavaScript: DevJobs Avatar Element

/**
 * Custom Web Component that renders a user avatar.
 * @class DevJobsAvatar
 * @extends HTMLElement
 * @description
 * - Attaches a shadow DOM to encapsulate styles and markup.
 * - Renders a circular avatar image using unavatar.io.
 * - Automatically renders when connected to the DOM.
 */
class DevJobsAvatar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  /**
   * Render the avatar element inside the shadow DOM.
   * - Includes scoped CSS for size and rounded shape.
   * - Displays an image sourced from unavatar.io.
   */
  render() {
    this.shadowRoot.innerHTML = `
    <style>
      img {
        width: 40px;
        height: 40px;
        border-radius: 9999px;
      }
    </style>
    <img
      src="https://unavatar.io/github/jdomingu19"
      alt="jdomingu19's avatar"
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
