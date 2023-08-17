import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';


import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      provideFirebaseApp(()=> initializeApp(
        {
          apiKey: "AIzaSyDcgQBvEEJITnpJ5-CLuzuU7TQxfn7gaZM",
          authDomain: "josevicentedesousa-e1ef1.firebaseapp.com",
          databaseURL: "https://josevicentedesousa-e1ef1.firebaseio.com",
          projectId: "josevicentedesousa-e1ef1",
          storageBucket: "josevicentedesousa-e1ef1.appspot.com",
          messagingSenderId: "1016124463338",
          appId: "1:1016124463338:web:d29ef73a850597c7a6df93"
        }
      ))
    ),
    importProvidersFrom(
      provideFirestore(()=>getFirestore())
    )
  ]
  
};
