import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  firstName;
  lastName;
  email;
  phoneNumber;
  
  constructor(
    public dialogRef: MatDialogRef<ViewUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { 

    this.firstName = new FormControl(data.firstName);
    this.lastName = new FormControl(data.lastName);
    this.email = new FormControl(data.email);
    this.phoneNumber = new FormControl(data.phoneNumber);
  }

  ngOnInit() {
  }

    save() {
      this.data.firstName = this.firstName.value;
      this.data.lastName = this.lastName.value;
      this.data.email = this.email.value;
      this.data.phoneNumber = this.phoneNumber.value;
  
      this.dialogRef.close({ data: this.data });
    
  }
}
