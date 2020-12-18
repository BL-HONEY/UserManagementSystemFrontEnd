import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddNewUserComponent } from './components/add-new-user/add-new-user.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppMaterial } from './app.material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { ViewUserComponent } from './components/view-user/view-user.component';


@NgModule({
  declarations: [
    AppComponent,
    AddNewUserComponent,
    AllUsersComponent,
    ViewUserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppMaterial,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [],
  entryComponents: [
   ViewUserComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
