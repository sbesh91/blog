import { LitElement, html } from '@polymer/lit-element/lit-element';

// Create your custom component
class HomePage extends LitElement {
  // Initialize properties
  constructor() {
    super();
  }

  // Define a template
  render() {
    return html`<p>home page</p>`;
  }
}
// Register the element with the browser
customElements.define('home-page', HomePage);