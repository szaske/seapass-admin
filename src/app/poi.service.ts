import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Poi } from './poi';

@Injectable()
export class PoiService {

  poiCollection: AngularFirestoreCollection<Poi>;
  pois: Observable<Poi[]>;

  constructor(private database: AngularFirestore) {
    // This is a db reference, not data
    this.poiCollection = this.database.collection<Poi>('pois'); 
    
    // snapshotChanges automatically return the full list of pois
    // I will need to alter this to being PAGED responses when the list
    // gets too large.
    // may also need to move this to getPois.
    this.pois = this.poiCollection.snapshotChanges().map(changes => {return changes.map(change => {
      const data = change.payload.doc.data() as Poi;
      const autoId = change.payload.doc.id;
      return {autoId, ...data}
    })}) 
  }

   getPois() {
    return this.pois;
  }

  // Returns an observable
  getPoiObsByAutoId(poiId: string) {
    return this.poiCollection.doc(poiId).snapshotChanges().map(item => {
      const data = item.payload.data() as Poi;
      const autoId = item.payload.id;
      return {autoId, ...data}
    })
  } 
    // public name: string, 
  // public description:string,
  // public latitude: number, 
  // public longitude: number,
  // public img_url?: string,
  // public tags?: string[],
  // public autoId?: string

  updatePoi(localUpdatedPoi: Poi){
    // var poiEntryInFirebase = this.getPoiObsByAutoId(localUpdatedPoi.autoId);
    this.poiCollection.doc(localUpdatedPoi.autoId).update({name: localUpdatedPoi.name,
      description: localUpdatedPoi.description,
      latitude: localUpdatedPoi.latitude,
      longitude: localUpdatedPoi.longitude,
      img_url: localUpdatedPoi.img_url,
      tags: localUpdatedPoi.tags});
  }

}
