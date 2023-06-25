import { Injectable } from '@angular/core';
import { SuperHero } from '../models/superhero';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuperheroService {

  private url = "superhero"

  constructor(private http: HttpClient) { }

  public getSuperhero(): Observable<SuperHero[]> {  
    return this.http.get<SuperHero[]>(`https://localhost:7049/api/${this.url}`);
  }

  public updateHero(hero: SuperHero): Observable<SuperHero[]> {  
    return this.http.put<SuperHero[]>(`https://localhost:7049/api/${this.url}`, hero);
  }

  public createHero(hero: SuperHero): Observable<SuperHero[]> {  
    return this.http.post<SuperHero[]>(`https://localhost:7049/api/${this.url}`, hero);
  }

  public deleteHero(hero: SuperHero): Observable<SuperHero[]> {  
    return this.http.delete<SuperHero[]>(`https://localhost:7049/api/${this.url}/${hero.id}`);
  }
}
