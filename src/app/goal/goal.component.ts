import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal', 
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
   
    

  goals: Goal[] = [
    new Goal(1, 'Dwell on the beauty of life', 'Watch the stars, and see yourself running with them.Marcus Aurelius',new Date(2021,6,7)),
    new Goal(2,'Nothing is impossible', 'The word itself says ‘I’m possible’!” Audrey Hepburn',new Date(2021,6,9)),
    new Goal(3,'Courage doesn’t always roar', 'Sometimes courage is the little voice at the end of the day that says ‘I’ll try again tomorrow. Mary Anne Radmacher',new Date(2021,1,12)),
    new Goal(4,'Count your age by friends', 'Not years. Count your life by smiles, not tears.”John Lennon',new Date(2021,5,10)),
    new Goal(5,'Laughter is timeless', 'Imagination has no age. And dreams are forever.” Walt Disney',new Date(2021,5,8)),
    new Goal(6,'There is only one thing that makes a dream impossible to achieve', 'The fear of failure.”Paulo Coelho',new Date(2021,7,9)),
  ];
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
      }
    }
  }
  toggleDetails(index:any){
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }
  addNewGoal(goal:any){
    let goalLength = this.goals.length;
    goal.id = goalLength+1;
    goal.completeDate = new Date(goal.completeDate)
    this.goals.push(goal);
  }
  
  constructor() { }
 
  ngOnInit()  {
  }

}

function index(goal: any, index: any) {
  throw new Error('Function not implemented.');
}
 