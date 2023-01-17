import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoeAddRemoveStagiaireComponent } from './poe-add-remove-stagiaire.component';

describe('PoeAddRemoveStagiaireComponent', () => {
  let component: PoeAddRemoveStagiaireComponent;
  let fixture: ComponentFixture<PoeAddRemoveStagiaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoeAddRemoveStagiaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoeAddRemoveStagiaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
