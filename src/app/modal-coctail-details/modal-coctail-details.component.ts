import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-modal-coctail-details',
  templateUrl: './modal-coctail-details.component.html',
  styleUrls: ['./modal-coctail-details.component.scss']
})
export class ModalCoctailDetailsComponent {
  drinkId!: string;

  constructor(public modalRef: MdbModalRef<ModalCoctailDetailsComponent>) {}


}
