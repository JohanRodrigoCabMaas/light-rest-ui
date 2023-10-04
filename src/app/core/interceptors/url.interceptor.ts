import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Injectable, Provider } from '@angular/core';
import { environment } from '@app-environments/environment';

@Injectable()
export class UrlInterceptor implements HttpInterceptor {
	intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		let requestUrl = req.url;
		const apiTag = req.url.split('/').shift() ?? '';
		const apiUrl = environment[apiTag];

		if (apiUrl) {
			requestUrl = requestUrl.replace(apiTag, apiUrl);
			return next.handle(req.clone({ url: requestUrl }));
		}

		return next.handle(req.clone({ url: req.url }));
	}
}

export const apiUrlInterceptorProvider: Provider = {
	provide: HTTP_INTERCEPTORS,
	useClass: UrlInterceptor,
	multi: true
};
