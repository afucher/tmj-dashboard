import { Component, OnInit, Input } from '@angular/core';
import { ThfTableColumn } from '@totvs/thf-core/components/thf-table-base/';

@Component({
  selector: 'app-issue-association-grid',
  templateUrl: './issue-association-grid.component.html',
  styleUrls: ['./issue-association-grid.component.css']
})
export class IssueAssociationGridComponent implements OnInit {
  columns: ThfTableColumn[] = [
    {column: "key", label:"Key"},
    {column: "associationCount", label:"Qtd. Associados"},
    {column: "status", label: "Status"},
    {column: "sla", label: "SLA"},
  ]

  private _issues: Array<any>;
  
   @Input()
   set issues(issues: Array<any>) {
     this._issues = issues.map( issue => {
       issue["associationCount"] = issue.association.length;
       return issue;
     });
   }

   get issues(): Array<any> { return this._issues };
  constructor() { }

  ngOnInit() {
  }

}
