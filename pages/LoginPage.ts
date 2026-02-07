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

    get AllowAccessAlert(){
        return $('//android.view.ViewGroup[@content-desc="Allow access, PIN"]');
    }

    get OKButton(){
        return $('//android.widget.TextView[@text="OK"]')
    }

    get OKButtonOnAllowAccessAlert() {
    // ใช้ XPath ที่ระบุว่า TextView ที่มีคำว่า OK และอยู่ภายใต้ ViewGroup ของ Modal
    return $('//android.view.ViewGroup[@content-desc="Allow access, PIN"]//android.widget.TextView[@text="OK"]');
}

    get SecondPagePin(){
        return $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup')
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

    async clickOKinAllowAccessContent(){
        await this.OKButtonOnAllowAccessAlert.click()
    }

    async enterPin(pin: string) {
        for (const digit of pin) {
            // ใช้ Dynamic Selector เพื่อระบุปุ่มตามตัวเลข
            const pinButton = await $(`//android.view.ViewGroup[@content-desc="${digit}"]`);
        
            await pinButton.waitForDisplayed({ timeout: 2000 });
            await pinButton.click();
            
            console.log(`กดปุ่มหมายเลข: ${digit}`);
        
            await browser.pause(300); 
        }
    }

    async enterPin2(pin: string) {
        for (const digit of pin) {
            // ใช้ Dynamic Selector เพื่อระบุปุ่มตามตัวเลข
            const pinButton = await $(`//android.view.ViewGroup[@content-desc="${digit}"]`);
        
            await pinButton.waitForDisplayed({ timeout: 2000 });
            await pinButton.click();
            
            console.log(`กดปุ่มหมายเลข: ${digit}`);
        
            await browser.pause(300); 
        }
    }
}

export default new LoginPage();