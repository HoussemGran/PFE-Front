import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { KeywordService } from '../Services/keyword/keyword.service';

@Component({
  selector: 'app-update-keyword',
  templateUrl: './update-keyword.component.html',
  styleUrls: ['./update-keyword.component.css']
})
export class UpdateKeywordComponent implements OnInit {

  constructor(private route : ActivatedRoute , 
  private router : Router,    
  private keywordService : KeywordService) { }

  updateKeywordForm : FormGroup;

  private id = this.route.snapshot.paramMap.get('id');

  ngOnInit(): void {

    this.updateKeywordForm = new FormGroup({
      keyword:new FormControl(this.keyword , Validators.required),
      description:new FormControl(this.description)
    })

    this.keywordService.findKeyword(this.id).subscribe(response=>{
      this.keyword = response['keyword'];
      this.description = response['description'];
    })
  
  }

  submit(){
    if(this.updateKeywordForm.valid){
        this.keywordService.updateKeyword(this.id , this.updateKeywordForm.value).subscribe(response=>{
          console.log(response);
          this.router.navigate(['admin/keywords']);  
        })
    }
  }

  keyword;
  description;

}
