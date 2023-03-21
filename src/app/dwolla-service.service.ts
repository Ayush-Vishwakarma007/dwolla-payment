import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DwollaServiceService {
  private readonly baseUrl = 'https://api-sandbox.dwolla.com';
  DWOLLA_ACCESS_TOKEN = 'jEXrLaaM3FbZZutmzW6bq14QyBF9o1Ssssx9XbKb9eNAmFMThX'
  constructor(private http : HttpClient) {}

  private getHeaders(){
    return new HttpHeaders({
      'Content-Type' : 'application/json',
      Authorization : `Bearer ${this.DWOLLA_ACCESS_TOKEN}`
    });
  }

  createCustomer():Observable<any>{
    const body = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      type: 'personal',
    }
    const url = `${this.baseUrl}/api/customer`;
    const headers = this.getHeaders();
    return this.http.post<any>(url, body, { headers });
  }

  createTransfer():Observable<any>{
    const body = {
      _links : {
        source : {
          href : 'https://api-sandbox.dwolla.com/funding-sources/source-id',
        }
      },
      destination : {
        href : 'https://api-sandbox.dwolla.com/customers/customer-id',
      },
      amount : {
        currency : 'USD',
        amount : '10.00'
      },
    };
    const url = `${this.baseUrl}/api/transfers`;
    const headers = this.getHeaders();
    return this.http.post<any>(url, body, { headers });
  }
}
