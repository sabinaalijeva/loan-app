import { Locator, Page, expect } from "@playwright/test";

const serviceURL = "https://loan-app.tallinn-learning.ee/small-loan";

export class SuccessModal {
  readonly page: Page;
  readonly okButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.okButton = page.getByTestId("final-page-success-ok-button");
  }
  async confirmSuccess(): Promise<void> {
    await this.okButton.click();
    await expect(this.page).toHaveURL(serviceURL);
  }
}
