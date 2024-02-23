import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { SIDEBAR_ROUTE } from './app/sidebar/sidebar.route';
import { APP_ROUTE } from './app/app.route';


bootstrapApplication(AppComponent, {
  providers: [provideRouter(SIDEBAR_ROUTE)],
}).catch(err => console.error(err));
