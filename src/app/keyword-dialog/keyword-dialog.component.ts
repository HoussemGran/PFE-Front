import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { TestCaseService } from '../Services/testCase/test-case.service';

interface DialogData{
  keywords : any;
  testCaseID:string
}

@Component({
  selector: 'app-keyword-dialog',
  templateUrl: './keyword-dialog.component.html',
  styleUrls: ['./keyword-dialog.component.css']
})
export class KeywordDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData,
  private testCaseService : TestCaseService,
  private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.keyword = this.data.keywords;
  }

  keyword;

  save(items){

      for(let item of items){
        const keyword = {keywordID: item._value._id , testCaseID:this.data.testCaseID}
        console.log(keyword);
        this.testCaseService.appendKeyword(keyword).subscribe(response=>{
          //console.log(response)
          location.reload();
        })

      }


  }

}
