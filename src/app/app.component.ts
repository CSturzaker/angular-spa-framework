import { Component } from '@angular/core';

import { FrameworkConfigService, FrameworkConfigSettings } from '../fw/services/framework-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private frameworkConfigService: FrameworkConfigService) {

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

    frameworkConfigService.configure(config);
  }
}
