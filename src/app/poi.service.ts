import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Poi } from './poi';

@Injectable()
export class PoiService {

  // Before
  // units: FirebaseListObservable<any[]>;
  poiCollection: AngularFirestoreCollection<Poi>;
  pois: Observable<Poi[]>;

  //before
  // private database: AngularFireDatabase
  constructor(private database: AngularFirestore) {
    // before
    // this.units = database.list('units');
    this.poiCollection = this.database.collection('pois'); // This is a db reference, not data
    this.pois = this.poiCollection.valueChanges() // observable of poi data
   }

   getPois() {
    return this.pois;
  }
}
