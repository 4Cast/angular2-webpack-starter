import {Component, View, Directive, ElementRef} from 'angular2/angular2';
import {RouteConfig} from 'angular2/router';

/*
 * Directives
 */
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';
import {ROUTER_DIRECTIVES} from 'angular2/router';
// Import all of our custom app directives
import {APP_DIRECTIVES} from './directives/directives';

/*
 * App Pipes
 * our collection of pipes registry
 */
import {APP_PIPES} from './pipes/pipes';

/*
 * Components
 */
// We use a folder if we want separate files
import {Home} from './components/home/home';
// Otherwise we only use one file for a component
import {Dashboard} from './components/dashboard';

import {ProjectsMain} from './components/projects/projectsMain';
// A simple example of a Component using a Service
//import {Todo} from '../../simple-todo/components/todo';

// RxJs examples
import {RxJsExamples} from '../../examples/large-app/components/rxjs_examples/rxjs-examples';

// Use webpack's `require` to get files as a raw string using raw-loader
const APP_STYLES = require('../public/css/bootstrap@3.3.5.min.css');


/*
 * Directive
 * XLarge is a simple directive to show how one is made
 */
@Directive({
  selector: '[x-large]' // using [ ] means selecting attributes
})
export class XLarge {
  constructor(element: ElementRef) {
    // simple DOM manipulation to set font size to x-large
    // `nativeElement` is the direct reference to the DOM element
    element.nativeElement.style.fontSize = 'x-large';
  }
}


/*
 * App Component
 * Top Level Component
 * Simple router component example
 */
@Component({
  selector: 'app', // without [ ] means we are selecting the tag directly
  viewBindings: []
})
@View({
  pipes:      [ APP_PIPES ],
  directives: [ APP_DIRECTIVES ],
  styles:     [ APP_STYLES ],
  template: `
  <nav class="navbar navbar-default">
     <div class="container-fluid">
       <!-- Brand and toggle get grouped for better mobile display -->
     <div class="navbar-header">
         <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
           <span class="sr-only">Toggle navigation</span>
           <span class="icon-bar"></span>
           <span class="icon-bar"></span>
           <span class="icon-bar"></span>
         </button>
         <a class="navbar-brand" href="#" style="padding-top:0px;"><img src="4Cast_Logo.png" alt="Angular2" height="50" width="78"></a>
       </div>
       <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
       <ul class="nav navbar-nav">
         <li class="active"><a [router-link]=" ['/Home'] " >Home <span class="sr-only">(current)</span></a></li>
         <li><a [router-link]=" ['/Dashboard'] " >Dashboard</a></li>
      <li><a [router-link]=" ['/RxJsExamples'] " >Projects</a></li>

       </ul>


     </div><!-- /.navbar-collapse -->
   </div><!-- /.container-fluid -->
  </nav>


    <main>
      <router-outlet></router-outlet>
    </main>

    <footer>
      WebPack Angular 2 Starter by <a href="https://twitter.com/AngularClass">@AngularClass</a>
    </footer>
  `
})
@RouteConfig([
  { path: '/',                  as: 'Home',          component: Home },
  { path: '/dashboard',         as: 'Dashboard',     component: Dashboard },
  //{ path: '/projects/...', as: 'Projects', component: ProjectsMain}
//  { path: '/todo',              as: 'Todo',          component: Todo },
  { path: '/rxjs-examples/...', as: 'RxjsExamples', component: RxJsExamples }
])
export class App {
  name: string;
  constructor() {
    this.name = 'angular'; // used in logo
  }
}
