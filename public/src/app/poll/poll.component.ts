import { Component, OnInit } from '@angular/core';
import { ExamService } from '../exam.service';
import { Router, ActivatedRoute } from '@angular/router';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {
  poll = {}
  constructor(private _route: ActivatedRoute, private _examService: ExamService) { 
    
    this.getPoll()
  }

  ngOnInit() {
  }

  getPoll() {
    console.log('going in here')
    this._route.paramMap
      .switchMap(params => {
        console.log("id: ", params.get('id'));
        return this._examService.retrievePoll(params.get('id'));
    })
    .subscribe(poll => this.poll = poll);
  }
  
  vote(id) {
    console.log('going in id function', id)
    this._examService.upVote(id)
    .then(data => {
      console.log(data)
    })
    .catch(err => console.log(err))
    this.getPoll()
  }
}
