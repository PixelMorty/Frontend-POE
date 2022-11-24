import { Pipe, PipeTransform } from '@angular/core';
import { throwError } from 'rxjs';
import { StagiaireModel } from 'src/app/core/models/stagiaire-model';

@Pipe({
  name: 'initials'
})
export class InitialsPipe implements PipeTransform {

  public transform(stagiaire: unknown,  full :boolean = false,lastNameFirst :boolean =false): string{

// if arg contains full then full=true

    if (stagiaire instanceof StagiaireModel){
    let initialsFirstName=this.initialsGetter(stagiaire.firstName,full);
    
    let initialsLastName= this.initialsGetter(stagiaire.lastName,full);

    if(lastNameFirst){
      return  initialsLastName +  initialsFirstName 
    }else {
      return initialsFirstName +  initialsLastName 
    }
  }else{
    throw new Error('value is not a valid StagiaireModem Object');
  }

  }


  private initialsGetter(name:string,full:boolean): string{
    let initials = "";
    let nameTemp  = name;
    if(full){
      while(nameTemp.search('-') >-1){
        initials=initials+nameTemp[0];
        nameTemp=nameTemp.substring(nameTemp.search('-')+1 ,nameTemp.length-1);
      }
      
    }
    return initials+nameTemp[0];
  } 

}
