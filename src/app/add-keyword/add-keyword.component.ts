import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { KeywordService } from '../Services/keyword/keyword.service';

@Component({
  selector: 'app-add-keyword',
  templateUrl: './add-keyword.component.html',
  styleUrls: ['./add-keyword.component.css']
})
export class AddKeywordComponent implements OnInit {

  addKeywordForm : FormGroup;
  projectID = localStorage.getItem('projectID');

  constructor(private keywordService : KeywordService , private router:Router) { }

  ngOnInit(): void {

    this.addKeywordForm = new FormGroup({

      keyword:new FormControl(null,Validators.required),
      description:new FormControl,
      projectID:new FormControl
    })

  }

  submit(){
    console.log(this.addKeywordForm.value);
    if(this.addKeywordForm.valid){
      this.keywordService.createKeyword(this.addKeywordForm.value).subscribe(response=>{
        console.log(response);
        this.router.navigate(['admin/keywords']);
      })

    }

  }

}
