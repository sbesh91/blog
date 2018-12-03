import { LitElement, html } from '@polymer/lit-element';

const pages = {
  about: import('./pages/about'),
  home: import('./pages/home')
};

const renderPage = async (name) => {
  // Lazily load the requested page.
  const page = await pages[name];
}

// Create your custom component
class AppShell extends LitElement {
  // Initialize properties
  constructor() {
    super();
  }

  // Define a template
  render() {
    return html`<p>Hello World!</p>`;
  }
}
// Register the element with the browser
customElements.define('app-shell', AppShell);