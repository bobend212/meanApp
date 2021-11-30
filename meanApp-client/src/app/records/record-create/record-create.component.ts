import { Component } from "@angular/core";

@Component({
    selector: 'app-record-create',
    templateUrl: './record-create.component.html',
    styleUrls: ['./record-create.component.css']
})
export class RecordCreateComponent {
    enteredValue = '';
    newRecord = 'empty string';

    onAddRecord() {
        this.newRecord = this.enteredValue;
    }
}