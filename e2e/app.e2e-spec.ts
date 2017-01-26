import { PiSystemUiPage } from './app.po';

describe('pi-system-ui App', function() {
  let page: PiSystemUiPage;

  beforeEach(() => {
    page = new PiSystemUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
