import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LibService } from '../Services/library/lib.service';
import { TestCasesLibComponent } from '../test-cases-lib/test-cases-lib.component';
import {csv2json} from "csvjson-csv2json";


interface DialogData{
  testSuite : any
}

@Component({
  selector: 'app-test-suite-dialog',
  templateUrl: './test-suite-dialog.component.html',
  styleUrls: ['./test-suite-dialog.component.css']
})
export class TestSuiteDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData,
    public dialgo : MatDialog,
    private libService : LibService
  ) { }

  panelOpenState = false;
  file: File = null;

  ngOnInit(): void {
  }

  delete(){
    console.log(this.data.testSuite._id)
    this.libService.deleteTestSuite(this.data.testSuite._id).subscribe(response=>{
      console.log(response);
      location.reload();
    })
    
  }

  importTCDialog(){
     this.dialgo.open(TestCasesLibComponent,{
       minWidth:'500px',
       data:{testSuiteID : this.data.testSuite._id}
     }) 
  }

  onChange(event) {
    
    this.file = event.target.files[0];
}

onUpload() {

  let fileReader = new FileReader();

  fileReader.onload = (e)=>{
    //console.log(fileReader.result)
    const json = csv2json(fileReader.result,{parseNumber:true});
    console.log(json[0]);
    const myTC = json[0];
    

     this.libService.createTestCase(myTC).subscribe(response=>{
      console.log(response);
      location.reload();
    })

  }
  fileReader.readAsText(this.file);
  
  
  
}

}
