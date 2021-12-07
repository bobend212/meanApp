import { Injectable } from "@angular/core";
import { Record } from "./record.model";
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class RecordsService {
    private records: Record[] = [];
    private recordsUpdated = new Subject<Record[]>();

    constructor(private http: HttpClient) { }

    getRecords() {
        this.http.get<{message: string, records: Record[] }>('http://localhost:3000/api/records').subscribe((recordsData) => {
            this.records = recordsData.records;
            this.recordsUpdated.next([...this.records]);
        });
    }

    getRecordUpdateListener() {
        return this.recordsUpdated.asObservable();
    }

    addRecord(title: string, measure: string) {
        const record: Record = {
            id: null,
            title: title,
            measure: measure
        };
        this.http.post<{message: string }>('http://localhost:3000/api/records', record).subscribe((responseData) => {
            console.log(responseData.message);
        });
        this.records.push(record);
        this.recordsUpdated.next([...this.records]);
    }
}