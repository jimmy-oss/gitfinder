import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.css']
})
export class GoalDetailComponent implements OnInit {
  goalDelete(complete:boolean){
    this.isComplete.emit(complete);
  }

  @Input()
  goal!: Goal;
  @Output() isComplete = new EventEmitter<boolean>();

  goalComplete(complete:boolean){
    this.isComplete.emit(complete);
}
  public numberOfUpVotes: number = 0;
  public numberOfDownVotes: number = 0;

  upVoteButtonClick() {
    this.numberOfUpVotes++;
  }

  downVoteButtonClick() {
    this.numberOfDownVotes--;
  }
  constructor() { }

  ngOnInit() {
  }

}
