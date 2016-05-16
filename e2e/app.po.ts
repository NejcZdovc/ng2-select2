export class Select2Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('select2-app h1')).getText();
  }
}
