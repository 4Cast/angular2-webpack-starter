import {Component} from 'angular2/core';
import {Hero} from './hero';

@Component({
  selector: 'my-hero-detail',
  template: `
    
      <h2>Chris details!</h2>
      <div><label>id: </label>3</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name"/>
      </div>

  `
})
export class HeroDetailComponent {
  hero: Hero;

}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
