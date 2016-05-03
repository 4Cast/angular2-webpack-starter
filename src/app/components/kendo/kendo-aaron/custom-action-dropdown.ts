
import {Component, OnInit, View} from '@angular/core'


/**
 * Example of a templated grid column with access to Component event functions
 **/
@Component({
    selector: 'action-bar'
})
@View({
    /**
     * Templated dropown with click events tied to Component functions
     */
    template: `
      <div class="dropdown">
        <button class="btn btn-default dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="true">
            <i class="fa fa-cog"></i>
          <span class="caret"></span>
        </button>
        <ul class="dropdown-menu dropdown-menu-right"
            aria-labelledby="dropdownMenu1">
          <li class="dropdown-header">Customer Actions</li>
          <li>
            <a href="#"
               (click)="contactCustomer($event)">
                <i class="fa fa-user"></i> Contact
            </a>
          </li>
          <li>
            <a href="#"
                (click)="editCustomer($event)">
                  <i class="fa fa-pencil"></i> Edit
            </a>
          </li>
          <li role="separator" class="divider"></li>
          <li>
              <a href="#"
                 (click)="removeCustomer($event)">
                    <i class="fa fa-times"></i> Remove
              </a>
            </li>
        </ul>
      </div>
   `
})
export class CustomActionDropdown implements OnInit {

    public uid:string;

    constructor() {
      //
    }

    // receives and stores the grid row's unique id (uid) for later use
    setUid(uid) {
        this.uid = uid;
    }

    ngOnInit() {
      //
    }

    /**
     * Contact Customer
     * Event triggered by the button in the grid's template column
     */
    contactCustomer(e) {
        console.log('Contact Customer UID:', this.uid);
        jQuery('#log').html(`<i class="fa fa-user"></i> Contact Customer UID: ${this.uid} </br/>` + jQuery('#log').html());
    }

    /**
     * Edit Customer
     */
    editCustomer(e) {
        console.log('Edit Customer UID:', this.uid);
        jQuery('#log').html(`<i class="fa fa-pencil"></i> Edit Customer UID: ${this.uid} </br/>` + jQuery('#log').html());
    }

    /**
     * Remove Customer
     */
    removeCustomer(e) {
        console.log('Remove Customer UID:', this.uid);
        jQuery('#log').html(`<i class="fa fa-times"></i> Remove Customer UID: ${this.uid} </br/>` + jQuery('#log').html());
    }

}
