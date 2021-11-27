import { Component, OnInit } from '@angular/core';
import { KeywordService } from '../Services/keyword/keyword.service';
import { TestProjectService } from '../Services/testProject/test-project.service';

export interface keyword{
  keyword:string;
  description:string;
}

@Component({
  selector: 'app-keywords',
  templateUrl: './keywords.component.html',
  styleUrls: ['./keywords.component.css']
})
export class KeywordsComponent implements OnInit {

  constructor(private keywordService : KeywordService,
      private projectService : TestProjectService,
    ) { }

  DATA : any = []
  data:any;
  projectID = localStorage.getItem('projectID'); 


  ngOnInit(): void {

    this.projectService.fetchKeywords(this.projectID).subscribe(response=>{
      console.log(response);
      this.DATA = response;
    })

  }

  delete(id){
    this.keywordService.deleteKeyword(id).subscribe(response=>{
      console.log(response);
      location.reload();
    })
  }

  displayedColumns: string[] = ['keyword','description','delete'];
  dataSource = this.DATA;

}
