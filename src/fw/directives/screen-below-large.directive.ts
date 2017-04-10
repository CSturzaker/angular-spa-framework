import { Directive, Input, OnDestroy, TemplateRef, ViewContainerRef } from '@angular/core';

import { ScreenService } from '../services/screen.service';
import { Subscription } from 'rxjs/Subscription';

@Directive({selector: '[screenBelowLarge]'})
export class ScreenBelowLarge implements OnDestroy {
    private hasView: boolean = false;
    private screenSubscription: Subscription;

    constructor(private viewContainer: ViewContainerRef,
                private template: TemplateRef<Object>,
                private screenServce: ScreenService) {
        
        this.screenSubscription = screenServce.resize$.subscribe(() => this.onResize());
    }

    @Input()
    set screenLarge(condition) {
        //ignore the passed condition and set it based on screen size
        condition = this.screenServce.screenWidth < this.screenServce.largeBreakpoint;

        if (condition && !this.hasView) {
            this.hasView = true;
            this.viewContainer.createEmbeddedView(this.template);
        } else if (!condition && this.hasView) {
            this.hasView = false;
            this.viewContainer.clear();
        }
    }

    //normally angular unsubscribes authomatically from observables but we need
    //to do it manually
    ngOnDestroy() {
        this.screenSubscription.unsubscribe();
    }

    onResize() {
        //trigger the setter
        this.screenLarge = false;
    }
} 
