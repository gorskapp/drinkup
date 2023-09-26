import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCoctailDetailsComponent } from './modal-coctail-details.component';

describe('ModalCoctailDetailsComponent', () => {
  let component: ModalCoctailDetailsComponent;
  let fixture: ComponentFixture<ModalCoctailDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalCoctailDetailsComponent]
    });
    fixture = TestBed.createComponent(ModalCoctailDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
