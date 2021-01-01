export default customElements.define(
  "scoped-style",
  class extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      const scope = this.getAttribute("scope");
      const style = this.querySelector("style");

      // Scope styles
      style.textContent = this.textContent
        .replace(/([^{]+?)({[^{]+?})/g, (match, $1, $2) => {
          const scopedSelector = $1
            .split(",")
            .map((selector) => `${scope} ${selector}`)
            .join(",");
          return `${scopedSelector} ${$2}`;
        })
        .replace(new RegExp(`${scope}\\s+?:root`, "g"), scope);
      
      // Remove media="not all" 
      if (style.getAttribute("media") === "not all") {
        style.setAttribute(
          "media",
          style.hasAttribute("data-media")
            ? style.getAttribute("data-media")
            : ""
        );
      }
    }
  }
);
