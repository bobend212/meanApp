import { Component } from '@angular/core';
import { Record } from './records/record.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  storedRecords: Record[] = [];

  onRecordAdded(record) {
    this.storedRecords.push(record);
  }
}
