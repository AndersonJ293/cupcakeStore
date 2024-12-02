import { Injectable } from '@angular/core';
import { PaymentMethod } from '../enuns/payment-method.enum';
import { environment } from '../../../environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  getOrders(): Observable<any[]> {
    const id = this.authService.getUser()?.id;
    return this.http.get<any[]>(`${environment.apiUrl}/pedido/usuario/${id}`);
  }
}
