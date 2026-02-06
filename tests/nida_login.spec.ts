import LandingPage from '../pages/LandingPage.js';
import LoginPage from '../pages/LoginPage.js';

describe('NIDA Mobile App - Login Test', () => {
    it('TC-01 กรอก Username และ Password ได้', async () => {
        await browser.pause(3000);
        console.log('แอพเปิดแล้ว');

        const loginButton = await $('//android.widget.Button[@content-desc="Login"]');
        await loginButton.waitForDisplayed({ timeout: 5000 });
        await loginButton.click();

        const usernameField = await $('//android.widget.EditText[@hint="Username"]');
        await usernameField.waitForDisplayed({ timeout: 10000 });
        await usernameField.setValue('chandra-nuj@nida.ac.th'); 
        console.log('กรอก Username แล้ว');

        const passwordField = await $('//android.widget.EditText[@hint="Password"]');
        await passwordField.setValue('unext@2022'); 
        console.log('กรอก Password แล้ว');

        const usernameValue = await usernameField.getText();
        console.log('Username ที่กรอก:', usernameValue);

        await loginButton.waitForDisplayed({ timeout: 5000 });
        await loginButton.click();
        
        await browser.pause(3000);
    });
});