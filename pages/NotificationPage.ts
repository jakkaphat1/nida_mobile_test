import BasePage from './BasePage.js';

class NotificationPage extends BasePage {
    /**
     * Locator
     */

    get NotificationBellButton() {
        return $('//com.horcrux.svg.PathView/ancestor::android.view.ViewGroup[@clickable="true"][1]');
    }

    getNotiFilterButton(thaiName: string, englishName: string) {
        return $(`//android.view.ViewGroup[@content-desc="${thaiName}" or @content-desc="${englishName}"]`);
    }


    get FilterAllNotiButton() {
        return $('//android.view.ViewGroup[@content-desc="All" or @content-desc="ทั้งหมด"]');
    }

    // Sub-Filters
    get SubFilterNotiAllButton() {
        return $('//android.view.ViewGroup[@content-desc="All" or @content-desc="ทั้งหมด"]');
    }

    get SubFilterNotiUnreadButton() {
        return $('//android.view.ViewGroup[@content-desc="Unread" or @content-desc="ยังไม่ได้อ่าน"]');
    }

    get SubFilterNotiReadButton() {
        return $('//android.view.ViewGroup[@content-desc="Read" or @content-desc="อ่านแล้ว"]');
    }

    get NotificationSearchButton(){
        return $('//android.widget.TextView[@resource-id="RNE__ICON__Component" and @text=""]')
    }

    get FillNotificationSearchBox(){
        // return $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]')
        return $('//android.widget.EditText');
    }

    get confirmSeachButton(){
        return $('//android.widget.Button[@content-desc="Search"]')
    }











    /**
     * Method
     */

    async clickNotificationBellBtn(){
        await this.NotificationBellButton.click()
    }

    async checkNotificationFilter(thaiName: string, englishName: string) {
        const filter = this.getNotiFilterButton(thaiName, englishName);
        const exists = await filter.isExisting();
        
        if (exists) {
            const actualDesc = await filter.getAttribute('content-desc');
            console.log(`พบ Filter: "${actualDesc}"`);
        } else {
            console.log(`ไม่พบ Filter: ${thaiName}/${englishName}`);
        }
        
        return exists;
    }

    async clickFilterAllNotiBtn(){
        await this.FilterAllNotiButton.click()
    }

    async checkAllSubFiltersExist() {
        const filters = [
            { name: 'ทั้งหมด/All', element: this.SubFilterNotiAllButton },
            { name: 'ยังไม่ได้อ่าน/Unread', element: this.SubFilterNotiUnreadButton },
            { name: 'อ่านแล้ว/Read', element: this.SubFilterNotiReadButton }
        ];

        const results = [];

        for (const filter of filters) {
            const exists = await filter.element.isExisting();
            results.push({ name: filter.name, exists });
            console.log(`${exists ? '✅' : '❌'} Sub-Filter: ${filter.name}`);
        }

        const allFound = results.every(r => r.exists);
        return { allFound, results };
    }

    async clickSubFilter(filterType: 'all' | 'unread' | 'read') {
        let button;
        let name;

        switch (filterType) {
            case 'all':
                button = this.SubFilterNotiAllButton;
                name = 'ทั้งหมด/All';
                break;
            case 'unread':
                button = this.SubFilterNotiUnreadButton;
                name = 'ยังไม่ได้อ่าน/Unread';
                break;
            case 'read':
                button = this.SubFilterNotiReadButton;
                name = 'อ่านแล้ว/Read';
                break;
        }

        await button.waitForDisplayed({ timeout: 5000 });
        await button.click();
        console.log(`คลิก Sub-Filter: ${name}`);
    }

    async clickNotificationFilter(thaiName: string, englishName: string) {
        const filter = this.getNotiFilterButton(thaiName, englishName);
        try {
            await filter.waitForDisplayed({ timeout: 3000 });
            
            const label = await filter.getAttribute('content-desc') || thaiName;
            console.log(`กำลังกด Filter: "${label}"`);
            
            await filter.click();
            await browser.pause(1000); 

        } catch (error) {
            console.error(`ไม่พบปุ่ม Filter: ${thaiName}/${englishName} หรือกดไม่ได้`);
            throw new Error(`Filter "${thaiName}" not found or not clickable.`);
        }
    }

    async clickNotificationSearchBtn(){
        await this.NotificationSearchButton.click()
    }

    async fillNotiSeachBox(searchingWord:string){
        await this.FillNotificationSearchBox.waitForDisplayed();
        await this.FillNotificationSearchBox.click();
        await this.FillNotificationSearchBox.addValue(searchingWord);
        // await browser.keys(searchingWord.split(''));
    }

    async clickConfirmSeachBtn(){
        await this.confirmSeachButton.click()
    }
}

export default new NotificationPage();