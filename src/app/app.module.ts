import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FwModule } from '../fw/fw.module';
import { FrameworkConfigService } from '../fw/services/framework-config.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FwModule
  ],
  providers: [FrameworkConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
