import { Component } from "@angular/core";

@Component({
    selector :'app-about',
    templateUrl: './done.component.html',
})

export class DoneComponent {
    data = [
        {
            "id": "Task 8",
            "desc": "Test the application in the IE browser",
            "field ": "done ",
        },
        {
            "id": "Task 9",
            "desc": "I don't know",
            "field ": "done ",
        },
        {
            "id": "Task 13",
            "desc": "Analyze SQL server 2008 connection",
            "field ": "done ",
        },
        {
            "id": "Task 14",
            "desc": "Contact Client",
            "field ": "done ",
        },
        {
            "id": "Task 2",
            "desc": "Improve application performance",
            "field ": "done",
        },
    ]
}