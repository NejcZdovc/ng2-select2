import { Select2Page } from './app.po';

describe('select2 App', function() {
  let page: Select2Page;

  beforeEach(() => {
    page = new Select2Page();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('select2 works!');
  });
});
