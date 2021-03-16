import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of, throwError } from "rxjs";
import { delay } from "rxjs/operators";

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return this.handleRequests(req, next);
    }

    handleRequests(req: HttpRequest<any>, next: HttpHandler) {
        const { url, method, body, headers } = req;
        let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik1vc2ggSGFtZWRhbmkiLCJhZG1pbiI6dHJ1ZX0.iy8az1ZDe-_hS8GLDKsQKgPHvWpHl0zkQBqy1QIPOkA';

        if (url.endsWith('/api/authenticate') && method === 'POST') {
            if (body.email === 'mosh@domain.com' && body.password === '1234') {
                return of(new HttpResponse({
                    status: 200,
                    body: { token }
                })).pipe(delay(1000));
            } else {
                return throwError(new HttpResponse({
                    status: 404,
                    body: { message: 'Email or password is incorrect' }
                }));
            }
        }

        if (url.endsWith('/api/orders') && method === 'GET') {
            console.log('Fake BE:', headers);
            if (headers.get('Authorization') === 'Bearer ' + token) {
                return of(new HttpResponse({
                    status: 200,
                    body: [1, 2, 3]
                })).pipe(delay(1000));
            } else {
                return throwError(new HttpResponse({
                    status: 401,
                }));
            }
        }

        return next.handle(req);
    }
}

export let fakeBackendProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
}