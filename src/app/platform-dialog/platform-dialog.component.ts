import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TestCaseService } from '../Services/testCase/test-case.service';

interface DialogData{
  platforms:any,
  testCaseID:string
}

@Component({
  selector: 'app-platform-dialog',
  templateUrl: './platform-dialog.component.html',
  styleUrls: ['./platform-dialog.component.css']
})
export class PlatformDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData,
    private testCaseService : TestCaseService
  ) { }

  ngOnInit(): void {
    this.platform = this.data.platforms;
  }

  platform;

  save(items){
    for(let item of items){
      const platform = {platformID: item._value._id , testCaseID:this.data.testCaseID}
      console.log(platform);
      this.testCaseService.appendPlatform(platform).subscribe(response=>{
        //console.log(response)
        location.reload();
      })

    }
  }

}
