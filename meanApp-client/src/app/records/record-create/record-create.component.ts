import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Record } from "../record.model";
import { RecordsService } from "../records.service";

@Component({
    selector: 'app-record-create',
    templateUrl: './record-create.component.html',
    styleUrls: ['./record-create.component.css']
})
export class RecordCreateComponent {

    constructor(public recordsService: RecordsService) {}

    onAddRecord(form: NgForm) {
        if (form.invalid) return;
        this.recordsService.addRecord(form.value.title, form.value.measure);
        form.resetForm();
    }
}