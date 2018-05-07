import { Component, OnInit, Input } from '@angular/core';
import { ThfTableColumn, ThfTableAction } from '@totvs/thf-ui/components/thf-table/';

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
    {column: "sla", label: "SLA", type: "date"},
  ]

  issueActions: ThfTableAction[] = [
    { action: 'openUrl', label: 'Abrir Issue' }
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

   openUrl(item) {
     //console.log("teste");
     window.open(item.url, "_blank");
   }

  constructor() { }

  ngOnInit() {
  }

}
