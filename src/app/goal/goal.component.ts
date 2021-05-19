import { Component, OnInit } from '@angular/core';
import { AlertService } from '../alert-service/alert.service';
import { Goal } from '../goal';
import { GoalService } from '../goal-service/goal.service';
import { HttpClient } from '@angular/common/http';
import { Quote } from '../quote-class/quote';

@Component({
  selector: 'app-goal', 
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
   
})
export class GoalComponent implements OnInit {
          

  goals:Goal[];
  alertService:AlertService;
  quote!: Quote;

  constructor(goalService:GoalService, alertService:AlertService,private http:HttpClient) {
    this.goals = goalService.getGoals()
    this.alertService = alertService;
  }


 

addNewGoal(goal: { id: any; completeDate: string | number | Date; }){
  let goalLength = this.goals.length;
  goal.id = goalLength+1;
  goal.completeDate = new Date(goal.completeDate)

  this.goals.push()

    
}
   
  completeGoal(isComplete:boolean, index: any){
    if (isComplete) {
      this.goals.splice(index,1);
    }
    
  }
  deleteGoal(isComplete: boolean, index: number){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)

      if (toDelete){
        this.goals.splice(index,1)
        this.alertService.alertMe("This quote has been deleted")
      }
    }
  }
  toggleDetails(index:any){
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }
  ngOnInit() {

    interface ApiResponse{
      author:string;
      quote:string;
    }
 
    this.http.get<ApiResponse>("http://quotes.stormconsultancy.co.uk/random.json").subscribe(data=>{
      // Succesful API request
      this.quote = new Quote(data.author, data.quote)
  },
      err=>{
        this.quote = new Quote("Winston Churchill","Never never give up!")
        console.log("An error occurred")
    })
  }

}

function index(_goal: any, _index: any) {
  throw new Error('Function not implemented.');
}