import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { environment } from '../../../environment';

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  getAddresses(): Observable<any> {
    const userId = this.authService.getUser()?.id;

    return this.http.get(`${environment.apiUrl}/Endereco/usuario/${userId}`);
  }

  addAddress(newAddress: any): Observable<any> {
    const userId = this.authService.getUser()?.id;
    newAddress = { ...newAddress, userId: userId };
    return this.http.post(`${environment.apiUrl}/Endereco`, newAddress);
  }

  deleteAddress(id: any) {
    return this.http.delete(`${environment.apiUrl}/Endereco/${id}`);
  }
}
