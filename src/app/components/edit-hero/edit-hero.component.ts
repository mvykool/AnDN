import { Component, Input } from '@angular/core';
import { SuperHero } from 'src/app/models/superhero';

@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.css']
})
export class EditHeroComponent {
  @Input() hero?: SuperHero;

  ngOnInit () : void {

  }

  updateHero (hero: SuperHero) {}

  deleteHero (hero: SuperHero) {}

  createHero (hero: SuperHero) {}

}
