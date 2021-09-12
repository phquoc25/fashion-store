import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
    template: '',
})
export class SharedSubscriptionComponent implements OnDestroy {
    protected notifier = new Subject();

    constructor() {}

    ngOnDestroy() {
        this.notifier.next();
        this.notifier.complete();
    }
}
