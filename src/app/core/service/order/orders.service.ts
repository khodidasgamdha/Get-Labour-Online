import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private firestore: AngularFirestore) { }

  // add order to database
  addOrder(order) {
    return this.firestore.collection('orders').add(order);
  }

  // get order from database
  getOrder() {
    return this.firestore.collection('orders', ref => ref.orderBy('time', 'desc')).snapshotChanges();
  }
}
