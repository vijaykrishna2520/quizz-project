import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { question } from '../model/questionModel';
import { homeService } from './home.service';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  display!: number;
  @ViewChild('gender') public gender!: NgForm;

  quiz!: question[];
  name: string[] = ['cricketer', 'pm', 'cm'];
  answer: number = 0;
  correctAnswer: string[] = ['kohli', 'Modi', 'jagan'];
  currentValue: number = 0;

  constructor(private _homeService: homeService, private route: Router) {}
  ngOnInit() {
    this.quiz = this._homeService.getquiz();
  }
  next() {
    this.currentValue++;
  }
  previous() {
    if (this.currentValue > 0) {
      this.currentValue--;
    }
  }
  set(event: string, index: number) {
    if (this.correctAnswer[index] == event) {
      console.log(event);
      console.log(index);
      this.answer++;
    }
    // index++;
    // // if (index >= this.quiz.length) {
    // //   index--;
    // //   console.log(this.answer);
    // }
  }
  // function() {
  //   if (
  //     this.answer.length === this.correctAnswer.length &&
  //     this.answer.every((val, index) => val === this.correctAnswer[index])
  //   ) {
  //     console.log('your score is 100%');
  //     this.display = '100%';
  //   } else if (
  //     this.answer[0] == this.correctAnswer[0] &&
  //     this.answer[1] == this.correctAnswer[1] &&
  //     this.answer[2] != this.correctAnswer[2]
  //   ) {
  //     console.log('your score is 66%');
  //     this.display = '66%';
  //   } else if (
  //     this.answer[0] == this.correctAnswer[0] &&
  //     this.answer[2] == this.correctAnswer[2] &&
  //     this.answer[1] != this.correctAnswer[1]
  //   ) {
  //     console.log('your score is 66%');
  //     this.display = '66%';
  //   } else if (
  //     this.answer[1] == this.correctAnswer[1] &&
  //     this.answer[2] == this.correctAnswer[2] &&
  //     this.answer[0] != this.correctAnswer[0]
  //   ) {
  //     console.log('your score is 66%');
  //     this.display = '66%';
  //   } else if (
  //     (this.answer[0] == this.correctAnswer[0] &&
  //       this.answer[1] != this.correctAnswer[1] &&
  //       this.answer[2] != this.correctAnswer[2]) ||
  //     (this.answer[0] != this.correctAnswer[0] &&
  //       this.answer[1] == this.correctAnswer[1] &&
  //       this.answer[2] != this.correctAnswer[2]) ||
  //     (this.answer[0] != this.correctAnswer[0] &&
  //       this.answer[1] != this.correctAnswer[1] &&
  //       this.answer[2] == this.correctAnswer[2])
  //   ) {
  //     console.log('your score is 33%');
  //     this.display = '33%';
  //   } else {
  //     console.log('your score is zero');
  //     this.display = 'zero';
  //   }
  // }

  onSubmit() {
    this.display = Math.ceil((this.answer / 3) * 100);
    console.log('your score is' + this.display);

    this.route.navigate(['submit'], { queryParams: { data: this.display } });
  }
}
