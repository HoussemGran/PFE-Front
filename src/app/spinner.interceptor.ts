import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { SpinnerOverlayService } from './Services/spinner/spinner-overlay.service';

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {

  constructor(private spinnerOverlayService : SpinnerOverlayService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const spinnerSubscription : Subscription = this.spinnerOverlayService.spinner$.subscribe();

    return next.handle(request).pipe(finalize(() => spinnerSubscription.unsubscribe()));
  }
}
