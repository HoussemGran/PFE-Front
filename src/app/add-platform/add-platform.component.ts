import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlatformService } from '../Services/platform/platform.service';

@Component({
  selector: 'app-add-platform',
  templateUrl: './add-platform.component.html',
  styleUrls: ['./add-platform.component.css']
})
export class AddPlatformComponent implements OnInit {

  addPlatformForm : FormGroup;
  projectID = localStorage.getItem('projectID');

  constructor(private platformService : PlatformService , private router:Router) { }

  ngOnInit(): void {

    this.addPlatformForm = new FormGroup({

      platform:new FormControl(null,Validators.required),
      description:new FormControl,
      projectID : new FormControl,
      onDesign:new FormControl,
      onExecution:new FormControl,

    })

  }

  submit(){
    console.log(this.addPlatformForm.value);
    if(this.addPlatformForm.valid){
      this.platformService.createPlatform(this.addPlatformForm.value).subscribe(response=>{
        console.log(response);
        this.router.navigate(['admin/platforms']);
      })

    }

  }

}
