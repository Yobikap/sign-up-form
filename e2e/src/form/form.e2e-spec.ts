import { browser, logging } from 'protractor';
import { FormPage } from './form.po';

describe('Sign-up form e2e', () => {
  let page: FormPage;

  beforeAll(async () => {
    page = new FormPage();
    await page.navigateTo();
  });

  it('should render the form', async () => {
    expect(await page.isFormDisplayed()).toBeTruthy();
  });

  it('should render firstname', async () => {
    expect(await page.isInputElementDisplayed('input[name="firstname"]')).toBeTruthy();
  });

  it('should render lastname', async () => {
    expect(await page.isInputElementDisplayed('input[name="lastname"]')).toBeTruthy();
  });

  it('should render email', async () => {
    expect(await page.isInputElementDisplayed('input[name="email"]')).toBeTruthy();
  });

  it('should render password', async () => {
    expect(await page.isInputElementDisplayed('input[name="password"]')).toBeTruthy();
  });

  it('should render sign-up button', async () => {
    expect(await page.isInputElementDisplayed('button[name="submit"]')).toBeTruthy();
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
