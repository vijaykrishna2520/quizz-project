import { Injectable } from '@angular/core';
import { question } from '../model/questionModel';

@Injectable()
export class homeService {
  private letquiz: question[] = [
    {
      questionNo: 1,
      questionName: 'who is greatest cricketer',
      options: [1, 2, 3, 4],
      optionName: ['smith', 'kohli', 'dhoni', 'gayle'],
    },
    {
      questionNo: 2,
      questionName: 'who is Indian prime minister',
      options: [1, 2, 3, 4],
      optionName: ['Modi', 'Imran', 'KCr', 'gayle'],
    },
    {
      questionNo: 3,
      questionName: 'who is Ap cm',
      options: [1, 2, 3, 4],
      optionName: ['Modi', 'jagan', 'ChandraBabu', 'Pavan'],
    },
  ];

  getquiz(): question[] {
    return this.letquiz;
  }
}
