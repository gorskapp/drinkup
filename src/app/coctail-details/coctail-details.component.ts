import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { DrinksService } from '../services/drinks.service';
import { Drink } from '../interfaces/coctails';

@Component({
  selector: 'app-coctail-details',
  templateUrl: './coctail-details.component.html',
  styleUrls: ['./coctail-details.component.scss']
})
export class CoctailDetailsComponent implements OnInit, OnDestroy {
  id!: string;
  private sub: any;

  // drinks data
  coctail!: Drink[];
  arrayOfIngredients: Array<string> = [];
  arrayOfMeasures: Array<string> = [];

  constructor(private drinksService: DrinksService,
              private activatedRoute: ActivatedRoute,
              private location: Location) {}

  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.id = params["id"];
    });
    this.getCoctailById(this.id);
  }

  getCoctailById(passedId: string) {
    this.drinksService.getCoctailById(passedId). subscribe((response) => {
      this.coctail = response.drinks;

      // had to do work around cus API response it's a nightmare...
      const ingredientPattern = "strIngredient";
      const measurePattern = "strMeasure";

      // transform object to array of entries
      const coctailObj = this.coctail[0];
      const objectAsArray = Object.entries(coctailObj);

      // create arrays with ingredients and measures to ease displaying in template
      for (let i = 0; i < objectAsArray.length; i++) {
        if (objectAsArray[i][0].startsWith(ingredientPattern) && objectAsArray[i][1] !== null ) {
          this.arrayOfIngredients.push(objectAsArray[i][1]);
        }
        if (objectAsArray[i][0].startsWith(measurePattern) && objectAsArray[i][1] !== null ) {
          this.arrayOfMeasures.push(objectAsArray[i][1]);
        }
      }
    })
  }

  goBack() {
    this.location.back();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
