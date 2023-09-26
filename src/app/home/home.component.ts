import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

import { Drink } from '../interfaces/coctails';
import { DrinksService } from '../services/drinks.service';
import { ModalCoctailDetailsComponent } from '../modal-coctail-details/modal-coctail-details.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  randomDrinks$!: Drink[];
  shortInstructions!: string;
  //for next verion
  modalRef: MdbModalRef<ModalCoctailDetailsComponent> | null = null;

  constructor(private drinksService: DrinksService,
              private router: Router,
              private modalService: MdbModalService) {}

  ngOnInit() {
    this.getTenRandomCoctails();
  }

  openModal(idDrink: string) {
    this.modalRef = this.modalService.open(ModalCoctailDetailsComponent, {
      data: { drinkId: idDrink },
      modalClass: 'modal-lg'
    })
  }

  goToCoctailDetails(id: string) {
    this.router.navigate(["/coctail-details", id]);
  }

  getTenRandomCoctails() {
    this.drinksService.getRandomCoctail().subscribe((response) => {
      this.randomDrinks$ = response.drinks;
    })
  }

}
