import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
	{
		path: '',
		component: RegisterComponent
	}
];

@NgModule({
	declarations: [RegisterComponent],
	imports: [CommonModule, RouterModule.forChild(routes), FormsModule, ReactiveFormsModule, HttpClientModule]
})
export class RegisterModule {}
