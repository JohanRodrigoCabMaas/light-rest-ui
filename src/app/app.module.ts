import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { AngularSvgIconModule, provideAngularSvgIcon } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';
import { apiUrlInterceptorProvider } from '@app-core/interceptors/url.interceptor';
import { ReactiveFormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from '@app-core/guards/auth.guard';
const routes: Routes = [
	{
		path: '',
		redirectTo: '/login',
		pathMatch: 'full'
	},
	{
		path: '',
		canActivate: [AuthGuard],
		loadChildren: () => import('@app-layout/main-layout/main-layout.module').then((m) => m.MainLayoutModule)
	},
	{
		path: 'login',
		loadChildren: () => import('@app-modules/auth/login/login.module').then((m) => m.LoginModule)
	},
	{
		path: 'register',
		loadChildren: () => import('@app-modules/auth/login/register.module').then((m) => m.RegisterModule)
	}
];

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		RouterModule.forRoot(routes),
		HttpClientModule,
		AngularSvgIconModule.forRoot(),
		ReactiveFormsModule,
		NgChartsModule,
		BrowserAnimationsModule
	],
	providers: [provideAngularSvgIcon(), apiUrlInterceptorProvider],
	bootstrap: [AppComponent]
})
export class AppModule {}
