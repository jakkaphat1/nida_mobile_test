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

    getDynamicElmentByLabel(label: string) {
        return $(`//*[@text="${label}" or @content-desc="${label}"]`);
    }

    getDynamicElement(textEn: string, textTh: string) {
        // return $(`//*[@text="${label}" or @content-desc="${label}"]`);
        return $(`//*[contains(@text, "${textEn}") or contains(@text, "${textTh}") or contains(@content-desc, "${textEn}") or contains(@content-desc, "${textTh}")]`);
    }

    get personalInfoContainer() {
        return $('//android.view.ViewGroup[contains(@content-desc, "Personal Info") or contains(@content-desc, "ข้อมูลส่วนตัว")]');
    }

    get addressInfoContainer() {
        return $('//android.view.ViewGroup[contains(@content-desc, "Address Info") or contains(@content-desc, "ที่อยู่ตามทะเบียนบ้าน")]');
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
    
    get BackToDashboard(){
        return $('//android.widget.TextView[@resource-id="RNE__ICON__Component" and @text=""]')
    }

    get seeDetail(){
        return $('//android.view.ViewGroup[@content-desc="See details" or @content-desc="ดูรายละเอียด"]')
    }

    get AnnouncementWordPlace(){
        return $('//android.widget.TextView[@text="Announcement" or @text="ประกาศ"]')
    }

    get professorProfile() {
        return $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.ImageView');
    }

    get homeIcon() {
        return $('//android.widget.TextView[@resource-id="RNE__ICON__Component"]');
    }

    

    get notificationBell() {
        return $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[3]/com.horcrux.svg.SvgView/com.horcrux.svg.GroupView/com.horcrux.svg.PathView');
    }

    get exitAccount() {
        return $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[4]/com.horcrux.svg.SvgView/com.horcrux.svg.GroupView/com.horcrux.svg.PathView[2]');
    }

    get announcementElement() {
        return $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.widget.HorizontalScrollView[1]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup');
    }

    get activitiesElement() {
        return $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.widget.HorizontalScrollView[2]/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup');
    }

    get workingButton() {
        return $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]');
    }

    getAppIconElement(thaiName: string, engName: string) {
        // return $(`//android.widget.TextView[@text="${thaiName}" or @text="${engName}"]/../android.view.ViewGroup[1]`);
        return $(`//android.widget.TextView[@text="${thaiName}" or @text="${engName}"]/ancestor::*[@clickable="true"][1]`);
    }

    getSubapplicationButton(thaiName : string ,engName: string ){
        return $(`//android.widget.TextView[@text="${thaiName}" or @text="${engName}"]`)
    }

    get NIDAUappButton(){
        return $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[2]')
    }

    get exitAccountButton(){
        return $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[4]/com.horcrux.svg.SvgView/com.horcrux.svg.GroupView/com.horcrux.svg.PathView[1]')
    }

    get signOutButton(){
        return $('//android.widget.Button[@content-desc="ออกจากระบบ"]')
    }

    get confirmSignOutButton() {
        return $('//android.widget.Button[@content-desc="ออกจากระบบ"]');
    }

    get signOutPopupText() {
        return $('//android.view.ViewGroup[contains(@content-desc, "คุณแน่ใจว่าต้องการ")]');
    }

    get fingerprintWording(){
        return $('//android.widget.TextView[@text="Fingerprint scan" or @text="สแกนลายนิ้วมือ"]')
    }

    get fingerprintToggle() {
        return $('//android.widget.TextView[@text="Fingerprint scan" or @text="สแกนลายนิ้วมือ"]/../android.view.ViewGroup[@clickable="true"]');
    }

    get NIDAAjarnAppIcon(){
        return $('//android.widget.TextView[@text="NIDA Ajan Nisit" or @text="NIDA อาจารย์ นักศึกษา"]/../android.view.ViewGroup[1]')
    }

    get viewProfileButton(){
        return $('//android.view.ViewGroup[@content-desc="VIEW PROFILE" or @content-desc="ดูโปรไฟล์"]')
    }

    getEditInfoButton(index: number){
        return $(`(//android.widget.TextView[@text="แก้ไข" or @text="Edit"])[${index}]`)
    }

    get EditProfilePopup(){
        return $(`//android.view.ViewGroup[@content-desc="กรุณาส่งคำร้องเพื่อขอแก้ไขข้อมูลทะเบียนประวัตินักศึกษา, สามารถส่งคำร้องเพื่อขอแก้ไขข้อมูลทะเบียนประวัตินิสิต ที่เมนูคำร้องนิสิต" or @content-desc="Please submit a request to amend student registration information., You can submit a request to amend student registration information. At the student request menu."]/android.view.ViewGroup`)
    }

    get EditProfilePopupConfirmButton(){
        return $('//android.widget.Button[@content-desc="ยืนยัน" or @content-desc="Confirm"]')
    }

    getChooseLanguageBox(selectLanguage : string){
        return $(`//android.widget.CheckBox[@content-desc="${selectLanguage}"]`)
    }

    getPrivacyTextElement(keyword: string) {
        return $(`//android.widget.TextView[contains(@text, "${keyword}")]`);
    }

    /**
     * Method
     */

    async verifyMenuAndButtons(itemsList: { en: string, th: string }[]){
        for (const item of itemsList) {
            const element = this.getDynamicElement(item.en , item.th);

            await element.waitForDisplayed({ timeout: 5000 });
            await expect(element).toBeDisplayed();
            
            console.log(`ตรวจสอบพบ: "${item}"`);
        }
    }

    async clickElementByText(itemsList: { elementEN: string, elementTH: string }[]){
        for (const item of itemsList) {
            const element = this.getDynamicElement(item.elementEN , item.elementTH);
            await element.waitForDisplayed({ timeout: 5000 });
            await expect(element).toBeDisplayed();
            console.log(`ตรวจสอบพบ: "${item}"`);
        }

        // await this.getDynamicElmentByLabel(ElementName, ElementThaiName).click()
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

    async verifyAddressInfoData(expectedDataList: string[]) {
        await this.addressInfoContainer.waitForDisplayed({ timeout: 5000 });

        const fullContentDesc = await this.addressInfoContainer.getAttribute('content-desc');
        
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

    async clickBackToDashboard(){
        await this.BackToDashboard.click()
    }

    async clickSeeDetail(){
        await this.seeDetail.click()
    }

    async checkAnnouncementPage(){
        await this.AnnouncementWordPlace.isExisting();
    }
    
    async checkDashboardLandingPage() {
        await expect(this.professorProfile).toBeDisplayed();
        console.log('Professor Profile is displayed');

        await expect(this.homeIcon).toBeDisplayed();
        console.log('Home Icon is displayed');

        await expect(this.notificationBell).toBeDisplayed();
        console.log('Notification Bell is displayed');

        await expect(this.exitAccount).toBeDisplayed();
        console.log('Exit Account button is displayed');

        await expect(this.announcementElement).toBeDisplayed();
        console.log('Announcement section is displayed');

        await expect(this.activitiesElement).toBeDisplayed();
        console.log('Activities section is displayed');

        await expect(this.workingButton).toBeDisplayed();
        console.log('Working/Menu button is displayed');
    }

    async clickProfile(){
        await this.professorProfile.click()
    }

    activityCard(index: number) {
        return $(`//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.widget.HorizontalScrollView[2]/android.view.ViewGroup/android.view.ViewGroup[${index}]/android.view.ViewGroup`);
    }

    async swipeActivityLeft() {
        const firstCard = await this.activityCard(1);
        await firstCard.waitForDisplayed();

        const location = await firstCard.getLocation();
        const size = await firstCard.getSize();

        const startX = location.x + (size.width * 0.8);
        const endX = location.x + (size.width * 0.001);
        const anchorY = location.y + (size.height / 2);

        await driver.performActions([
            {
                type: 'pointer',
                id: 'finger1',
                parameters: { pointerType: 'touch' },
                actions: [
                    { type: 'pointerMove', duration: 0, x: startX, y: anchorY }, 
                    { type: 'pointerDown', button: 0 },                          
                    { type: 'pause', duration: 200 },                            
                    { type: 'pointerMove', duration: 1000, x: endX, y: anchorY },
                    { type: 'pointerUp', button: 0 },                           
                ],
            },
        ]);
        
        await browser.pause(1000);
    }

    async clickApplicationByName(thaiName: string, engName: string){
        const appIcon = this.getAppIconElement(thaiName, engName);
        const textElement = $(`//android.widget.TextView[@text="${thaiName}" or @text="${engName}"]`);
        await textElement.waitForDisplayed({ timeout: 10000 });
        await appIcon.click()
        console.log(`กด ${thaiName} หรือ ${engName} แล้ว`)
    }

    async clickNIDAUappBtn(){
        await this.NIDAUappButton.click()
    }

    async clickExitAccountBtn(){
        await this.exitAccountButton.click()
    }

    async clickSignOutAccountBtn(){
        await this.signOutButton.click()
    }

    async clickConfirmSignOut() {
        await this.signOutPopupText.waitForDisplayed({ timeout: 5000 });
        await this.confirmSignOutButton.click();
    }

    // async clickFingerprintToggle(){
    //     await this.fingerprintToggle.click()
    // }
    async clickFingerprintToggle() {
        try {
            const toggle = await this.fingerprintToggle;
            
            // Debug: แสดงข้อมูล element ก่อนคลิก
            const isDisplayed = await toggle.isDisplayed();
            const isClickable = await toggle.getAttribute('clickable');
            const bounds = await toggle.getAttribute('bounds');
            
            console.log('🔍 Toggle Debug Info:');
            console.log('  - Displayed:', isDisplayed);
            console.log('  - Clickable:', isClickable);
            console.log('  - Bounds:', bounds);
            
            // ตรวจสอบว่า clickable หรือไม่
            if (isClickable !== 'true') {
                console.warn('⚠️ Warning: Toggle is not clickable!');
            }
            
            // รอให้ element พร้อม แล้วคลิก
            await toggle.waitForDisplayed({ timeout: 5000 });
            await toggle.click();
            
            console.log('✅ Toggle clicked successfully');
            
            // รอสักครู่ให้ animation เสร็จ
            await driver.pause(500);
            
        } catch (error) {
            console.error('❌ Error clicking fingerprint toggle:', error);
            throw error;
        }
    }

    async clickviewProfileBtn(){
        await this.viewProfileButton.click()
    }

    async editInfoBtnByIndex(index:number){
        await this.getEditInfoButton(index).click()
    }

    async checkEditProfilePopup(){
        await this.EditProfilePopup.waitForDisplayed({ timeout : 3000});
    }

    async clickEditProfilePopupConfirmBtn(){
        await this.EditProfilePopupConfirmButton.click()
    }

    async clickChooseLanguageBox(selectLanguage : string){
        await this.getChooseLanguageBox(selectLanguage).click()
    }

    async verifyPrivacyPolicyContent(expectedFullText: string) {
        //ตัดเอาแค่ 20 ตัวอักษรแรกของข้อความที่คาดหวัง ไปใช้หา Element
        const searchKeyword = expectedFullText.replace(/\s+/g, '').substring(0, 15);
        const element = this.getPrivacyTextElement(searchKeyword);

        await element.waitForDisplayed({ timeout: 5000 });

        const actualText = await element.getText();

        // ลบช่องว่าง และการขึ้นบรรทัดใหม่ ออกให้หมด เพื่อเทียบเนื้อหา
        const cleanActual = actualText.replace(/\s+/g, '');
        const cleanExpected = expectedFullText.replace(/\s+/g, '');

        console.log('Actual (Clean):', cleanActual);
        console.log('Expected (Clean):', cleanExpected);

        await expect(cleanActual).toContain(cleanExpected);
    }

}

export default new DashboardPage();