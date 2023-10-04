import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { AngularSvgIconModule, provideAngularSvgIcon } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';
import { apiUrlInterceptorProvider } from '@app-core/interceptors/url.interceptor';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
	{
		path: '',
		loadChildren: () => import('@app-layout/main-layout/main-layout.module').then((m) => m.MainLayoutModule)
	},
	{
		path: 'login',
		loadChildren: () => import('@app-modules/auth/login/login.module').then((m) => m.LoginModule)
	}
];

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		RouterModule.forRoot(routes),
		HttpClientModule,
		AngularSvgIconModule.forRoot(),
		ReactiveFormsModule
	],
	providers: [provideAngularSvgIcon(), apiUrlInterceptorProvider],
	bootstrap: [AppComponent]
})
export class AppModule {}
