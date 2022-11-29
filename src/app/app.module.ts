import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddFriendComponent } from './add-friend/add-friend.component';
import { ViewFriendComponent } from './view-friend/view-friend.component';
import { SearchFriendComponent } from './search-friend/search-friend.component';
import { RouterModule, Routes } from '@angular/router';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'


const myRoute:Routes=[
  {
    path: "",
    component:AddFriendComponent
  },
  {
    path:"viewFriend",
    component:ViewFriendComponent
  },
  {
    path:"searchFriend",
    component:SearchFriendComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    AddFriendComponent,
    ViewFriendComponent,
    SearchFriendComponent,
    NavigationbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
