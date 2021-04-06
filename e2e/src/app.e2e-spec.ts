import { browser, logging } from 'protractor';
import { AppPage } from './app.po';

describe('Sign-up form e2e', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display the title of the form', async () => {
    await page.navigateTo();
    expect(await page.getTitleText()).toEqual('Sign-up form');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
