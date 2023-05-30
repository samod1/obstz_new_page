import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VariabileSymbol } from '../models/variabile.interface';
import { Observable } from "rxjs";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QrService {

  constructor(private http: HttpClient) { }

  GetVariabileSymbol(identifiers: VariabileSymbol): Observable<VariabileSymbol>
  {


    let headers = new HttpHeaders();
          headers.append('Content-Type','application/xml');
          headers.append('Accept', '*/*');
          headers.set('Contenty-Type','application/xml');

    const body = new XMLHttpRequest();

    
    return this.http.post<VariabileSymbol>(environment.url+'/generateQR',body,{headers});

  }

}


