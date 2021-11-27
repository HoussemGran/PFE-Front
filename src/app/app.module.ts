import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatCheckboxModule} from "@angular/material/checkbox";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatSelectModule} from "@angular/material/select";
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from '@angular/material/list';
import { GuestDashboardComponent } from './guest-dashboard/guest-dashboard.component';
import { TestProjectComponent } from './test-project/test-project.component';
import {MatTableModule} from '@angular/material/table';
import { AddTestProjectComponent } from './add-test-project/add-test-project.component';
import { UpdateTestProjectComponent } from './update-test-project/update-test-project.component';
import { TestPlanComponent } from './test-plan/test-plan.component';
import { UpdateTestPlanComponent } from './update-test-plan/update-test-plan.component';
import { AddTestPlanComponent } from './add-test-plan/add-test-plan.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UsersComponent } from './users/users.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { TestSpecificationComponent } from './test-specification/test-specification.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AddTestSuiteComponent } from './add-test-suite/add-test-suite.component';
import { AddTestCaseComponent } from './add-test-case/add-test-case.component';
import {MatTreeModule} from '@angular/material/tree';
import { TestProjectInfoComponent } from './test-project-info/test-project-info.component';
import {MatMenuModule} from '@angular/material/menu';
import { TreeComponent } from './tree/tree.component';
import { SpinnerOverlayComponent } from './spinner-overlay/spinner-overlay.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SpinnerInterceptor } from './spinner.interceptor';
import { TestSuiteComponent } from './test-suite/test-suite.component';
import { MatFileUploadModule } from 'angular-material-fileupload';
import { TestCaseComponent } from './test-case/test-case.component';
import { AddKeywordComponent } from './add-keyword/add-keyword.component';
import { KeywordsComponent } from './keywords/keywords.component';
import { AddPlatformComponent } from './add-platform/add-platform.component';
import { PlatformsComponent } from './platforms/platforms.component';
import { UpdateKeywordComponent } from './update-keyword/update-keyword.component';
import { UpdatePlatformComponent } from './update-platform/update-platform.component';
import { UpdateTestSuiteComponent } from './update-test-suite/update-test-suite.component';
import { MySettingsComponent } from './my-settings/my-settings.component';
import {MatChipsModule} from '@angular/material/chips';
import { AddToTestPlansComponent } from './add-to-test-plans/add-to-test-plans.component';
import { AddRemovePlatComponent } from './add-remove-plat/add-remove-plat.component';
import { AddBuildComponent } from './add-build/add-build.component';
import { BuildsComponent } from './builds/builds.component';
import { ExecutionComponent } from './execution/execution.component';
import { ExecuteTestCaseComponent } from './execute-test-case/execute-test-case.component';
import { ChartComponent } from './chart/chart.component';
import { LibraryComponent } from './library/library.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDialogModule} from '@angular/material/dialog';
import { TestCaseDialogComponent } from './test-case-dialog/test-case-dialog.component';
import { TestSuiteDialogComponent } from './test-suite-dialog/test-suite-dialog.component';
import { TestCasesLibComponent } from './test-cases-lib/test-cases-lib.component';
import { KeywordDialogComponent } from './keyword-dialog/keyword-dialog.component';
import { PlatformDialogComponent } from './platform-dialog/platform-dialog.component';
import { TestCaseToLibComponent } from './test-case-to-lib/test-case-to-lib.component';
import { KeywordsGuestComponent } from './keywords-guest/keywords-guest.component';
import { TestCasesGuestComponent } from './test-cases-guest/test-cases-guest.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    RegisterComponent,
    AdminDashboardComponent,
    NavbarComponent,
    GuestDashboardComponent,
    TestProjectComponent,
    AddTestProjectComponent,
    UpdateTestProjectComponent,
    TestPlanComponent,
    UpdateTestPlanComponent,
    AddTestPlanComponent,
    AddUserComponent,
    UsersComponent,
    UpdateUserComponent,
    TestSpecificationComponent,
    AddTestSuiteComponent,
    AddTestCaseComponent,
    TestProjectInfoComponent,
    TreeComponent,
    SpinnerOverlayComponent,
    TestSuiteComponent,
    TestCaseComponent,
    AddKeywordComponent,
    KeywordsComponent,
    AddPlatformComponent,
    PlatformsComponent,
    UpdateKeywordComponent,
    UpdatePlatformComponent,
    UpdateTestSuiteComponent,
    MySettingsComponent,
    AddToTestPlansComponent,
    AddRemovePlatComponent,
    AddBuildComponent,
    BuildsComponent,
    ExecutionComponent,
    ExecuteTestCaseComponent,
    ChartComponent,
    LibraryComponent,
    TestCaseDialogComponent,
    TestSuiteDialogComponent,
    TestCasesLibComponent,
    KeywordDialogComponent,
    PlatformDialogComponent,
    TestCaseToLibComponent,
    KeywordsGuestComponent,
    TestCasesGuestComponent,
    
  ],
  imports: [
    FormsModule,
    RouterModule.forRoot([
      
    ]),
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserModule,
    MatIconModule,
    MatToolbarModule,
    MatGridListModule,
    MatSelectModule,
    MatCardModule,
    MatListModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTreeModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatFileUploadModule,
    MatChipsModule,
    ScrollingModule,
    MatExpansionModule,
    MatDialogModule
    


  ],
  providers: [
    MatDatepickerModule,
    MatNativeDateModule,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpinnerInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
