import { Injectable } from "@angular/core";
import { Record } from "./record.model";
import { Subject } from "rxjs";

@Injectable({providedIn: 'root'})
export class RecordsService {
    private records: Record[] = [];
    private recordsUpdated = new Subject<Record[]>();

    getRecords() {
        return [...this.records];
    }

    getRecordUpdateListener() {
        return this.recordsUpdated.asObservable();
    }

    addRecord(title: string, measure: string) {
        const record: Record = {
            title: title,
            measure: measure
        };
        this.records.push(record);
        this.recordsUpdated.next([...this.records]);
    }
}