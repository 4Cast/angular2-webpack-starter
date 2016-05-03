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

var angular2_1 = require("@angular/angular2");
var http_1 = require("@angular/http");

var FourcastService = (function () {
    function FourcastService(http) {
        this.http = http;
    }
    FourcastService.prototype.query = function (URL, id, params) {
        var queryURL = "" + FourcastService.BASE_URL + URL;
        if (id) {
            queryURL = queryURL + "(" + id + ")";
        }
        if (params) {
            queryURL = queryURL + "?" + params.join("/");
        }
    };
    FourcastService.prototype.updateProject = function (project) {
        var projectString = JSON.stringify(project);
        var updateURL = 'http://127.0.0.1/rest/project/?$method=update';
    };
    FourcastService.prototype.updateUser = function (user) {
        var userString = JSON.stringify(user);
        var updateURL = 'http://127.0.0.1/rest/User/?$method=update';
    };
    FourcastService.prototype.search = function (dataClass, id) {
        if (id) {
            return this.query(dataClass, id);
        }
        else {
            return this.query(dataClass);
        }
    };
    FourcastService.prototype.searchTrack = function (dataClass) {
        return this.query(dataClass);
    };
    FourcastService.prototype.getTrack = function (id) {
        return this.query("project", id);
    };
    FourcastService.prototype.getProject = function (id) {
    };
    FourcastService.prototype.getUser = function (id) {
    };
    FourcastService.prototype.getAlbum = function (id) {
    };
    FourcastService.BASE_URL = "http://127.0.0.1/rest/";
    FourcastService = __decorate([
        angular2_1.Injectable(),
        __metadata('design:paramtypes', [http_1.Http])
    ], FourcastService);
    return FourcastService;
})();
exports.FourcastService = FourcastService;
exports.fourcast_PROVIDERS = [
    angular2_1.provide(FourcastService, { useClass: FourcastService })
];
