import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuListComponent } from '../menu-list/menu-list.component';

@Component({
	selector: 'app-sidenav',
	standalone: true,
	imports: [CommonModule, MenuListComponent],
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {}
