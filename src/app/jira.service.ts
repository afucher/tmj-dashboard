import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class JiraService {
    //private apiUrl = 'http://10.172.55.78:3000/';
    private apiUrl = 'http://10.172.152.35:3000/';

    constructor(private http: HttpClient){};
    getSprintIssues(sprint: string): Observable<object[]>{
      let url = this.apiUrl + 'sprints/' + sprint + '/issues';
      return this.http.post(url,"", { observe: 'response' })
        .map(res => res.body);
    }

    private handleError(error: any): any {
      console.error('An error occurred', error); // for demo purposes only
      return Observable.throw(error.message || error);
    }

    getAssociationIssues(project: string): Observable<any[]>{
      let url = this.apiUrl + 'projects/' + project + '/issues/associacao';
      return this.http.get(url, { observe: 'response' })
        .map(response => response.body)
        .catch(this.handleError);
    }

    getIssueSLA(issueID: string): Observable<any>{
      let url = this.apiUrl + 'issues/SLA';
      let params: URLSearchParams = new URLSearchParams();
      params.set('issuedIDs', issueID);
      return this.http.get(url, {params:{issueIDs:issueID},observe:'response'})
              .map(response => response.body)
              .catch(this.handleError);
    }
}
