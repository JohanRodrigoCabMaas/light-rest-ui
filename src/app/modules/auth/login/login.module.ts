import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InputComponent } from 'app/input/input.component';

const routes: Routes = [
	{
		path: '',
		component: LoginPageComponent
	}
];

@NgModule({
	declarations: [LoginPageComponent, InputComponent],
	imports: [CommonModule, RouterModule.forChild(routes), FormsModule, ReactiveFormsModule, HttpClientModule]
})
export class LoginModule {}
