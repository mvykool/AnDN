import { Injectable } from '@angular/core';
import { SuperHero } from '../models/superhero';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SuperheroService {

  private url = "superhero"

  constructor(private http: HttpClient) { }

  public getSuperhero(): Observable<SuperHero[]> {  
    return this.http.get<SuperHero[]>(`${environment.apiUrl}/${this.url}`);
  }
}
