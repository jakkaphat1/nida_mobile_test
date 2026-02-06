import BasePage from './BasePage.js';

class LoginPage extends BasePage {
    private get inputUsername() {
        return $('//android.widget.EditText[@hint="Username"]');
    }

    private get inputPassword() {
        return $('//android.widget.EditText[@hint="Password"]');
    }

    private get btnLogin() {
        // ใช้ text ของปุ่ม
        return $('//android.widget.Button[@text="Login"]');
    }

    private get btnShowPassword() {
        return $('//android.widget.ImageButton');
    }

    /**
     * Method
     */
    async login(username: string, password: string) {
        // รอให้ช่อง username แสดง
        await this.inputUsername.waitForDisplayed({ timeout: 10000 });
        
        // กรอก username
        await this.inputUsername.click(); // คลิกก่อนเพื่อ focus
        await this.inputUsername.setValue(username);
        
        // กรอก password
        await this.inputPassword.click();
        await this.inputPassword.setValue(password);
        
        // ซ่อน keyboard (ถ้ามี)
        await browser.hideKeyboard().catch(() => {
            console.log('Keyboard already hidden');
        });
        
        // รอสักครู่
        await browser.pause(1000);
        
        // กดปุ่ม Login
        await this.btnLogin.click();
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
}

export default new LoginPage();