import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app';
import { provideRouter } from '@angular/router';
import { CardComponent } from './app/card/card.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', component: CardComponent },
      { path: '**', redirectTo: '' }
    ])
  ]
}).catch((err: unknown) => console.error(err));