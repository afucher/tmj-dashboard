import { Component, OnInit } from '@angular/core';
import { JiraService } from '../jira.service';

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
          .then(issues => {
            this.issues = issues.reduce( (counter: Array<any>, issue: any) => {
              let parent = issue.fields ? issue.fields.parent : null;
              if(parent){
                let index = counter.findIndex(issue => issue.key == parent.key );
                index >= 0 ? counter[index].count++ : counter.push(this.mountObject(parent));
              }
              return counter;
            },[]);
          });
  }

  private mountObject( parentIssue : any ){
    return {key: parentIssue.key, count : 1, url: parentIssue.url, status: parentIssue.fields.status.name};
  }

  ngOnInit() {
  }

}
