

import {
  Component,
  View,
  provide
} from "angular2/core";

import {bootstrap} from "angular2/platform/browser";

import{
  RouterLink
} from "angular2/router"


@Component({
selector: "nav-bar",
directives: [RouterLink],
template:`

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
       <a class="navbar-brand" href="#">4Cast</a>
     </div>
     <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
     <ul class="nav navbar-nav">
       <!--<li class="active"><a [router-link]="['../home']">Home <span class="sr-only">(current)</span></a></li>-->
       <!--<li><a [router-link]="['/projects']">Projects</a></li>-->


     </ul>


   </div><!-- /.navbar-collapse -->
 </div><!-- /.container-fluid -->
</nav>
`

})

export class navBar{

}
