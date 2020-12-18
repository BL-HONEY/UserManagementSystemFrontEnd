import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserServicesService } from 'src/app/services/user-services.service';

@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.css']
})
export class AddNewUserComponent implements OnInit {

  constructor(
    private userServices: UserServicesService,
    private router: Router,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
  }

  errorMessageForEmptyField: string = '';
  url: any;


  firstName = new FormControl('',
    [Validators.required, Validators.minLength(4),
    Validators.pattern(new RegExp(/^[a-z ,.'-]+$/i)),
    Validators.maxLength(25)
    ]);

  lastName = new FormControl('',
    [Validators.required, Validators.minLength(4),
    Validators.pattern(new RegExp(/^[a-z ,.'-]+$/i)),
    Validators.maxLength(25)
    ]);

  email = new FormControl('',
    [Validators.required,
    Validators.minLength(12),
    Validators.maxLength(55),
    Validators.email
    ]);

  phoneNumber = new FormControl('',
    [Validators.required, Validators.minLength(10),
    Validators.pattern(new RegExp(/^[6-9]\d{9}$/i)),
    Validators.minLength(10),
    Validators.maxLength(10),
    ]);


  errorMessageForFirstName() {
    return this.firstName.hasError('required') ? 'Enter first Name' :
      this.firstName.hasError('pattern') ? 'First name should only have alphabets' :
        this.firstName.hasError('minlength') ? 'First name limit is 8-25 characters' :
          this.firstName.hasError('maxlength') ? 'First name limit is 8-25 characters' :
            '';
  }

  errorMessageForLastName() {
    return this.lastName.hasError('required') ? 'Enter last Name' :
      this.firstName.hasError('pattern') ? 'Last name should only have alphabets' :
        this.lastName.hasError('minlength') ? 'Last limit is 8-25 characters' :
          this.lastName.hasError('maxlength') ? 'Last limit is 8-25 characters' :
            '';
  }
  errorMessageForEmail() {
    return this.email.hasError('required') ? 'Enter an email' :
      this.email.hasError('email') ? 'Invalid email' :
        '';
  }

  errorMessageForPhoneNumber() {
    return this.phoneNumber.hasError('required') ? 'Enter Phone Number' :
      this.phoneNumber.hasError('pattern') ? 'Phone number can be 10 numeric values, starting (6-9)' :
        this.phoneNumber.hasError('minlength') ? 'Phone number can be 10 numeric values' :
          this.phoneNumber.hasError('maxlength') ? 'Phone number can be 10 numeric values' :
            '';
  }

  onSelectFile(event) { // called each time file input changes
 
    let image = event.target.files[0];
    this.url = image
  }

  addNewUser() {

    let userData = {
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      phoneNumber: this.phoneNumber.value,
      email: this.email.value,
      profileImage: this.url
    }

    this.userServices.addNewUser(userData)
    .subscribe((response) => {
      this.snackBar.open('User Added successfully.', '', { duration: 3000 });
      this.router.navigateByUrl('users');
    },
    (error) => {
      this.snackBar.open('User not Added.', '', { duration: 3000 });
    })
  }


}
