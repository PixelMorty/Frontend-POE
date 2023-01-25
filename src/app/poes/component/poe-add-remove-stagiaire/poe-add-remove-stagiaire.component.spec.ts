import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InitialsPipe } from 'src/app/stagiaires/pipes/initials.pipe';
import { PoeAddRemoveStagiaireComponent } from './poe-add-remove-stagiaire.component';
import { AppModule } from 'src/app/app.module';
import { RouterTestingModule } from '@angular/router/testing';
import { StagiaireService } from 'src/app/core/services/stagiaire-service';
import { SharedModule } from 'src/app/shared/shared.module';


describe('PoeAddRemoveStagiaireComponent', () => {
  let component: PoeAddRemoveStagiaireComponent;
  let fixture: ComponentFixture<PoeAddRemoveStagiaireComponent>;
  let stagiaireService: StagiaireService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoeAddRemoveStagiaireComponent, InitialsPipe ],
      imports: [ AppModule, RouterTestingModule, SharedModule ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoeAddRemoveStagiaireComponent);
    TestBed.inject(StagiaireService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
