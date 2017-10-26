import { Injectable } from '@angular/core';

@Injectable()
export class JiraService {
    getSprintIssues(sprint: string): object{
        return {"issues":[{
            "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
            "id": "507456",
            "self": "http://localhost/rest/agile/1.0/issue/507456",
            "key": "DFRM1-3175",
            "fields": {
              "summary": "Issue01",
              "description": "Explicação da issue01 bem mais completa"
            }
          },
          {
            "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
            "id": "486141",
            "self": "http://localhost/rest/agile/1.0/issue/486141",
            "key": "DFRM1-2913",
            "fields": {
              "summary": "Issue02",
              "description": "Explicação da issue02 bem mais completa"
            }
          }]};
    }
}