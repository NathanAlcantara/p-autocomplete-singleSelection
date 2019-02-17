import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) {}

  public getCountries() {
    return this.http.get<any>('assets/data/countries.json')
      .toPromise()
      .then(res => <any[]>res.data)
      .then(data => data);
    }
}
