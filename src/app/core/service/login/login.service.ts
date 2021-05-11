import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  id;
  
  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private firestore: AngularFirestore
  ) { 
  }

  // get logged user data from server
  getUser() {
    // return this.firestore.collection('user', ref => ref.where('id', '==', this.id)).snapshotChanges();
    return this.firestore.collection('user').snapshotChanges();
  }

  //login with email-password
  login(email, password) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then(result => {

        this.id = result.user.uid; //set id to local variable
        
        // navigate after login
        this.router.navigate(['']);
      })
      .catch(err => {
        console.log(err.message);
      })
  } 

  // registration with email-password
  registration(firstName, lastName, email, password) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then(result => {

        // call method which store user data to firestore
        this.setUserStoreData(result.user.uid ,firstName, lastName, email, password);

        // navigate after login
        this.router.navigate(['']);
      })
      .catch(err => {
        console.log(err.message);
      })
  }

  // logout
  logOut() {
    return this.afAuth.signOut()
      .then(() => {
        localStorage.removeItem('user');
        this.router.navigate(['']);
      })
  }

  // Reset Forgot password
  ForgotPassword(passwordResetEmail) {
    return this.afAuth.sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        Swal.fire({
          title:'Success',
          text: 'Password reset email sent, check your inbox.!',
          icon: 'success',
        })
      })
      .catch((error) => {
        alert(error)
      })
  }

  // store logged user data to firestore
  setUserStoreData(id, firstName, lastName, email, password) {
    return this.firestore.collection('user').doc(id).set({
      id: id,
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    })
  }

}