import { Component, OnInit } from '@angular/core';
import { ExamService } from '../exam.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.css']
})
export class CreateQuestionComponent implements OnInit {
  creation = {
    question: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
  }

  constructor(private _examService: ExamService, private _router: Router) { }

  ngOnInit() {

  }

  onSubmit() {
    console.log(this.creation)
    console.log(this._examService.getUser())
    this._examService.createPoll(this.creation, this._examService.getUser())
    .then(notes => console.log(this.creation))
    .catch(err => console.log(err))
    this._router.navigate(['/', 'dashboard'])

  }
}
