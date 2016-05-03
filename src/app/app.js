"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var core_1 = require('@angular/core');
var router_1 = require('@angular/router-deprecated');
var common_1 = require('@angular/common');

var router_active_1 = require('./directives/router-active');
var about_1 = require('./about');
var home_1 = require('./home/home');
var projectsMain_1 = require('./components/project/projectsMain');
var subcontracts_1 = require('./components/subcontracts/subcontracts');
var subcontractsMain_1 = require('./components/subcontracts/subcontractsMain');
var APP_STYLES = require('./app.css');
var APP_TEMPLATE = require('./app.html');
var App = (function () {
    function App() {
        this.url = 'https://twitter.com/AngularClass';
        this.name = 'Angular 2 Webpack Starter';
    }
    App = __decorate([
        core_1.Component({
            selector: 'app',
            providers: common_1.FORM_PROVIDERS.slice(),
            directives: router_1.ROUTER_DIRECTIVES.concat([router_active_1.RouterActive]),
            pipes: [],
            styles: [APP_STYLES],
            template: APP_TEMPLATE
        }),
        router_1.RouteConfig([
            { path: '/', redirectTo: ['Subcontracts'] },
            { path: '/home', component: home_1.Home, name: 'Home' },
            { path: '/about', component: about_1.About, name: 'About' },
            { path: '/projects/...', component: projectsMain_1.ProjectsMain, name: 'Projects' },
            { path: '/subcontracts', component: subcontracts_1.subcontracts, name: "Subcontracts" },
            { path: '/subcontract/:id/...', component: subcontractsMain_1.SubcontractMain, name: 'SubcontractMain' }
        ]),
        __metadata('design:paramtypes', [])
    ], App);
    return App;
})();
exports.App = App;
//# sourceMappingURL=app.js.map
