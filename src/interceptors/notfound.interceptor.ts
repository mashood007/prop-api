import { Injectable, NestInterceptor, ExecutionContext, NotFoundException, CallHandler } from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class NotFoundInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError(() => {
        return throwError(new NotFoundException('Resource not found'));
      }),
    );
  }
}
