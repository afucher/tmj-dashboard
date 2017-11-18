import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { SprintIssuesComponent } from './sprint-issues/sprint-issues.component';
import { IssuesAssociationComponent } from './issues-association/issues-association.component';

const routes: Routes = [
  {path: 'sprint-issues', component: SprintIssuesComponent},
  {path: 'issues-association', component: IssuesAssociationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
