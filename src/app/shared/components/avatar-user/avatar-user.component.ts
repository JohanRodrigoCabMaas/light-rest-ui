import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-avatar-user',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './avatar-user.component.html',
	styleUrls: ['./avatar-user.component.scss']
})
export class AvatarUserComponent {
	@Input() name: string = '';
	@Input() position: string = '';
}
