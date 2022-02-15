import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpErrorResponse,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { tap } from 'rxjs/internal/operators/tap';

@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {
  constructor(
    private router: Router,
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(tap({error: (err: any) => {
      if (err instanceof HttpErrorResponse) {
        switch (err.status) {
          case 401:
            localStorage.setItem('temp_url', localStorage.getItem('url') || '/')
            localStorage.removeItem('token');
            this.router.navigate(['/login']);
            break;
          case 402:
            localStorage.setItem('temp_url', localStorage.getItem('url') || '/')
            localStorage.removeItem('token');
            this.router.navigate(['/login']);
            break;
          default:
            // this.router.navigate(['info/error']);
            return;
        }
        
      }
    }}));
  }
}


