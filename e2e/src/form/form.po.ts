import { browser, by, element } from 'protractor';

export class FormPage {
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }

  async isFormDisplayed(): Promise<boolean> {
    return element(by.css('app-form form')).isDisplayed();
  }

  async isInputElementDisplayed(selector: string): Promise<boolean> {
    return element(by.css(selector)).isDisplayed();
  }
}
