import { Injectable } from "@angular/core";
import { Http } from "@angular/http";


@Injectable()
export class PageServices {

	constructor(public http: Http) {}
	getPage(): any {
		return this.http.get("./assets/data/pages.json");
	}
}
