import { Component, OnInit } from '@angular/core';
import { AlertService } from '../alert-service/alert.service';
import { Goal } from '../goal';
import { GoalService } from  '../goal-service/goal.service'
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';



@Component({
  selector: 'app-goal', 
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
   
})
export class GoalComponent implements OnInit {
  username!: string;
  github: any;
  repos: any;
  user: any;
  //  public githubUser:string;
  search() {
    // this service.GitRequest
    this.http
      .get(
        'https://api.github.com/users/' +
          this.username +
          '?access_token'
      )
      .subscribe((github) => {
        this.github = github;
      });
  }
  goals:Goal[];
  alertService:AlertService;


  constructor(goalService:GoalService, alertService:AlertService,private http:HttpClient) {
    this.goals = goalService.getGoals()
    this.alertService = alertService;
  }
  toggleDetails(index:any){
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }
  ngOnInit()  {
  
  }
    }
    
function index(_goal: any, _index: any) {
  throw new Error('Function not implemented.');
}

function enableProdMode() {
  throw new Error('Function not implemented.');
}
