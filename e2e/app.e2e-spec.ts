import { FeheroSimulatorPage } from './app.po';
import { browser } from 'protractor';

describe('fehero-simulator App', () => {
  let page: FeheroSimulatorPage;

  beforeEach(() => {
    page = new FeheroSimulatorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Fire Emblem Heroes Simulator');
  });
});
