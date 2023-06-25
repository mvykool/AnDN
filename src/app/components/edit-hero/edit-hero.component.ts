import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SuperHero } from 'src/app/models/superhero';
import { SuperheroService } from 'src/app/services/superhero.service';

@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.css']
})
export class EditHeroComponent implements OnInit {
  @Input() hero?: SuperHero;
  @Output() heroesUpdated = new  EventEmitter<SuperHero[]>();

  constructor(private superheroService: SuperheroService){}

  ngOnInit () : void {

  }

  updateHero (hero: SuperHero) {
    this.superheroService
    .updateHero(hero)
    .subscribe((heroes: SuperHero[]) => this.heroesUpdated.emit(heroes)); 
  }

  deleteHero (hero: SuperHero) {
    this.superheroService
    .deleteHero(hero)
    .subscribe((heroes: SuperHero[]) => this.heroesUpdated.emit(heroes)); 
  }

  createHero (hero: SuperHero) {
    this.superheroService
    .createHero(hero)
    .subscribe((heroes: SuperHero[]) => this.heroesUpdated.emit(heroes)); 
  }

}
