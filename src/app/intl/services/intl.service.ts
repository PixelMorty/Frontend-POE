import { APP_INITIALIZER, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IntlService {
  constructor() {}

  init(): Promise<void> {
    return new Promise((resolve: any) => {
      console.log(`I'm running`);
      resolve();
    });
  }

  public static appInitializer(IntlService: IntlService) {
    return (): Promise<void> => {
      return IntlService.init();
    };
  }
}

export const intlProvider = {
  provide: APP_INITIALIZER, // 1er tokken (jeton) L'application démarre. Indique à Angular qu'il y a quelque chose à faire via APP_INITIALIZER
  useFactory: IntlService.appInitializer, // Utilise le service
  deps: [
    IntlService, // Permet d'utiliser le service dans la static (instancier la class)
  ],
  multi: true, // Parce qu'angular, par défault, n'autorise qu'une seule class à utiliser appInitializer. Multi permet d'utiliser plusieurs services
};
