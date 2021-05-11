import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { OrdersService } from 'src/app/core/service/order/orders.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-book-labour',
  templateUrl: './book-labour.component.html',
  styleUrls: ['./book-labour.component.css'],
})
export class BookLabourComponent implements OnInit {
  form;

  constructor(private fb: FormBuilder, private order: OrdersService) {
    // form
    this.form = this.fb.group({
      // user form
      firstName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(15),
          Validators.pattern('^[a-zA-Z]+(?: [a-z|A-Z]+)*$'),
        ],
      ],
      lastName: [''],
      phoneNumber: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.pattern('^[6-9][0-9]*$'),
        ],
      ],
      email: [],

      // address form
      addressLine1: ['', [Validators.required, Validators.minLength(10)]],
      addressLine2: [],
      zipcode: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(6),
          Validators.pattern('^[1-9][0-9]*$'),
        ],
      ],
      city: [
        {
          value: 'Rajkot',
          disabled: true,
        },
      ],

      // requirnments form
      experience: ['', Validators.required],
      type: ['', Validators.required],
      time: ['', Validators.required],
      format: [''],
      date: new Date()
    });
  }

  ngOnInit(): void {}

  // on submit
  submit(data) {
    if (this.form.valid) {
      this.order.addOrder(data);
      Swal.fire(
        'Success..',
        'We will come back to you, Stay Connected !!',
        'success'
      );
      console.log(data);
      
    } else {
      Swal.fire(
        'Sorry..',
        'Please, First fill all the required fields !!',
        'error'
      );
    }
  }

  // get controls
  get firstName() {
    return this.form.get('firstName');
  }
  get lastName() {
    return this.form.get('lastName');
  }
  get phoneNumber() {
    return this.form.get('phoneNumber');
  }
  get email() {
    return this.form.get('email');
  }
  get addressLine1() {
    return this.form.get('addressLine1');
  }
  get addressLine2() {
    return this.form.get('addressLine2');
  }
  get zipcode() {
    return this.form.get('zipcode');
  }
  get city() {
    return this.form.get('city');
  }
  get experience() {
    return this.form.get('experience');
  }
  get type() {
    return this.form.get('type');
  }
  get time() {
    return this.form.get('time');
  }
  get format() {
    return this.form.get('format');
  }
}
