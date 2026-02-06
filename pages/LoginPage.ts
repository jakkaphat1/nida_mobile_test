import BasePage from './BasePage.js';

class LoginPage extends BasePage {

    get inputUsername() {
        return $('//android.widget.EditText[@hint="Username"]');
    }

    get inputPassword() {
        return $('//android.widget.EditText[@hint="Password"]');
    }

    get btnLogin() {
        // ใช้ text ของปุ่ม
        return $('//android.widget.Button[@text="Login"]');
    }

    get btnShowPassword() {
        return $('//android.widget.ImageButton');
    }

    get loginBtn(){
        return $('//android.widget.Button[@text="Login" or @content-desc="Login"]');
    }

    /**
     * Method
     */

    async login(username: string, password: string) {
        await this.inputUsername.waitForDisplayed({ timeout: 10000 });
        await this.inputUsername.setValue(username);
        
        await this.inputPassword.waitForDisplayed({ timeout: 5000 });
        await this.inputPassword.setValue(password);
        
        if (await browser.isKeyboardShown()) {
            await browser.hideKeyboard().catch(() => console.log('Keyboard already hidden'));
        }
        
    }

    async isLoginPage() {
        try {
            await this.inputUsername.waitForDisplayed({ timeout: 5000 });
            return true;
        } catch {
            return false;
        }
    }

    async getErrorMessage() {
        const errorElement = await $('//android.widget.TextView[contains(@text, "error") or contains(@text, "Error") or contains(@text, "ผิดพลาด")]');
        if (await errorElement.isDisplayed()) {
            return await errorElement.getText();
        }
        return null;
    }

    async clickLoginBtn(){
        await this.loginBtn.waitForDisplayed({ timeout: 5000 });
        await this.loginBtn.click()
    }

}

export default new LoginPage();