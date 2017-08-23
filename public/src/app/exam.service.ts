import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ExamService {
  user = {}
  constructor(private _http: Http) { }

  login(user){
    this.user = user
    console.log('logged in user', this.user)
  }

  getUser() {
    return this.user
  }

  retrievePolls() {
    return this._http.get('/polls')
    .map(data => data.json())
    .toPromise()
  }

  retrievePoll(id){
    console.log('here')
    return this._http.get('/pollData/'+id)
    .map(data => data.json())
    .toPromise()
  }

  createPoll(data, user){
    console.log('gathering data')
    return this._http.post('/poll/create', {data: data, user: user})
    .map( data => data.json())
    .toPromise();
  }
  
  upVote(id){
    console.log('options id', id)
    return this._http.post('/optionVote', {id: id})
    .map( data => data.json())
    .toPromise();
  }

  deletePoll(id){
    console.log('deleted', id)
    return this._http.post('/deletion', {id: id})
    .map( data => data.json())
    .toPromise();
  }
}
