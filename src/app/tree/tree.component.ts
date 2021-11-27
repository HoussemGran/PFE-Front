import { FlatTreeControl, NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import {
  MatTreeNestedDataSource,
} from '@angular/material/tree';
import { TestProjectService } from '../Services/testProject/test-project.service';


class TestNode {
  id:any;
  name: string;
  childrens?: TestNode[];
  type:string
  

  constructor(id:any,name: string, type:string ,childrens?: TestNode[]) {
    this.id = id;
    this.name = name;
    this.childrens = childrens;
    this.type = type;
    
  }
}

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css'],
})
export class TreeComponent implements OnInit {
  treeControl = new NestedTreeControl<TestNode>((node) => node.childrens);
  dataSource = new MatTreeNestedDataSource<TestNode>();

  constructor(private projectService: TestProjectService) {}

  
  ngOnInit(): void {
    this.projectService.allTestProjects().subscribe((data) => {

      //console.log("ng onit response => " , data);

      this.dataSource.data = this.transform(data , this);
      
      //console.log("ng onit transform : => ",this.transform(data,this))
    });

    
  }

  // transformation

  transform(response:any , treeComponent : TreeComponent): TestNode[] {


    //console.log("response : => " , response);

    return response.map(item=>{
     return treeComponent.transformProject(item,treeComponent);
    });
  }

  transformProject(project:any , treeComponent : TreeComponent): TestNode {
    //console.log('projects : => ' , project);

    let childrens = project['testSuite']
      ?.filter((item) => item != undefined)
      ?.map((item) => {
        //console.log('trasnform project : ' , item);
        return treeComponent.transformTestSuite(item,treeComponent);

      });
    //console.log(childrens);
    return new TestNode(project._id,project['name'], 'project', childrens );
  }



  transformTestSuite(testSuite:any , treeComponent : TreeComponent): TestNode {
    //console.log('Transform test suite' , testSuite);

     let testSuiteChildrens =
      testSuite['testSuite']
        ?.filter((item) => item != undefined)
        ?.map(item=>{
         return  treeComponent.transformTestSuite(item,treeComponent)
        }) ?? [];
    let testCaseChildrens =
      testSuite['testCase']
        ?.filter((item) => item != undefined)
        ?.map(treeComponent.transformTestCase)??[]

    const childrens = testSuiteChildrens.concat(testCaseChildrens); 

    return new TestNode(testSuite._id,testSuite.name,'testsuite', childrens);
  }

  transformTestCase(testCase:any): TestNode {
    return new TestNode(testCase._id,testCase.title, 'testcase' , null);
  }


  hasChild = (_: number, node: TestNode) =>
    !!node.childrens && node.childrens.length > 0;



}
