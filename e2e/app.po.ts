import { browser, element, by } from 'protractor';

export class FeheroSimulatorPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('fe-root h1')).getText();
  }
}
