import {Component} from 'angular2/core';
import {NgForm, NgIf}    from 'angular2/common';
import { Hero }    from './hero';

const TEMPLATE = require('./hero-form.component.html');

@Component({
  selector: 'hero-form',
  template: TEMPLATE
})
export class HeroFormComponent {
  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;
  onSubmit() { this.submitted = true; }
  
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  active = true;


  newHero() {
  this.model = new Hero(42, '', '');
  this.active = false;
  setTimeout(()=> this.active=true, 0);
}
}
