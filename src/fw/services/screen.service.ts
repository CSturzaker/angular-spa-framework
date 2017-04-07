import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ScreenService {
  private resizeSource = new Subject<null>();
  resize$ = this.resizeSource.asObservable(); //$ is convention to let people know it's an observable that can be subscribed to

  //public properties
  largeBreakpoint = 800;
  screenWidth = 1000;
  screenHeight = 800;

  constructor() {
    
    try {
      this.screenWidth = window.innerWidth;
      this.screenHeight = window.innerHeight;
      window.addEventListener('resize', (event) => this.onResize(event));
    } catch (error) {
      //default screen dimensions
    }
  }

  isLarge(): boolean {
    return this.screenWidth >= this.largeBreakpoint;
  }

  onResize($event): void {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    this.resizeSource.next();
  }

}
