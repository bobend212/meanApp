import { Injectable } from "@angular/core";
import { Record } from "./record.model";
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({providedIn: 'root'})
export class RecordsService {
    private records: Record[] = [];
    private recordsUpdated = new Subject<Record[]>();

    constructor(private http: HttpClient) { }

    getRecords() {
        this.http.get<{message: string, records: any }>('http://localhost:3000/api/records')
        .pipe(map((recordsData) => {
            return recordsData.records.map(record => {
                return {
                    title: record.title,
                    measure: record.measure,
                    id: record._id
                };
            });
        }))
        .subscribe((transformedRecords) => {
            this.records = transformedRecords;
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
        this.http.post<{message: string, recordId: string }>('http://localhost:3000/api/records', record).subscribe(responseData => {
            const id = responseData.recordId;
            record.id = id;
            this.records.push(record);
            this.recordsUpdated.next([...this.records]);;
        });
    }

    deleteRecord(recordId: string) {
        this.http.delete('http://localhost:3000/api/records/' + recordId).subscribe(() => {
            const updatedRecords = this.records.filter(record => record.id !== recordId);
            this.records = updatedRecords;
            this.recordsUpdated.next([...this.records]);
        });
    }
}