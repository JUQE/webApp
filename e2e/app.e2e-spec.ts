import { JuqePage } from './app.po';

describe('juqe App', function() {
  let page: JuqePage;

  beforeEach(() => {
    page = new JuqePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
