import {Locator, Page} from "@playwright/test";

export class LoginPage {
    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly continueBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.username = page.getByTestId("login-popup-username-input")
        this.password = page.getByTestId("login-popup-password-input")
        this.continueBtn = page.getByTestId("login-popup-continue-button")
    }

    async login(name: string, pw: string): Promise<void> {
        await this.username.fill(name)
        await this.password.fill(pw)
        await this.continueBtn.click()
    }
}