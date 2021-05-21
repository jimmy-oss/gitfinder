import { Injectable } from '@angular/core';
import { Goals } from '../goalList';


@Injectable({
  providedIn: 'root'
})
export class GoalService {
  getGoal: any;
  getGoals(){
    return Goals
  }

  constructor() { }
}