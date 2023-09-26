import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoctailDetailsComponent } from './coctail-details.component';

describe('CoctailDetailsComponent', () => {
  let component: CoctailDetailsComponent;
  let fixture: ComponentFixture<CoctailDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoctailDetailsComponent]
    });
    fixture = TestBed.createComponent(CoctailDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
