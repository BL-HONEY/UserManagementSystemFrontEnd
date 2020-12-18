import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserServicesService } from 'src/app/services/user-services.service';
import { ViewUserComponent } from '../view-user/view-user.component';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  allUsers: any

  constructor(
    private userServices: UserServicesService,
    private snackBar: MatSnackBar,
    private router: Router,
    public dialog: MatDialog,


  ) { }

  ngOnInit() {
    this.fetchAllUsers();

  }

  fetchAllUsers() {
    this.userServices.getAllUsers()
      .subscribe((response) => {
        console.log(response);
        this.allUsers = (response as any).data

      })
  }
  removeUser(user) {
    this.userServices.removeUser(user._id)
      .subscribe((response) => {
        this.fetchAllUsers();

      })
  }

  navigate(){
    this.router.navigateByUrl('newUser');

  }

  editUser(user){
    const dialogRef = this.dialog.open(ViewUserComponent, {
      data: user
    });
    dialogRef.afterClosed().subscribe(result => {
      // console.log('dialog updated content :', result, '\n updated data', item);
      this.userServices.updateUserDetails(user._id, result.data).subscribe(
        data => {
          this.fetchAllUsers();
        },
        error => {
          this.snackBar.open('Note not updated', '', { duration: 2000 });
          console.log('error response: ', error);
        }
      )
    })
  }

}
