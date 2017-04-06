import { AngularSpaFrameworkPage } from './app.po';

describe('angular-spa-framework App', () => {
  let page: AngularSpaFrameworkPage;

  beforeEach(() => {
    page = new AngularSpaFrameworkPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
