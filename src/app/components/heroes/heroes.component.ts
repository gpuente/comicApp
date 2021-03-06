import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from "../../services/heroes.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes:any[] = [];

  constructor(private _heroesService:HeroesService,
              private _router:Router)
  { 

  }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
    console.log(this.heroes);
  }

  verHeroe(index:number){
    console.log(index);
    this._router.navigate(['/heroe', index]);
  }

}
