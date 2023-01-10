import { LOCATION_INITIALIZED } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { APP_INITIALIZER, Injectable, Injector } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IntlService {
  private _language: string = '';
  private _translateService!: TranslateService;
  constructor() {}

  get language(): string {
    return this._language;
  }

  set language(language: string) {
    this._language = language;
  }

  init(translateService: TranslateService, injector: Injector): Promise<void> {
    return new Promise((resolve: any) => {
      injector
        .get(
          // Retourne une promesse
          LOCATION_INITIALIZED,
          Promise.resolve(null) // If TOKEN was not provided
        )
        .then(() => {
          // ANGULAR says i'm okay with my own resources, do what u need
          const userLanguage: string = window.navigator.language.split('-')[0]; // fr-FR => fr | FR => fr
          this._language = /(fr|en|de|it|es)/gi.test(userLanguage)
            ? userLanguage
            : 'fr'; // le .test permet de voir si la langue en fait parti, sinon, prend le 'fr' automatiquement
          this._translateService = translateService;
          this._switchLanguage().subscribe(() => {
            console.log(`Location was loaded for ${this._language}`);
            resolve();
          });
        });
    });
  }

  private _switchLanguage(): Observable<any> {
    return this._translateService.use(this._language);
  }

  // L'ordre dans appInitializer doit être dans le même ordre que le tableau des dépendences.
  public static appInitializer(
    IntlService: IntlService,
    translateService: TranslateService,
    injector: Injector
  ) {
    return (): Promise<void> => {
      return IntlService.init(translateService, injector);
    };
  }

  public static httpLoaderFactory(httpClient: HttpClient): TranslateHttpLoader {
    return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json'); // va chercher les fichiers dans i18n portant le .json
  }
}

export const intlProvider = {
  provide: APP_INITIALIZER, // 1er tokken (jeton) L'application démarre. Indique à Angular qu'il y a quelque chose à faire via APP_INITIALIZER
  useFactory: IntlService.appInitializer, // Utilise le service
  deps: [
    // Permet d'utiliser le service dans la static (instancier la class)
    IntlService,
    TranslateService,
    Injector,
  ],
  multi: true, // Parce qu'angular, par défault, n'autorise qu'une seule class à utiliser appInitializer. Multi permet d'utiliser plusieurs services
};
