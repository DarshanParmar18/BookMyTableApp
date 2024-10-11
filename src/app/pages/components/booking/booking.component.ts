import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss',
})
export class BookingComponent {
  public bsModalRef = inject(BsModalRef);
  private builder = inject(FormBuilder);

  Form = this.builder.group({
    firstName: ['', Validators.required],
    lastName: [''],
    email: [null, [Validators.required, Validators.email]],
    phoneNumber: [null, [Validators.required]],
  });

  submit() {
    if (this.Form.valid) {
      console.log(
        `FirstName: ${this.Form.value.firstName} LastName ${this.Form.value.lastName} Email: ${this.Form.value.email}, Phone number ${this.Form.value.phoneNumber}`
      );
      this.bsModalRef.hide();
    }
  }
}
