import BasePage from './BasePage.js';

class DashboardPage extends BasePage {
    /**
     * Locator
     */
    getElementByText(text: string) {
        return $(`//android.widget.TextView[@text="${text}"]`);
    }



    nameOfProfile(profileName : string){
        return $(`//android.widget.TextView[@text="${profileName}"]`)
    }

    getDynamicElement(label: string) {
        return $(`//*[@text="${label}" or @content-desc="${label}"]`);
    }

    get personalInfoContainer() {
        return $('//android.view.ViewGroup[contains(@content-desc, "Personal Info")]');
    }

    get BackButton(){
        return $('//android.widget.TextView[@resource-id="RNE__ICON__Component"]')
    }

    get LanguageButton(){
        return $('//android.widget.TextView[@text="Language" or @text="ตั้งค่าภาษา"]')
    }

    get LanguageBox(){
        return $('//android.widget.CheckBox[@content-desc="TH" or @content-desc="EN"]')
    }

    get AccessbilityButton(){
        return $('//android.widget.TextView[@text="Accessibility" or @text="ตั้งค่าการเข้าถึง"]')
    }

    get NotificationButton(){
        return $('//android.widget.TextView[@text="Notification" or @text="ตั้งค่าการแจ้งเตือน"]')
    }

    getNotificationWorkTypeButton(workName : string){
        return $(`//android.widget.TextView[@text="${workName}"]`)
    }

    getSubNotificationWork(workName : string){
        return $(`//android.widget.TextView[@text="${workName}"]`);
    }

    getToggleElement(label: string) {
        return $(`//android.widget.TextView[@text="${label}"]/../..//*[@clickable="true"]`);
    }

    get PrivacyButton(){
        return $('//android.widget.TextView[@text="Privacy policy" or @text="นโยบายความเป็นส่วนตัว"]')
    }

    get TermOfUseButton(){
        return $('//android.widget.TextView[@text="Terms of use" or @text="เงื่อนไขการใช้งานแอป"]')
    }














    /**
     * Method
     */

    async verifyMenuAndButtons(itemsList: string[]) {
        for (const item of itemsList) {
            const element = this.getDynamicElement(item);

            await element.waitForDisplayed({ timeout: 5000 });
            await expect(element).toBeDisplayed();
            
            console.log(`ตรวจสอบพบ: "${item}"`);
        }
    }

    async clickElementByText(ElementName : string){
        await this.getDynamicElement(ElementName).click()
    }

    async verifyPersonalInfoData(expectedDataList: string[]) {
        await this.personalInfoContainer.waitForDisplayed({ timeout: 5000 });

        const fullContentDesc = await this.personalInfoContainer.getAttribute('content-desc');
        
        console.log('ข้อมูลจริงที่ดึงได้:', fullContentDesc);

        for (const data of expectedDataList) {
            await expect(fullContentDesc).toContain(data);
            
            console.log(`พบข้อมูล: "${data}" ถูกต้อง`);
        }
    }

    async verifyContactInfoData(expectedDataList: string[]) {
        await this.personalInfoContainer.waitForDisplayed({ timeout: 5000 });

        const fullContentDesc = await this.personalInfoContainer.getAttribute('content-desc');
        
        console.log('ข้อมูลจริงที่ดึงได้:', fullContentDesc);

        for (const data of expectedDataList) {
            await expect(fullContentDesc).toContain(data);
            
            console.log(`พบข้อมูล: "${data}" ถูกต้อง`);
        }
    }

    async clickBackBtn(){
        await this.BackButton.click()
    }

    async clickLanguageBtn(){
        await this.LanguageButton.click()
    }

    async checkLanguageList(){
        const LanguageNameBox = await this.LanguageBox.getAttribute('content-desc');
        await expect(LanguageNameBox).toContain;
    }



    async clickAccessbilityBtn(){
        await this.AccessbilityButton.click()
    }

    async clickNotificationBtn(){
        await this.NotificationButton.click()
    }

    async verifyNotificationItems(items: string[]) {
        for (const item of items) {
            const selector = `android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("${item}")`;
            
            const element = $(selector);

            await element.waitForExist({ timeout: 10000 });
            await expect(element).toExist();
            
            console.log(`พบเมนู: "${item}"`);
        }
    }

    async clickNotificationWorkByName(workName : string){
        await this.getNotificationWorkTypeButton(workName).click()
    }

    async checkSubNotificationWorkByName(workNames : string[]){
        for (const name of workNames) {

            const element = this.getSubNotificationWork(name);
        
            await $(`android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("${name}")`);

            await expect(element).toExist();
            console.log(`พบหัวข้อย่อย: ${name}`);
        }
    }

    async setToggleState(label: string, wantEnable: boolean) {
        await $(`android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("${label}")`);
        await browser.pause(500);

        const toggleXPath = `//android.widget.TextView[@text="${label}"]/../android.view.ViewGroup[@clickable="true"]`;
        const toggleBtn = await $(toggleXPath);
        await toggleBtn.waitForDisplayed({ timeout: 5000 });

        const currentState = await toggleBtn.getAttribute('checked');
        const isCurrentlyOn = currentState === 'true';

        console.log(`[${label}] Current: ${isCurrentlyOn} → Want: ${wantEnable}`);

        if (isCurrentlyOn !== wantEnable) {
            await toggleBtn.click();
            console.log(`Clicked toggle button`);
            await browser.pause(1000);
            
            console.log(`Toggle action completed`);
        } else {
            console.log(`Already at desired state`);
        }
    }

    async clickPrivacyBtn(){
        await this.PrivacyButton.click()
    }

    async clickTermOFUseBtn(){
        await this.TermOfUseButton.click()
    }

    async checkTermOfUse(expectedText: string) {
        const privacyXPath = `//android.widget.TextView[@text="${expectedText}"]`;
        const element = await $(privacyXPath);
        const exists = await element.isExisting();
        
        if (exists) {
            console.log('พบข้อความที่ต้องการ');
        } else {
            console.log('ไม่พบข้อความ');
        }
        
        return exists;
    }
}

export default new DashboardPage();