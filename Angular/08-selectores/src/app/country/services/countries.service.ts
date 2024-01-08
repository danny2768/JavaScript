import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Country, Region, SmallCountry } from '../interfaces/country.interfaces';
import { Observable, combineLatest, map, of, tap } from 'rxjs';
import { CommonModule } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private baseUrl: string = 'https://restcountries.com/v3.1';

  private _regions: Region[] = [ Region.Africa, Region.Americas, Region.Asia, Region.Europe, Region.Oceania ];

  constructor(
    private http: HttpClient,
  ){}

  get regions(): Region[] {
    return [ ...this._regions ];
  }

  getCountriesByRegion( region: Region ): Observable<SmallCountry[]> {
    if( !region ) return of([]);

    return this.http.get<Country[]>(`${this.baseUrl}/region/${region}?fields=cca3,name,borders`)
      .pipe(
        map( (countries: Country[]) => countries.map( country => ({
          name: country.name.common,
          cca3: country.cca3,
          borders: country.borders ?? []
        })) ),

      )
  }

  getCountryByAlphaCode( alphaCode: string): Observable<SmallCountry> {

    return this.http.get<Country>(`${this.baseUrl}/alpha/${alphaCode}?fields=cca3,name,borders`)
      .pipe(
        map( (country: Country) => ({
          name: country.name.common,
          cca3: country.cca3,
          borders: country.borders ?? [],
        }))
      )
  }

  getCountryBordersByCodes( borders: string[] ): Observable<SmallCountry[]> {
    if ( borders.length === 0 || !borders ) return of([])

    const countriesRequests: Observable<SmallCountry>[] = [];

    borders.forEach( code => {
      const request = this.getCountryByAlphaCode( code );
      countriesRequests.push( request );
    });

    return combineLatest( countriesRequests );
  }
}




