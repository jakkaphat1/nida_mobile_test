import BasePage from './BasePage.js';

class NIDAAjarnApplicationPage extends BasePage {
    /**
     * Locator
     */
    get calendarElement() {
        const date = new Date();
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // เติม 0 ข้างหน้าถ้าเป็นเลขหลักเดียว
        const currentMonthId = `undefined.item_${year}-${month}`;

        // Return Selector ที่สร้างขึ้นมา
        return $(`//android.view.ViewGroup[@resource-id="${currentMonthId}"]`);
    }
    get calendarTab() {
        return $('//android.view.View[@content-desc="HOME" or content-desc="ปฏิทินกิจกรรม"]');
    }
    get todoTab() {
        return $('//android.view.View[@content-desc="TODO" or content-desc="งานที่ต้องทำ"]');
    }

    get filterAppointment() {
        return $('//android.view.ViewGroup[@content-desc="Appointment" or content-desc="กิจกรรมนัดหมาย"]');
    }
    
    get filterAcademic() {
        return $('//android.view.ViewGroup[@content-desc="Academic" or content-desc="กิจกรรมมหาลัย"]');
    }
    /**
     * Method
     */

    async checkNIDAAjarnApplicationPage(){
        await this.calendarTab.waitForDisplayed({ timeout: 5000 });
        await expect(this.calendarTab).toBeDisplayed({
            message: 'ไม่พบแท็บเมนู "ปฏิทินกิจกรรม" (HOME)'
        });
        console.log('พบแท็บเมนู: ปฏิทินกิจกรรม (Default)');

        await this.todoTab.waitForDisplayed({ timeout: 5000 });
        await expect(this.todoTab).toBeDisplayed({
            message: 'ไม่พบแท็บเมนู "งานที่ต้องทำ" (TODO)'
        });
    }

    async checkCalendarPageElements() {
        console.log('กำลังตรวจสอบหน้าปฏิทินกิจกรรม');
        const calendar = this.calendarElement;
        await calendar.waitForDisplayed({ timeout: 5000 });
        await expect(calendar).toBeDisplayed();

        await this.filterAppointment.waitForDisplayed();
        await expect(this.filterAppointment).toBeDisplayed();

        await this.filterAcademic.waitForDisplayed();
        await expect(this.filterAcademic).toBeDisplayed();
    }
}

export default new NIDAAjarnApplicationPage();