import { Component, OnInit } from '@angular/core';
import { ExamService } from '../exam.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
    username: ''
  }
  constructor(private _examService: ExamService, private _router: Router) { }

  ngOnInit() {
    
  }

  onSubmit() {
    console.log(this.user.username)
    this._examService.login(this.user.username)
    this._router.navigate(['/','dashboard'])
  }
}
