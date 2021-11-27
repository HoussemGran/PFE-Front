import { Component, OnInit } from '@angular/core';
import { AddUserService } from '../Services/addUser/add-user.service';
import { TestPlanService } from '../Services/testPlan/test-plan.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private addUser : AddUserService , private testPlanService : TestPlanService) { }
  users : any;
  userAuth = localStorage.getItem("login");
  selectedPlan = localStorage.getItem('testplan');
  plans={}
  isPlansEmpty=true;
  ngOnInit(): void {

      this.testPlanService.findTestPlanByProject(localStorage.getItem('projectID')).subscribe(

        res => {
          if(Object.keys(res).length ==0){
          this.plans = res;
          this.isPlansEmpty = true;
          }else{
          console.log(res);
          this.plans = res;
          this.isPlansEmpty = false;
          }
        },
        err => console.log(err)
      )

  } 

  onChange(event){
    console.log(event);
      localStorage.setItem('testplan',event.value);
      this.testPlanService.findTestplanByName(event.value).subscribe(response=>{
        localStorage.setItem('planID',response[0]._id);
        console.log(response[0]._id);
      })
  }

  leftItems = [
  {title:"Test project management",link:"testproject" , emoji:'folder'},
  {title:"Keyword management",link:"keywords" , emoji : 'translate'},
  {title:"Platform management",link:"platforms" , emoji:'android'},
  {title:"Test specification",link:'testspecification' , emoji:'assignment'},
  {title:"Library" ,link:'library' , emoji:'book'}

];
  
  rightItems = [
  {title:"Execute tests",link:"execution", emoji:'videogame_asset'},
  {title:"Metrics Dashboard",link:"chart" , emoji : 'show_chart'},
];
  

}
