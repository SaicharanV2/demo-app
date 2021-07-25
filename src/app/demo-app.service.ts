import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
const API = 'https://conduit.productionready.io/api';

@Injectable({
  providedIn: 'root'
})
export class DemoAppService {
  constructor(private http: HttpClient) { }

  //get all articles
  getAllArticles() {
    return this.http.get(API + '/articles').pipe(mergeMap(res => {
      return of(res);
    }));
  }


  //get specific article
  getArticle(slug: string) {
    return this.http.get(API + '/articles/' + slug).pipe(mergeMap(res => {
      return of(res);
    }));
  }

  //get specific article
  getUserLocation() {
    const url = 'https://freegeoip.app/json/';
    return this.http.get(url).pipe(mergeMap(res => {
      return of(res);
    }));
  }

  //get specific article
  getWeatherDetails(lat: any, lon: any) {
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat +
      '&lon=' + lon + '&appid=50b01ab9ac55e7f67ae66cf0ace6357a';
    return this.http.get(url).pipe(mergeMap(res => {
      return of(res);
    }));
  }

}


