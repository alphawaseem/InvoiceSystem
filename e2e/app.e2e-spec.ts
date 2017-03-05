import { NgInvoicePage } from './app.po';

describe('ng-invoice App', function() {
  let page: NgInvoicePage;

  beforeEach(() => {
    page = new NgInvoicePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
