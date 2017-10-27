import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ThfModule } from '@totvs/thf-web';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { SprintIssuesComponent } from './sprint-issues/sprint-issues.component';

@NgModule({
  declarations: [
    AppComponent,
    SprintIssuesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ThfModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
