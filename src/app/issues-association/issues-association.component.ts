import { Component, OnInit } from '@angular/core';
import { JiraService } from '../jira.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';

@Component({
  selector: 'app-sprint-issues',
  templateUrl: './issues-association.component.html',
  styleUrls: ['./issues-association.component.css'],
  providers: [JiraService]
})
export class IssuesAssociationComponent implements OnInit {

  private project: string;
  private issues;

  constructor(private jiraService: JiraService) { }

  getIssues(): void {
    if(this.project)
      this.issues = [];
      this.jiraService.getAssociationIssues(this.project)
          .subscribe(issues => {
            this.issues = issues.reduce( (counter: Array<any>, issue: any) => {
              let parent = issue.fields ? issue.fields.parent : null;
              if(parent){
                let index = counter.findIndex(issue => issue.key == parent.key );
                if(index < 0){
                  counter.push(this.mountObject(parent));
                  index = counter.length-1;
                }

                counter[index].association.push({key:issue.key});

              }
              return counter;
            },[])

            this.issues.forEach(issue => {
              let issuesAssociation = issue.association.reduce( (issueIDs: string, issueAssociated: any) => {
                return issueIDs + issueAssociated.key + ',';
              },"");
              issuesAssociation += issue.key;
              this.jiraService.getIssueSLA(issuesAssociation)
                  .subscribe(issuesSLA => {
                    let minorSLA = issuesSLA.reduce( (date: string, issueSLA: any ) => {
                      if(date == "") return issueSLA.sla;

                      var parts =date.split('/');
                      var d1 = Number(parts[2] + parts[1] + parts[0]);
                      parts =issueSLA.sla.split('/');
                      var d2 = Number(parts[2] + parts[1] + parts[0]);

                      if(d2 < d1) return issueSLA.sla;

                      return date;

                    },"");
                  issue['sla'] = minorSLA;
                })
            });
          })         
  }

  private mountObject( parentIssue : any ){
    return {key: parentIssue.key, association : [], url: parentIssue.url, status: parentIssue.fields.status.name};
  }

  ngOnInit() {
  }

}
