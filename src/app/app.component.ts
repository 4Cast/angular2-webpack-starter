/*
 * Angular 2 decorators and services
 */
import {Component, ViewEncapsulation} from '@angular/core';
import {RouteConfig, Router} from '@angular/router-deprecated';

import {Home} from './home';
import {AppState} from './app.service';
import {RouterActive} from './router-active';
import {projects} from './components/project/projects';
import {SimpleComponent} from './components/simple.component/simple.component';
import {MainMenu} from './components/main-menu/main-menu';
import {Angular2Accordion} from './components/main-menu/main-menu-a';
/*
 * App Component
 * Top Level Component
 */

const APP_STYLES = require('./app.css');
const APP_TEMPLATE = require('./app.html');

@Component({
  selector: 'app',
  pipes: [ ],
  providers: [ ],
  directives: [ RouterActive, MainMenu, Angular2Accordion ],
  encapsulation: ViewEncapsulation.None,
  styles: [APP_STYLES],
  template: APP_TEMPLATE
})
@RouteConfig([
  { path: '/',            redirectTo: ['Projects'] },
//  { path: '/',      name: 'Index', component: Home, useAsDefault: true },
  { path: '/home',  name: 'Home',  component: Home },
  // Async load a component using Webpack's require with es6-promise-loader and webpack `require`
  { path: '/about', name: 'About', loader: () => require('es6-promise!./about')('About') },
  { path: '/projects/...', component: projects, name: 'Projects' },
  { path: '/simple', name: 'Simple', component: SimpleComponent}
])
export class App {
  angularclassLogo = 'assets/img/angularclass-avatar.png';
  loading = false;
  name = 'Angular 2 Webpack Starter';
  url = 'https://twitter.com/AngularClass';

  constructor(
    public appState: AppState) {

  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
