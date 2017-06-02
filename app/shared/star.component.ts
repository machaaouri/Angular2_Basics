import {Component, OnChanges, Input} from '@angular/core';

@Component({
    selector : 'ai-star',
    templateUrl: 'app/shared/star.component.html',
    styleUrls :['app/shared/star.component.css']
})


export class StarComponent implements OnChanges {

    @Input() rating: number; // input decorator
    starWidth : number;


    ngOnChanges(): void {

        // Convert x out of 5 starts
        // to y out of 86px width
        this.starWidth = this.rating * 86/5;
    }

}