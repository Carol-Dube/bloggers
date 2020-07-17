import { Component, OnInit } from '@angular/core';
import { Blog } from '../../blog';
import { BLOGS} from '../../mock-blog'

// uncomment the following import in order to use Lodash
// import * as _ from 'lodash';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  blog: Blog[] = BLOGS;


  constructor() { }

  ngOnInit(): void {
  }

}
