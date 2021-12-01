import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Record } from '../record.model';
import { RecordsService } from '../records.service';

@Component({
  selector: 'app-record-list',
  templateUrl: './record-list.component.html',
  styleUrls: ['./record-list.component.css']
})
export class RecordListComponent implements OnInit, OnDestroy {

  records: Record[] = [];
  private recordsSub: Subscription

  constructor(public recordsService: RecordsService) { }

  ngOnDestroy() {
    this.recordsSub.unsubscribe();
  }

  ngOnInit() {
    this.records = this.recordsService.getRecords();
    this.recordsSub = this.recordsService.getRecordUpdateListener().subscribe((records: Record[]) => {
      this.records = records;
    });
  }

}
