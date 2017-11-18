import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class JiraService {
    private apiUrl = 'http://localhost:3000/';

    constructor(private http: Http){};
    getSprintIssues(sprint: string): Promise<object[]>{
      let url = this.apiUrl + 'sprints/' + sprint + '/issues';
      return this.http.post(url,"")
        .toPromise()
        .then(response => response.json().issues as object[])
        .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
      console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
    }

    getAssociationIssues(project: string): Promise<object[]>{
      let url = this.apiUrl + 'projects/' + project + '/issues/associacao';
      return this.http.get(url,"")
        .toPromise()
        .then(response => response.json() as object[])
        .catch(this.handleError);
    }
}
