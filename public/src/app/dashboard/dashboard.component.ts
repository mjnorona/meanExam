import { Component, OnInit } from '@angular/core';
import { ExamService } from '../exam.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  polls = {}

  constructor(private _examService: ExamService) { }

  ngOnInit() {
    this.getAll()
  }

  getAll() {
    console.log('getting all')
    this._examService.retrievePolls()
    .then(data => {
      return this.polls = data
    })
    .catch(err => console.log(err))
  }

  delete(id){
    console.log('deleting', id)
    this._examService.deletePoll(id)
    .then(data => {
      return this.polls = data
    })
    .catch(err => console.log(err))
    this.getAll()
  }
}
