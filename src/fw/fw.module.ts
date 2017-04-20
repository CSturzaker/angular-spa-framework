import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FrameworkBodyComponent } from './framework-body/framework-body.component';
import { ContentComponent } from './content/content.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MenuService } from './services/menu.service';
import { ScreenService } from './services/screen.service';
import { ScreenBelowLarge } from './directives/screen-below-large.directive';
import { ScreenLarge } from './directives/screen-large.directive';
import { MenuComponent } from './menus/menu/menu.component';
import { MenuItemComponent } from './menus/menu-item/menu-item.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    ContentComponent,
    FrameworkBodyComponent,
    MenuComponent,
    MenuItemComponent,
    TitleBarComponent,
    TopBarComponent,
    ScreenLarge,
    ScreenBelowLarge
  ],
  providers: [
    MenuService,
    ScreenService
  ],
  exports: [
    FrameworkBodyComponent
  ]
})
export class FwModule { }
