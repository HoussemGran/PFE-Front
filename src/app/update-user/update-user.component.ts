import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';
import { UserService } from '../Services/user/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  constructor(private userService : UserService , private router : ActivatedRoute , private route : Router) { }

  addUserForm : FormGroup;
  id:string;
  ngOnInit(): void {
    this.id = this.router.snapshot.paramMap.get('id');
    this.addUserForm = new FormGroup({
      login:new FormControl(null,Validators.required),
      firstName:new FormControl(null,Validators.required),
      lastName:new FormControl(null,Validators.required),
      email:new FormControl(null,Validators.email),
      role:new FormControl(null,Validators.required)
    })

    this.userService.findUser(this.id).subscribe(response=>{
      console.log(response.role)
      this.loginValue = response.login;
      this.firstNameValue = response.firstName;
      this.lastNameValue = response.lastName;
      this.emailValue = response.email;
      this.roleValue = response.role;
    })

  }

loginValue
firstNameValue
lastNameValue
emailValue
roleValue
errorMsg;

  submit(){

    console.log(this.addUserForm.value)
    this.userService.updateUser(this.id,this.addUserForm.value).subscribe(

      res => {
        console.log(res)
        this.route.navigate(['admin/users']);  
      },
        err => {
          console.log("error "+err.message)
          this.errorMsg = err.message
        }


    )

  }

}
