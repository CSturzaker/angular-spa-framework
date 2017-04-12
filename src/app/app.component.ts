import { Component } from '@angular/core';

import { FrameworkConfigService, FrameworkConfigSettings } from '../fw/services/framework-config.service';
import { MenuService } from '../fw/services/menu.service';
import { initialMenuItems } from './app.menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private frameworkConfigService: FrameworkConfigService,
              private menuService: MenuService) {

    let config:FrameworkConfigSettings = {
      socialIcons: [
        { imageFile: '', alt: 'Facebook', link: ''},
        { imageFile: '', alt: 'Google', link: ''},
        { imageFile: '', alt: 'Twitter', link: ''}
      ],
      showUserControls: true,
      showStatusBar: true,
      showStatusBarBreakPoint: 800
    };

    //set framework config
    frameworkConfigService.configure(config);

    //set menu items
    menuService.items = initialMenuItems;
  }
}
