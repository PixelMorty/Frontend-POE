import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeResponseComponent } from './free-response.component';

describe('FreeResponseComponent', () => {
  let component: FreeResponseComponent;
  let fixture: ComponentFixture<FreeResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeResponseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
