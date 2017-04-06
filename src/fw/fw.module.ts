import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { FrameworkBodyComponent } from './framework-body/framework-body.component';
import { ContentComponent } from './content/content.component';
@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    FrameworkBodyComponent,
    ContentComponent
  ],
  exports: [
    FrameworkBodyComponent
  ]
})
export class FwModule { }
