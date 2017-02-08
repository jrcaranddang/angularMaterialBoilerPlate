import { AngularMaterialBoilerPlatePage } from './app.po';

describe('angular-material-boiler-plate App', function() {
  let page: AngularMaterialBoilerPlatePage;

  beforeEach(() => {
    page = new AngularMaterialBoilerPlatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
