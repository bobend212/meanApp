import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-record-list',
  templateUrl: './record-list.component.html',
  styleUrls: ['./record-list.component.css']
})
export class RecordListComponent implements OnInit {

  // records = [
  //   {title: 'First Record', content: 'first content'},
  //   {title: 'Sec Record', content: 'sec content'},
  //   {title: 'Third Record', content: 'third content'},
  //   {title: 'Fourth Record', content: 'fourth content'},
  //   {title: 'Fivth hRecord', content: 'fivth content'},
  // ];

  records = [];

  constructor() { }

  ngOnInit(): void {
  }

}
