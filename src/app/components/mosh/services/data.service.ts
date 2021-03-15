import { Inject, Injectable } from "@angular/core";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";
import { NotFoundError } from "./not-found-error";
import { BadInput } from "./bad-input";
import { AppError } from "./app-error";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class DataService {
  constructor(
    @Inject('url') private url: string,
    private http: HttpClient
  ) { }

  getAll(@Inject('id') id?: string) {
    if (!id) {
      return this.http
        .get(this.url)
        .pipe(catchError(this.handleError));
    }

    if (id) {
      let url;
      url = `${this.url}/${id}`
      return this.http
        .get(url)
        .pipe(catchError(this.handleError));
    };

  }

  create(resource) {
    return this.http
      .post(this.url, resource)
      .pipe(catchError(this.handleError));
  }

  update(resource, body) {
    return this.http
      .patch(`${this.url}/${resource.id}`, body)
      .pipe(catchError(this.handleError))
  }

  delete(resource) {
    return this.http
      .delete(`${this.url}/${resource.id}`)
      .pipe(catchError(this.handleError))
  }

  private handleError(error: Response) {
    if (error.status === 400)
      return throwError(new BadInput(error));

    if (error.status === 404)
      return throwError(new NotFoundError());

    return throwError(new AppError(error));
  }
}
