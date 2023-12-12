import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarUserComponent } from '../avatar-user/avatar-user.component';
import { SvgIconComponent } from 'angular-svg-icon';
import { AuthService } from '@app-core/services/auth/auth.service';

@Component({
	selector: 'app-header-toolbar',
	standalone: true,
	imports: [CommonModule, AvatarUserComponent, SvgIconComponent],
	templateUrl: './header-toolbar.component.html',
	styleUrls: ['./header-toolbar.component.scss']
})
export class HeaderToolbarComponent implements OnInit {
	@Input() title: string = 'Default Title';
	username: string;
	tipoUsuario: string;

	constructor(private authService: AuthService) {}

	ngOnInit(): void {
		if (this.authService.isLoggedIn()) {
			this.username = this.authService.getEmail();
			this.tipoUsuario = this.authService.gettipo();
		}
	}
}
