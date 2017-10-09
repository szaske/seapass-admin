import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PoiListComponent } from './poi-list/poi-list.component';
import { PoiDetailComponent } from './poi-detail/poi-detail.component';
import { PoiFormComponent } from './poi-form/poi-form.component';

// Routing array 
import { routing } from './app.routing';

// For Firebase & Firestore DB
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

// My API key imports
import { masterFirebaseConfig } from './api-keys';
import { PoiListItemComponent } from './poi-list-item/poi-list-item.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket,
  projectId: masterFirebaseConfig.projectId
};

@NgModule({
  declarations: [
    AppComponent,
    PoiListComponent,
    PoiDetailComponent,
    PoiFormComponent,
    PoiListItemComponent
  ],
  imports: [
    BrowserModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
