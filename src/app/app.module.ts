import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ThfModule } from '@totvs/thf-web';
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
    ThfModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
