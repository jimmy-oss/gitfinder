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
          '?access_token=d159b220b68555f012a7225b56518b449e92429e'
      )
      .subscribe((github) => {
        this.github = github;
      });
  }
}
