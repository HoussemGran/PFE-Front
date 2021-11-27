import { Component, OnInit } from '@angular/core';
import { KeywordService } from '../Services/keyword/keyword.service';
import { TestProjectService } from '../Services/testProject/test-project.service';
export interface keyword{
  keyword:string;
  description:string;
}
@Component({
  selector: 'app-keywords-guest',
  templateUrl: './keywords-guest.component.html',
  styleUrls: ['./keywords-guest.component.css']
})
export class KeywordsGuestComponent implements OnInit {

  constructor(private keywordService : KeywordService,
    private projectService : TestProjectService,) { }
    DATA : any = []
    data:any;
    projectID = localStorage.getItem('projectID'); 
   
  ngOnInit(): void {

    this.projectService.fetchKeywords(this.projectID).subscribe(response=>{
      console.log(response);
      this.DATA = response;
    })
  }
  displayedColumns: string[] = ['keyword','description'];
  dataSource = this.DATA;

}
