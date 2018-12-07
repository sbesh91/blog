import { LitElement, html } from '@polymer/lit-element/lit-element';

// Create your custom component
class AboutPage extends LitElement {
  // Initialize properties
  constructor() {
    super();
  }

  // Define a template
  render() {
    return html`<p>about page</p>`;
  }
}
// Register the element with the browser
customElements.define('about-page', AboutPage);