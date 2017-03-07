import { BrainboxPage } from './app.po';

describe('brainbox App', function() {
  let page: BrainboxPage;

  beforeEach(() => {
    page = new BrainboxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
