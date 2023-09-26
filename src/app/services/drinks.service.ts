import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// interfaces
import { Data } from '../interfaces/coctails';

@Injectable({
  providedIn: 'root'
})
export class DrinksService {
  private hostURL = "https://the-cocktail-db.p.rapidapi.com";
  // API-key generated per user in API - link available in README
  private httpHeaders = {
    'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com',
    'X-RapidAPI-Key': '52ef9f38demshdaf0d8f9b80719fp113d23jsn4b8b54eed42d'
  };
  /* endpoints
  search allows to search using drink name
  random gets you 10 random drinks each time - used in home component
  lookup returns details data of chosen coctail using it's ID
  */
  search = "/search.php";
  random = "/randomselection.php";
  lookup = "/lookup.php";

  constructor(private http: HttpClient) { }

  // used everytime when you wanna see details of coctail
  getCoctailById(id: string): Observable<Data> {
    const httpOptions = {
      headers: new HttpHeaders(this.httpHeaders),
      params: new HttpParams().set('i', id)
    };

    return this.http.get<Data>(this.hostURL + this.lookup, httpOptions);
  }

  serachByCoctailName(name: string): Observable<Data> {
    const httpOptions = {
      headers: new HttpHeaders(this.httpHeaders),
      params: new HttpParams().set('s', name)
    };

    return this.http.get<Data>(this.hostURL + this.search, httpOptions);
  }

  getRandomCoctail(): Observable<Data> {
    const httpOptions = {
      headers: new HttpHeaders(this.httpHeaders)
    };

    return this.http.get<Data>(this.hostURL + this.random, httpOptions);
  }


}
