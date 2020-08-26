import {
  LitElement,
  css,
  html,
  customElement,
  internalProperty,
  query,
  PropertyValues,
} from 'lit-element';
import { globalStyles, flexHostStyles } from './services/globalStyles';
import { RouterSlot, IRoute, queryParentRouterSlot } from 'router-slot';
import getThemeManager from './services/theme';
import { map } from 'rxjs/operators';

const routes: Array<IRoute> = [
  {
    path: 'heroes',
    component: () => import('./components/heroes.component'),
  },
  {
    path: '**',
    redirectTo: 'heroes',
    pathMatch: 'full',
  },
];

const themeManager = getThemeManager();

@customElement('bn-app')
export default class Main extends LitElement {
  @query('router-slot') $routerSlotRef!: RouterSlot;

  @internalProperty()
  prefersDarkStyles: 'dark-theme' | '' = '';

  get data() {
    return queryParentRouterSlot(this);
  }

  firstUpdated(props: PropertyValues) {
    super.firstUpdated(props);
    this.$routerSlotRef.add(routes);

    themeManager.currentThemeObs
      .pipe(map((theme) => (theme == 'dark' ? 'dark-theme' : '')))
      .subscribe((val) => (this.prefersDarkStyles = val));
  }

  render() {
    return html`<div class="app bh-flex ${this.prefersDarkStyles}">
      <router-slot class="bn-flex"></router-slot>
    </div>`;
  }

  static get styles() {
    return [globalStyles, flexHostStyles, css``];
  }
}
