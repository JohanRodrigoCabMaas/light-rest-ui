import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
	selector: 'app-main-layout',
	templateUrl: './main-layout.component.html',
	styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
	title: string = 'Dashboard'; // this is the first route this was take from data in the routes lazy loaded.

	constructor(private readonly _router: Router, private readonly _route: ActivatedRoute) {}

	ngOnInit(): void {
		this._router.events
			.pipe(
				filter((event) => event instanceof NavigationEnd),
				map(() => this._route.snapshot.firstChild)
			)
			.subscribe((route: ActivatedRouteSnapshot | null) => {
				this.title = route?.data['title'];
			});
	}
}
