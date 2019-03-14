import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { EducationComponent } from './education/education.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { TestServiceComponent } from './test-service/test-service.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkExperienceComponent,
    EducationComponent,
    ContactInfoComponent,
    TestServiceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }