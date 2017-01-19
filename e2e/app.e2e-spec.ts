import { GraphTestPage } from './app.po';

describe('graph-test App', function() {
  let page: GraphTestPage;

  beforeEach(() => {
    page = new GraphTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
