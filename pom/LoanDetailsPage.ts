import { Locator, Page } from "@playwright/test";

export class LoanDetailsPage {
  readonly page: Page;
  readonly fullName: Locator;
  readonly language: Locator;
  readonly continueBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.fullName = page.getByTestId("final-page-full-name");
    this.language = page.getByTestId("final-page-communication-language");
    this.continueBtn = page.getByTestId("final-page-continue-button");
  }
  async selectLanguage(language: string): Promise<void> {
    await this.language.selectOption(language);
  }

  async continueFinal(): Promise<void> {
    await this.continueBtn.click();
  }
}
