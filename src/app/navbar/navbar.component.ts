import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestProjectService } from '../Services/testProject/test-project.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router : Router,private testProjectService : TestProjectService) { }

  ngOnInit(): void {
    this.testProjectService.allTestProjects().subscribe(data=>{
      
      this.projects = data;
      if(data.length != 0) {
        this.selectedProject = localStorage.getItem("selectedProject")
       // console.log(data);
        //get current project
        this.testProjectService.findTestProjectByName(this.selectedProject).subscribe(response=>{
         // console.log(response); 
          localStorage.setItem('projectID',response._id);
          localStorage.setItem('prefix',response.prefix);
         })
      }
      
        else {
        this.router.navigate(['/admin/testproject/add'])
        
      }
    })
  }

  login = localStorage.getItem("login");
  role = localStorage.getItem('role');
  projects = [];
  selectedProject:string

  onChange(event){
   // console.log(event)
    localStorage.setItem('selectedProject',event.value)
     this.testProjectService.findTestProjectByName(event.value).subscribe(response=>{
     // console.log(response); 
      localStorage.setItem('projectID',response._id);
      localStorage.setItem('prefix',response.prefix);
      location.reload();
     })

  }
  

  logout(){
    //console.log("logout")
    localStorage.removeItem('login');
    localStorage.removeItem('register');
    localStorage.removeItem('role');
    this.router.navigate(['login']);
    
  }

}
