import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user/user.service';

export interface User{

    login:string;
    firstName:string;
    lastName:string;
    password:string;
    confirmPassword:string;
    email:string;
    role:string

}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private userService : UserService) { }

  DATA : User[] = [];

  ngOnInit(): void {

    this.userService.allUsers().subscribe(response=>{
      this.DATA = response;
      console.log(response);
    })

  }

  displayedColumns: string[] = ['login','firstName','lastName','email','role'];
  dataSource = this.DATA;

}
