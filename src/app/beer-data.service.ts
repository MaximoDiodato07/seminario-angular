import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';
import { Beer } from './beer-list/beer';

@Injectable({
  providedIn: 'root'
})


export class BeerDataService {
  //... URL de la api de cervezas
  private url = "https://api.sampleapis.com/beers/ale"

  // Inyección de HttpClient
  constructor(private http: HttpClient) { }

  // metodo para obtener los datos de la api de cervezas
  public getBeers(): Observable<Beer[]> {
    // llamamos al método http.get
    let data = this.http.get<Beer[]>(this.url)
      .pipe(
        map(  beers => beers.slice(31, 41)),   // Obtiene 10 elementos
        tap( (beers: Beer[]) => beers.forEach( beer => beer.quantity = 0)), // Inicializa la cantidad a 0
        tap( (beers: Beer[]) => beers.forEach( beer => beer.stock = Math.floor(Math.random() * 20) + 1)), // Inicializa el stock a un número aleatorio entre 0 y 19
      );
    console.log(data);
    return data;
  }


}
