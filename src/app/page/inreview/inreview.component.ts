import { Component } from "@angular/core";

@Component({
    selector :'app-about',
    templateUrl: './inreview.component.html',
})

export class InreviewComponent {
    data = [
        {
            "id": "Task 7",
            "desc": "Fix the issues reported in Safari browser",
            "field ": "in_review ",
        },
        {
            "id": "Task 12",
            "desc": "Fix the issues reported in data binding",
            "field ": "in_review ",
        },
        {
            "id": "Task 15",
            "desc": "Analyze grid control",
            "field ": "in_review ",
        },
        {
            "id": "Task 16",
            "desc": "Stored procedure for initial data binding of the gird",
            "field ": "in_review ",
        },
        {
            "id": "Task 18",
            "desc": "Update server",
            "field ": "in_review",
        },
    ]
}