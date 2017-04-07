import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { FrameworkBodyComponent } from './framework-body/framework-body.component';
import { ContentComponent } from './content/content.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ScreenService } from './services/screen.service';
import { ScreenBelowLarge } from './directives/screen-below-large.directive';
import { ScreenLarge } from './directives/screen-large.directive';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    ContentComponent,
    FrameworkBodyComponent,
    TitleBarComponent,
    TopBarComponent,
    ScreenLarge,
    ScreenBelowLarge
  ],
  providers: [
    ScreenService
  ],
  exports: [
    FrameworkBodyComponent
  ]
})
export class FwModule { }
