import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { VenueCreateComponent } from './venue-create/venue-create.component';

import { RouterModule,Routes }   from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AngularFireModule } from 'angularfire2';
import { VotingComponent } from './voting/voting.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'venue-create',      component: VenueCreateComponent },
  {path: 'voting',      component: VotingComponent }
];

export const firebaseConfig = {
  apiKey: 'AIzaSyD3HVkkhHKJr0HAGmMeZNRPtaVXPGlTVPI',
  authDomain: 'juqe-814c7.firebaseapp.com',
  databaseURL: 'https://juqe-814c7.firebaseio.com',
  storageBucket: 'juqe-814c7.appspot.com',
  messagingSenderId: '823272376145'
};

@NgModule({
  declarations: [
    AppComponent,
    VenueCreateComponent,
    HomeComponent,
    VotingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
