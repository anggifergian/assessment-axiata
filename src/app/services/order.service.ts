import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class OrderService {

  constructor(private http: HttpClient) {
  }

  getOrders() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders();
    const newHeaders = headers.append('Authorization', 'Bearer ' + token);

    return this.http.get('/api/orders', {
      headers: newHeaders
    });
  }
}
