import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ErrorHandlerService {
  // From Reactive Extensions (rxjs)
  private subject = new Subject<string[]>();

  handleError(error: any) {
    setTimeout(() => {
      if (error instanceof ValidationError) {
        this.subject.next(error.errors);
      } else if (error instanceof Error) {
        this.subject.next([error.message]);
      } else {
        this.subject.next(["An error has occurred"]);
      }
    });
  }

  get errors(): Observable<string[]> {
    return this.subject;
  }
}

export class ValidationError implements Error {
  name: string;
  message: string;

  constructor(public errors: string[]) {}
}
