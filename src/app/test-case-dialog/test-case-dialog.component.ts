import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LibService } from '../Services/library/lib.service';

interface DialogData {
  testCase: any
}


@Component({
  selector: 'app-test-case-dialog',
  templateUrl: './test-case-dialog.component.html',
  styleUrls: ['./test-case-dialog.component.css']
})
export class TestCaseDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData , private libService : LibService) { }

  ngOnInit(): void {
  }

  role = localStorage.getItem('role');
  testCase;
  selectedStatus;
  selectedImportance;
  selectedType;
  duration;
  
  delete(){
    console.log(this.data.testCase._id)
    this.libService.deleteTestCase(this.data.testCase._id).subscribe(response=>{
      console.log(response);
      location.reload();
    })
  }

}
