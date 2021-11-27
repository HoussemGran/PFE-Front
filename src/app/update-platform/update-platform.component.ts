import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlatformService } from '../Services/platform/platform.service';

@Component({
  selector: 'app-update-platform',
  templateUrl: './update-platform.component.html',
  styleUrls: ['./update-platform.component.css']
})
export class UpdatePlatformComponent implements OnInit {

  constructor(private route : ActivatedRoute , 
    private router : Router,    
    private platformService : PlatformService) { }
  
    updatePlatformForm : FormGroup;
  
    private id = this.route.snapshot.paramMap.get('id');
  
    ngOnInit(): void {
  
      this.updatePlatformForm = new FormGroup({
        platform:new FormControl(this.platform , Validators.required),
        description:new FormControl(this.description),
        onDesign:new FormControl(this.onDesign),
        onExecution:new FormControl(this.onExecution)
      })
  
      this.platformService.findPlatform(this.id).subscribe(response=>{
        this.platform = response['platform'];
        this.description = response['description'];
        this.onDesign = response['onDesign'];
        this.onExecution = response['onExecution'];
      })
    
    }
  
    submit(){
      if(this.updatePlatformForm.valid){
          this.platformService.updatePlatform(this.id , this.updatePlatformForm.value).subscribe(response=>{
            console.log(response);
            this.router.navigate(['admin/platforms']);  
          })
      }
    }
  
    platform;
    description;
    onDesign;
    onExecution;

}
