import { Component, OnInit } from '@angular/core';
import {TSDemo1} from './Shared/Demo1'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  t1 : TSDemo1;
  constructor(){
    this.t1 = new TSDemo1();
  }
  ngOnInit(){
    
  }
}
