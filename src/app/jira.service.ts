import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class JiraService {
    private apiUrl = 'http://localhost:3000/sprints/123/issues';

    constructor(private http: Http){};
    getSprintIssues(sprint: string): Promise<object[]>{
        return this.http.post(this.apiUrl,"")
        .toPromise()
        .then(response => response.json().data as object[])
        .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
      console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
    }
}