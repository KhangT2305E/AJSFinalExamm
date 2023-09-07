import { Component } from "@angular/core";

@Component({
    selector :'app-about',
    templateUrl: './inprogress.component.html',
})

export class InprogressComponent {
    data = [
        {
            "id": "Task 4",
            "desc": "Fix the issues reported in the IE browser",
            "field ": "in_progress ",
        },
        {
            "id": "Task 11",
            "desc": "Fix cannot open user's default database SQL error",
            "field ": "in_progress ",
        },
        {
            "id": "Task 17",
            "desc": "Improve the performance of the ending fuctionality",
            "field ": "in_progress ",
        },
        {
            "id": "Task 19",
            "desc": "Check feedback",
            "field ": "in_progress ",
        },
        {
            "id": "Task 5",
            "desc": "Fix the issues reported by the customer",
            "field ": "in_progress",
        },
    ]
}