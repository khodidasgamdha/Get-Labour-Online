import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private firestore: AngularFirestore) { }

  // add query to database
  addQuery(query) {
    return this.firestore.collection('queries').add(query);
  }

  // get query from database
  getQuery(){
    return this.firestore.collection('queries', ref => ref.orderBy('date','desc')).snapshotChanges();
  }

}
