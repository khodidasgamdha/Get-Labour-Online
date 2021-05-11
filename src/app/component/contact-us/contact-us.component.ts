import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { MessageService } from '../../core/service/query/message.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  form;

  constructor(
    private fb: FormBuilder, 
    private query: MessageService
  ) {

    // form
    this.form = this.fb.group({
      name: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15),
        Validators.pattern("^[a-zA-Z]+(?: [a-z|A-Z]+)*$")
      ]],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      subject: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15),
        Validators.pattern("^[a-zA-Z]+(?: [a-z|A-Z]+)*$")
      ]],
      message: ['', [
        Validators.required,
        Validators.pattern("^[a-zA-Z]+(?: [a-z|A-Z]+)*$")
      ]],
      date: new Date()
    })
    
   }

  ngOnInit(): void {
  }

  // on submit
  submit(data) {
    if(this.form.valid) {
      this.query.addQuery(data);
      Swal.fire(
        'Success..',
        'We will come back to you, Stay Connected !!',
        'success'
      )
    }else {
      Swal.fire(
        'Sorry..',
        'Please, First fill all the required fields !!',
        'error'
      )
    }
  }

  // get controls
  get name() {return this.form.get('name');}
  get email() {return this.form.get('email');}
  get subject() {return this.form.get('subject');}
  get message() {return this.form.get('message');}

}
