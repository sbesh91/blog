import { LitElement, html } from '@polymer/lit-element/lit-element';

// Create your custom component
class HomePage extends LitElement {
  // Initialize properties
  constructor() {
    super();
  }

  // Define a template
  render() {
    return html`
    <style>
      :host {
        width: 100%;
      }
      div {
        height: 2rem;
        width: 2rem;
        background: black;
        position: absolute;
        left: 3rem;
        top: 10rem;
      }
    </style>
    <div></div>
    <p>
      home page
    </p>`;
  }
}
// Register the element with the browser
customElements.define('home-page', HomePage);