import { Ng2Select2Page } from './app.po';

describe('ng2-select2 App', function() {
  let page: Ng2Select2Page;

  beforeEach(() => {
    page = new Ng2Select2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
