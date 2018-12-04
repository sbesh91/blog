import { LitElement, html } from '@polymer/lit-element/lit-element';

const routes = [
  { label: 'Home', url: '/', file: './pages/home' },
  { label: 'About', url: '/about', file: './pages/about' }
];

// Create your custom component
class AppShell extends LitElement {
  // Initialize properties
  constructor() {
    super();
  }

  load(event, route) {
    event.preventDefault();
    console.log(event, route);
    
    import(route.file);
  }


  renderLink(route) {
    return html`
    <a @click="${(e) => this.load(e, route)}" href="${route.url}">
      ${route.label}
    </a>`;
  }

  // Define a template
  render() {
    return html`
    <style>
      :host {
        display: block;
      }
    </style>
    <div>
      ${routes.map(i => this.renderLink(i))}
    </div>`;
  }
}
// Register the element with the browser
customElements.define('app-shell', AppShell);