import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Drink } from '../interfaces/coctails';
import { DrinksService } from '../services/drinks.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  // Drink obj gotten from API as interface
  drinks$!: Drink[];
  notFound!: boolean;
  queryParamSearch!: string | null;

  constructor(private drinksService: DrinksService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    // get back to search result after checking out details of chosen coctail using search param from url
    this.queryParamSearch = this.activatedRoute.snapshot.queryParamMap.get('s');
    if (this.queryParamSearch !== null) {
      this.searchByCoctailName(this.queryParamSearch!);
    }
  }

  searchByCoctailName(searchValue: string) {
    this.drinksService.serachByCoctailName(searchValue).subscribe((response) => {
      if (response.drinks !== null) {
        this.drinks$ = response.drinks;
        this.notFound = false;
      } else {
        this.notFound = true;
      }
    })
    // push searched value to url as query param
    this.router.navigate(
      [],
      {
        relativeTo: this.activatedRoute,
        queryParams: { s: searchValue }
      });
  }

  goToCoctailDetails(id: string) {
    this.router.navigate(["/coctail-details", id]);
  }

}

