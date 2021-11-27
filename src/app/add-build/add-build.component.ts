import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BuildService } from '../Services/build/build.service';

@Component({
  selector: 'app-add-build',
  templateUrl: './add-build.component.html',
  styleUrls: ['./add-build.component.css']
})
export class AddBuildComponent implements OnInit {


  build : FormGroup
  planID = localStorage.getItem("planID")

  constructor(private buildService : BuildService , private router : Router) { }

  ngOnInit(): void {

    this.build = new FormGroup({

      title : new FormControl(null, Validators.required),
      description : new FormControl,
      active:new FormControl,
      open:new FormControl,
      planID : new FormControl,
      releaseDate : new FormControl
    })

  }
  
  submit(){

    if(this.build.valid){

      this.buildService.createBuild(this.build.value).subscribe(response=>{

        console.log(response);
        localStorage.setItem('build',this.build.value.title);
        this.router.navigate(['admin'])
      })

    }

  }

}

