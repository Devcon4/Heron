import { LitElement, css, html, customElement } from 'lit-element';
import { globalStyles, flexHostStyles } from '../services/globalStyles';

@customElement('bn-heroes')
export default class HeroesComponent extends LitElement {
  render() {
    return html`<div class="heroes bn-flex"></div>`;
  }

  static get styles() {
    return [globalStyles, flexHostStyles, css``];
  }
}
