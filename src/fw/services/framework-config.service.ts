import { Injectable } from '@angular/core';

export interface IconFiles {
  imageFile: string,
  alt: string,
  link: string
}

export interface FrameworkConfigSettings {
  showUserControls?: boolean,
  showStatusBar?: boolean,
  showStatusBarBreakPoint?: number,
  socialIcons?: Array<IconFiles>
}

@Injectable()
export class FrameworkConfigService {

  showUserControls = true;
  showStatusBar = true;
  showStatusBarBreakPoint = true;
  socialIcons = new Array<IconFiles>();

  configure(settings: FrameworkConfigSettings) : void {
    Object.assign(this, settings);
  }

}
