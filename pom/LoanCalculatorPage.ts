import { Locator, Page, expect } from "@playwright/test";

export class LoanCalculatorPage {
  readonly page: Page;
  readonly url = "https://loan-app.tallinn-learning.ee/small-loan";
  readonly loanAmount: Locator;
  readonly loanPeriod: Locator;
  readonly monthlyPayment: Locator;
  readonly applyMainBtn: Locator;
  readonly applySecondBtn: Locator;
  readonly applyThirdBtn: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loanAmount = page.getByTestId("id-small-loan-calculator-field-amount");
    this.loanPeriod = page.getByTestId("ib-small-loan-calculator-field-period");
    this.monthlyPayment = page.getByTestId(
        "ib-small-loan-calculator-field-monthlyPayment",
    );
    this.applyMainBtn = page.getByTestId(
        "id-small-loan-calculator-field-apply",
    );
    this.applySecondBtn = page.getByTestId("id-image-element-button-image-1");
    this.applyThirdBtn = page.getByTestId("id-image-element-button-image-2");
    this.errorMessage = page.getByTestId(
        "id-small-loan-calculator-field-error",
    );
  }

  async goto(): Promise<void> {
    await this.page.goto(this.url);
  }

  async enterAmount(amount: string): Promise<void> {
    await this.loanAmount.fill(amount);
  }

  async enterPeriod(period: string): Promise<void> {
    await this.loanPeriod.selectOption(period);
  }

  async checkMonthlyPayment(expectedValue: string): Promise<void> {
    await expect(this.monthlyPayment).toHaveText(expectedValue);
  }

  async applyViaMainButton(): Promise<void> {
    await this.applyMainBtn.click();
  }
  async applyViaSecondaryButton(): Promise<void> {
    await this.applySecondBtn.scrollIntoViewIfNeeded();
    await this.applySecondBtn.click();
  }
  async applyViaThirdButton(): Promise<void> {
    await this.applyThirdBtn.scrollIntoViewIfNeeded();
    await this.applyThirdBtn.click();
  }
  async errorValidation(): Promise<void> {
    //await this.page.waitForTimeout(3000);
    await expect(this.errorMessage).toBeVisible();
    await expect(this.errorMessage).toHaveText("Oops, something went wrong");
  }
  async noValidationError(): Promise<void> {
    //await this.page.waitForTimeout(3000);
    await expect(this.errorMessage).not.toBeVisible();
  }
}