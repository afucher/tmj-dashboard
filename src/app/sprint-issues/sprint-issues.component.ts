import { Component, OnInit } from '@angular/core';
import { JiraService } from '../jira.service';

@Component({
  selector: 'app-sprint-issues',
  templateUrl: './sprint-issues.component.html',
  styleUrls: ['./sprint-issues.component.css'],
  providers: [JiraService]
})
export class SprintIssuesComponent implements OnInit {

  private sprint: string;
  private issues;

  constructor(private jiraService: JiraService) { }

  getIssues(): void {
    if(this.sprint)
      this.jiraService.getSprintIssues(this.sprint)
          .subscribe(
            issues => {
              console.log(issues);
              this.issues = issues;
            });
  }

  ngOnInit() {
  }

}
