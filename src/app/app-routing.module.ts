import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBuildComponent } from './add-build/add-build.component';
import { AddKeywordComponent } from './add-keyword/add-keyword.component';
import { AddPlatformComponent } from './add-platform/add-platform.component';
import { AddTestCaseComponent } from './add-test-case/add-test-case.component';
import { AddTestPlanComponent } from './add-test-plan/add-test-plan.component';
import { AddTestProjectComponent } from './add-test-project/add-test-project.component';
import { AddTestSuiteComponent } from './add-test-suite/add-test-suite.component';
import { AddToTestPlansComponent } from './add-to-test-plans/add-to-test-plans.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { BuildsComponent } from './builds/builds.component';
import { ChartComponent } from './chart/chart.component';
import { ExecuteTestCaseComponent } from './execute-test-case/execute-test-case.component';
import { ExecutionComponent } from './execution/execution.component';
import { GuestDashboardComponent } from './guest-dashboard/guest-dashboard.component';
import { KeywordsGuestComponent } from './keywords-guest/keywords-guest.component';
import { KeywordsComponent } from './keywords/keywords.component';
import { LibraryComponent } from './library/library.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { PlatformsComponent } from './platforms/platforms.component';
import { RegisterComponent } from './register/register.component';
import { TestCaseComponent } from './test-case/test-case.component';
import { TestCasesGuestComponent } from './test-cases-guest/test-cases-guest.component';
import { TestPlanComponent } from './test-plan/test-plan.component';
import { TestProjectInfoComponent } from './test-project-info/test-project-info.component';
import { TestProjectComponent } from './test-project/test-project.component';
import { TestSpecificationComponent } from './test-specification/test-specification.component';
import { TestSuiteComponent } from './test-suite/test-suite.component';
import { UpdateKeywordComponent } from './update-keyword/update-keyword.component';
import { UpdatePlatformComponent } from './update-platform/update-platform.component';
import { UpdateTestPlanComponent } from './update-test-plan/update-test-plan.component';
import { UpdateTestProjectComponent } from './update-test-project/update-test-project.component';
import { UpdateTestSuiteComponent } from './update-test-suite/update-test-suite.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UsersComponent } from './users/users.component';
import { YourGuardGuard } from './your-guard.guard';

const routes: Routes = [
  {path:"" , redirectTo:"login" , pathMatch:"full"},
 
  {path:"register" , component:RegisterComponent},
 
  {path:"login",component:LoginFormComponent},
 
  {path:"admin",component:AdminDashboardComponent , canActivate:[YourGuardGuard]},
 
  {path:'guest',component:GuestDashboardComponent , canActivate:[YourGuardGuard]},
 
  {path:'admin/testproject',component:TestProjectComponent ,canActivate:[YourGuardGuard]},
  {path:'admin/testproject/add' , component:AddTestProjectComponent , canActivate:[YourGuardGuard]},
  {path:'admin/testproject/:id' , component:UpdateTestProjectComponent ,canActivate:[YourGuardGuard]},
 
  {path:'admin/testplan', component:TestPlanComponent , canActivate:[YourGuardGuard]},
  {path:"admin/testplan/add",component:AddTestPlanComponent , canActivate:[YourGuardGuard]},
  {path:"admin/testplan/:id" , component:UpdateTestPlanComponent ,canActivate:[YourGuardGuard]},
  
  {path:"admin/users",component:UsersComponent ,canActivate:[YourGuardGuard]},
  {path:"admin/users/add",component:AddUserComponent, canActivate:[YourGuardGuard]},
  {path:"admin/users/:id",component:UpdateUserComponent , canActivate:[YourGuardGuard]},
 
  {path:"admin/testspecification",component:TestSpecificationComponent , canActivate:[YourGuardGuard]},
  {path:"admin/testspecification/addTS",component:AddTestSuiteComponent , canActivate:[YourGuardGuard]},
  {path:'admin/testspecification/project',component:TestProjectInfoComponent,canActivate:[YourGuardGuard]},
  {path:'admin/testspecification/testsuite/:id',component:TestSuiteComponent,canActivate:[YourGuardGuard]},
  {path:"admin/testspecification/testsuite/:id/addTC",component:AddTestCaseComponent,canActivate:[YourGuardGuard]},
  {path:"admin/testspecification/testsuite/:id/update",component:UpdateTestSuiteComponent,canActivate:[YourGuardGuard]}, 
  {path:"admin/testspecification/testcase/:id",component:TestCaseComponent,canActivate:[YourGuardGuard]},

  {path:"admin/testspecification/testcase/:id/addtotestplan",component:AddToTestPlansComponent},


  {path:'admin/keywords',component:KeywordsComponent , canActivate:[YourGuardGuard]},
  {path:'admin/keywords/add',component:AddKeywordComponent , canActivate:[YourGuardGuard]},
  {path:'admin/keywords/:id',component:UpdateKeywordComponent,canActivate:[YourGuardGuard]},

  {path:'admin/platforms',component:PlatformsComponent , canActivate:[YourGuardGuard]},
  {path:'admin/platforms/add',component:AddPlatformComponent , canActivate:[YourGuardGuard]},
  {path:'admin/platforms/:id',component:UpdatePlatformComponent,canActivate:[YourGuardGuard]},
  
  {path:"admin/builds",component:BuildsComponent , canActivate:[YourGuardGuard]},
  {path:"admin/builds/add",component:AddBuildComponent , canActivate:[YourGuardGuard]},

  {path:"admin/execution", component:ExecutionComponent , canActivate:[YourGuardGuard]},
  {path:"admin/execution/:id",component:ExecuteTestCaseComponent,canActivate:[YourGuardGuard]},

  {path:"admin/chart" , component:ChartComponent , canActivate:[YourGuardGuard]},
  {path:'guest/chart',component:ChartComponent , canActivate:[YourGuardGuard]},

  {path:"admin/library", component:LibraryComponent, canActivate:[YourGuardGuard]},

  {path:'guest/testcases',component:TestCasesGuestComponent,canActivate:[YourGuardGuard]},
  {path:'guest/keywords' , component:KeywordsGuestComponent , canActivate:[YourGuardGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
