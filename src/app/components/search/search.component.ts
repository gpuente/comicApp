import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { HeroesService, Heroe } from "../../services/heroes.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  heroes:any[];
  termino:string;

  constructor(private activatedRoute:ActivatedRoute,
              private _router:Router,
              private _heroesService:HeroesService) 
  {
    this.activatedRoute.params.subscribe(params => {
      this.heroes = _heroesService.getHeroesByName(params['text']);
      this.termino = params['text'];
      console.log(params['text']);
      console.log(this.heroes);
    });
  }

  ngOnInit() {
  }

  verHeroe(i:string){
    this._router.navigate(['/heroe', i]);
  }

}
