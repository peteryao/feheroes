import { FeheroSimulatorPage } from './app.po';

describe('fehero-simulator App', () => {
  let page: FeheroSimulatorPage;

  beforeEach(() => {
    page = new FeheroSimulatorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('fe works!');
  });
});
