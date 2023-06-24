import { Injectable } from '@angular/core';
import { SuperHero } from '../models/superhero';

@Injectable({
  providedIn: 'root'
})
export class SuperheroService {

  constructor() { }

  public getSuperhero(): SuperHero[] {
    let hero = new SuperHero();
    hero.id = 1;
    hero.name = "Batman";
    hero.firstName = "bruce";
    hero.lastName = "wayne";
    hero.place = "gotham";
  
    return [hero];
  }
}
