import { StagiaireModel } from 'src/app/core/models/stagiaire-model';
import { InitialsPipe } from './initials.pipe';

describe('InitialsPipe', () => {
  it('create an instance', () => {
    const pipe = new InitialsPipe();
    expect(pipe).toBeTruthy();
  });

  it(`Should throw an Error if value is not a StagiaireModel`, () => {
    const pipe = new InitialsPipe();
    expect(() => pipe.transform('Not a valid object')).toThrowError();
  });

  it(`Should return JA`, () => {
    const pipe = new InitialsPipe();
    
    const stagaire: StagiaireModel = new StagiaireModel();
    stagaire.id = 6;
    stagaire.lastName = 'Aubert';
    stagaire.firstName = 'Jean-Luc';
    stagaire.email = 'jean-luc.aubert@aelion.fr';
    stagaire.phoneNumber = '06';
    stagaire.gender = 'M';

    expect(pipe.transform(stagaire)).toBe('JA');
  });

  it(`Should return JLA if param contains full with a true value`, () => {
    const pipe = new InitialsPipe();
    const stagaire: StagiaireModel = new StagiaireModel();
    stagaire.id = 6;
    stagaire.lastName = 'Aubert';
    stagaire.firstName = 'Jean-Luc';
    stagaire.email = 'jean-luc.aubert@aelion.fr';
    stagaire.phoneNumber = '06';
    stagaire.gender = 'M';
    expect(pipe.transform(stagaire,true)).toBe('JLA');
  });

  it(`Should return AJ if param contains lastNameFirst with a true value`, () => {
    const pipe = new InitialsPipe();
    const stagaire: StagiaireModel = new StagiaireModel();
    stagaire.id = 6;
    stagaire.lastName = 'Aubert';
    stagaire.firstName = 'Jean-Luc';
    stagaire.email = 'jean-luc.aubert@aelion.fr';
    stagaire.phoneNumber = '06';
    stagaire.gender = 'M';
    expect(pipe.transform(stagaire,false,true)).toBe('AJ');


  });




  it(`Should return AJL if param contains full and lastNameFirst with a true value`, () => {
    const pipe = new InitialsPipe();
    const stagaire: StagiaireModel = new StagiaireModel();
    stagaire.id = 6;
    stagaire.lastName = 'Aubert';
    stagaire.firstName = 'Jean-Luc';
    stagaire.email = 'jean-luc.aubert@aelion.fr';
    stagaire.phoneNumber = '06';
    stagaire.gender = 'M';
    expect(pipe.transform(stagaire,true,true)==='AJL').toBeTruthy();
  });
});
