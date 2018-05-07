import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ThfModule } from '@totvs/thf-ui';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { SprintIssuesComponent } from './sprint-issues/sprint-issues.component';
import { IssuesAssociationComponent } from './issues-association/issues-association.component';
import { IssueAssociationGridComponent } from './issue-association-grid/issue-association-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    SprintIssuesComponent,
    IssuesAssociationComponent,
    IssueAssociationGridComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ThfModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
