import { Component, OnInit } from '@angular/core';
import { TestPlanService } from '../Services/testPlan/test-plan.service';

@Component({
  selector: 'app-guest-dashboard',
  templateUrl: './guest-dashboard.component.html',
  styleUrls: ['./guest-dashboard.component.css']
})
export class GuestDashboardComponent implements OnInit {

  constructor(private testPlanService : TestPlanService) { }

  ngOnInit(): void {

    this.testPlanService.findTestPlanByProject(localStorage.getItem('projectID')).subscribe(

      res => {
        if(Object.keys(res).length ==0){
        this.plans = res;
        //this.isPlansEmpty = true;
        console.log(res)
        }else{
        console.log(res);
        this.plans = res;
        //this.isPlansEmpty = false;
        }
      },
      err => console.log(err)
    )
  }


  userAuth = localStorage.getItem("login");
  selectedPlan = localStorage.getItem('testplan');
  plans={}
  isPlan = localStorage.getItem('planID');
  onChange(event){
    console.log(event);
      localStorage.setItem('testplan',event.value);
      this.testPlanService.findTestplanByName(event.value).subscribe(response=>{
        localStorage.setItem('planID',response[0]._id);
        console.log(response[0]._id);
      })
  }
  
  leftItems = [
    {title:"Browse Test cases",link:"testcases",emoji:'pageview'},
    {title:"Browse Keywords",link:"keywords", emoji:'g_translate'},
  
  ];

  rightItems = [
    {title:"Metrics Dashboard",link:"chart",emoji:'pie_chart'},
    {title:"Test repport",link:'testreport',emoji:'assignment'}

  ]

}
