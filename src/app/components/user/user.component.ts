import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  @Input()
  username: string = '';
  
  @Output()
  changeUser: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onSubmit(){
    
  }
}
