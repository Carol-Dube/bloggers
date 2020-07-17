import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import {Users} from 'src/app/mock-file';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // user = Users;

  constructor(private router: Router) { }
  emailAddress: String;
  password: String;




  ngOnInit(): void {
  }

}
