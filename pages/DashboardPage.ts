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
}

export default new DashboardPage();