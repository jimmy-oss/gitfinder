import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class QuoteRequestService {

  username!: string;
  github: any;
  repos: any;
  //  public githubUser:string;
  constructor(private http: HttpClient) {}

  ngOnInit() {}
  search() {
    // this service.GitRequest
    this.http
      .get(
        'https://api.github.com/users/' +
          this.username +
          '?access_token='
      )
      .subscribe((github) => {
        this.github = github;
      });
  }
}
