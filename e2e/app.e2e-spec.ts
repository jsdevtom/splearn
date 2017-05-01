import { SplearnPage } from './app.po';

describe('Splearn App', function() {
  let page: SplearnPage;

  beforeEach(() => {
    page = new SplearnPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
