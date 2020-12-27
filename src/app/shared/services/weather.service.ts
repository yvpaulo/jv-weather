import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import {responseToCityWeather} from '../utils/response.utils';
import {catchError, map, mergeMap} from 'rxjs/operators';
import { CityWeather } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) {
   }

   getCityWeatherByQuery(query:string):Observable<any>{
     const params = new HttpParams({fromObject: {q:query}});
     return this.doGet('weather',params).
      pipe(map(response=> responseToCityWeather(response)));
   }

   getCityWeatherById(id: string): Observable<CityWeather> {
    const params = new HttpParams({fromObject: {id}});
    return this.doGet<any>('weather', params)
      .pipe(map(response => responseToCityWeather(response)));
  }

   private doGet<T>(url:string, params: HttpParams): Observable<T>{
     params = params.append('appid', environment.apiKey);
     params = params.append('lang','pt_br');
    return this.http.get<T>(`https://api.openweathermap.org/data/2.5/${ url }`, {params});
  }

}

