import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarUserComponent } from '../avatar-user/avatar-user.component';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
	selector: 'app-header-toolbar',
	standalone: true,
	imports: [CommonModule, AvatarUserComponent, SvgIconComponent],
	templateUrl: './header-toolbar.component.html',
	styleUrls: ['./header-toolbar.component.scss']
})
export class HeaderToolbarComponent {
	@Input() title: string = 'Default Title';
}
