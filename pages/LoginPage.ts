import BasePage from './BasePage.js';
import { exec } from 'child_process';
import util from 'util';
const execPromise = util.promisify(exec);
import webdriver from 'appium';

class LoginPage extends BasePage {

    get inputUsername() {
        return $('//android.widget.EditText[@hint="Username" or @hint="บัญชีผู้ใช้งาน"]');
    }

    get inputPassword() {
        return $('//android.widget.EditText[@hint="Password" or @hint="รหัสผ่าน"]');
    }

    get btnLogin() {
        // ใช้ text ของปุ่ม
        return $('//android.widget.Button[@text="Login" or @text="เข้าสู่ระบบ"]');
    }

    get btnShowPassword() {
        return $('//android.widget.ImageButton');
    }

    get loginBtn(){
        return $('//*[@text="Login" or @content-desc="Login" or @text="เข้าสู่ระบบ" or @content-desc="เข้าสู่ระบบ" or @text="ตกลง" or @content-desc="ตกลง"]');
    }

    get AllowAccessAlert(){
        return $('//android.view.ViewGroup[@content-desc="Allow access, PIN"]');
    }

    get OKButton(){
        return $('//android.widget.TextView[@text="OK" or @text="ตกลง"]')
    }

    get FingerprintInAllowAccessButton(){
        return $('//android.view.ViewGroup[@content-desc="Fingerprint scan" or @content-desc="สแกนลายนิ้วมือ"]');
    }

    get OKButtonOnAllowAccessAlert() {
    // ใช้ XPath ที่ระบุว่า TextView ที่มีคำว่า OK และอยู่ภายใต้ ViewGroup ของ Modal
    return $('//android.view.ViewGroup[@content-desc="Allow access, PIN"]//android.widget.TextView[@text="OK" or @text="ตกลง"]');
}

    get SecondPagePin(){
        return $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup')
    }

    get changeLanguageButton(){
        return $('//android.widget.Button[@content-desc="EN" or @content-desc="TH"]')
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
        await this.loginBtn.waitForDisplayed({ timeout: 10000 });
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

    async loginFullProcess(username : string, password : string, pin : string) {
        // รวม Step ทั้งหมดไว้ที่นี่
        await this.clickLoginBtn();
        await this.login(username, password);
        await this.clickLoginBtn();
        await this.clickOKinAllowAccessContent();
        await this.enterPin(pin);
        await this.enterPin2(pin);
        
    }

    async handleBiometricPopup() {
        try {
            console.log('🔐 Handling biometric authentication...');
            
            // รอให้ fingerprint dialog แสดง
            await browser.pause(3000);
            
            console.log('📱 Sending fingerprint authentication...');
            
            // ใช้ driver.fingerPrint() - ไม่ต้อง adb_shell
            await driver.execute('mobile: fingerprint', { fingerprintId: 3 });
            
            console.log(`✅ Fingerprint authenticated`);
            await browser.pause(2000);
            
            console.log('✅ Biometric authentication completed');
            
        } catch (error) {
            console.error('❌ Fingerprint failed:', error);
            throw error;
        }
    }

    async clickFingerprintInAllowAccessBth(){
        await this.FingerprintInAllowAccessButton.click()
    }

    async clickChangeLanguageBtn(){
        await this.changeLanguageButton.click()
    }

}

export default new LoginPage();