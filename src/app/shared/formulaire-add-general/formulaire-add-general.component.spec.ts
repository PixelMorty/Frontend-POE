import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireAddGeneralComponent } from './formulaire-add-general.component';



describe('FormulaireAddGeneralComponent', () => {
  let component: FormulaireAddGeneralComponent;
  let fixture: ComponentFixture<FormulaireAddGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireAddGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireAddGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

