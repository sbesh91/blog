import { LitElement, html } from '@polymer/lit-element/lit-element';
import { installRouter } from 'pwa-helpers/router';
import { routes, navigate} from './app';
// Create your custom component
class AppShell extends LitElement {
  // Initialize properties
  constructor() {
    super();
    
    installRouter((location) => this.viewChange(location));
  }

  viewChange() { 
    // const view = this.shadowRoot.querySelector(`home-page`); // before

    // const duration = 250;
    // const baseFrame = { 'transform': 'none', 'opacity': 1 };
    // const modFrame = { 'transform': 'translate(0px,-50px)', 'opacity': 0 };
    // const animationTimingConfig = {
    //   fill: 'forwards',
    //   easing: "cubic-bezier(0.4, 0.0, 0.2, 1)",
    //   duration: duration
    // };

    // let effect = new KeyframeEffect(view, [baseFrame, modFrame], animationTimingConfig);
    // let inAnim = new Animation(effect, document.timeline);

    // if (view) {
    //   console.log('start');
    //   inAnim.play();
    //   console.log('end');
    // }
    
    return navigate(window.decodeURIComponent(location.pathname));
  }

  renderLink(route) {
    return html`
    <a href="${route.url}">
      ${route.label}
    </a>`;
  }
  
  render() {
    return html`
    <style>
      :host {
        display: grid;
      }
    </style>
    <nav>
      ${routes.map(i => this.renderLink(i))}
    </nav>
    <main>
      <home-page></home-page>
      <about-page></about-page>
      <not-found></not-found>
    </main>
    `;
  }
}
// Register the element with the browser
customElements.define('app-shell', AppShell);