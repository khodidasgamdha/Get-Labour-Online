import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate() {
    if(localStorage.getItem('user')) {
      this.router.navigate(['/message']);
      return true;
    }else {
      Swal.fire({
        title: 'Warn',
        text: 'Only admin can access this !!',
        icon: 'warning',
      })
      return false;
    }
  }
  
}
