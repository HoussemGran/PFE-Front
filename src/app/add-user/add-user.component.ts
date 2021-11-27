import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../Services/user/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private userService : UserService , private router:Router) { }

  addUserForm : FormGroup;

  ngOnInit(): void {

    this.addUserForm = new FormGroup({
      login:new FormControl(null,Validators.required),
      firstName:new FormControl(null,Validators.required),
      lastName:new FormControl(null,Validators.required),
      password:new FormControl(null,[Validators.required,Validators.minLength(5)]),
      email:new FormControl(null,Validators.email),
      role:new FormControl(null,Validators.required),
      date:new FormControl
    })

  }
  selected = "guest";
  submit(){

    console.log(this.addUserForm.value);
    if(this.addUserForm.valid){
        this.userService.createUser(this.addUserForm.value).subscribe(response=>{
          console.log(response)
          this.router.navigate(['/admin/users'])
        })
    }
  }
} 


