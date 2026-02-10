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
        return $('//android.view.View[@content-desc="HOME" or @content-desc="ปฏิทินกิจกรรม"]');
    }
    get todoTab() {
        return $('//android.view.View[@content-desc="TODO" or @content-desc="งานที่ต้องทำ"]');
    }

    get filterAppointment() {
        return $('//android.view.ViewGroup[@content-desc="Appointment" or @content-desc="กิจกรรมนัดหมาย"]');
    }
    
    get filterAcademic() {
        return $('//android.view.ViewGroup[@content-desc="Academic" or @content-desc="กิจกรรมมหาลัย"]');
    }

    getMenuINtodo(menuName:string){
        return $(`//android.view.ViewGroup[contains(@content-desc, "${menuName}")]`);
    }

    get exitMenuINtodo(){
        return $('//android.widget.TextView[@resource-id="RNE__ICON__Component" and @text=""]')
    }

    getAppointmentLabel(AppointmentName: string , AppointmentDate : string , AppointmentTime : string) {
        return $(`//android.view.ViewGroup[@content-desc="${AppointmentName}, ${AppointmentDate}, ${AppointmentTime}"]`)
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

    async clickCalendarFilterAppointment(){
        await this.filterAppointment.waitForDisplayed();
        await this.filterAppointment.click()
    }

    async clickCalendarFilterAcademic(){
        await this.filterAcademic.waitForDisplayed();
        await this.filterAcademic.click()
    }

    async clickTodoTab(){
        await this.todoTab.click()
    }

    async clickMenuINtodo(menuName: string) {
        await this.getMenuINtodo(menuName).click(); 
        await browser.pause(4000);
    }

    async clickExitMenuINtodo(){
        await this.exitMenuINtodo.click()
    }

    async selectDateInCalendar(day?: number) {
        // 1. สร้าง Date Object ของวันที่ต้องการ
        const targetDate = new Date();
        if (day) {
            targetDate.setDate(day); // กำหนดวันที่ตามที่ส่งมา
        }

        // 2. แปลงเป็น Format: "Tuesday 3 February 2026"
        // ใช้ Intl.DateTimeFormat เพื่อให้ได้ Format ที่เป๊ะ (en-GB จะเรียง วัน เดือน ปี)
        const dateString = new Intl.DateTimeFormat('en-GB', { 
            weekday: 'long', 
            day: 'numeric', 
            month: 'long', 
            year: 'numeric' 
        }).format(targetDate);

        // Note: บางที Intl อาจจะใส่ comma (,) มา ให้ลบออกถ้าแอพไม่มี
        // ตัวอย่างผลลัพธ์: "Tuesday 3 February 2026"
        const formattedDate = dateString.replace(',', ''); 

        console.log(`📅 กำลังจะคลิกวันที่: ${formattedDate}`);

        // 3. สร้าง XPath แบบ Dynamic
        // ใช้ contains() เพื่อหาแค่ "Tuesday 3 February 2026" 
        // โดยไม่สนข้อความข้างหลัง (selected, You have no entries...)
        const dateSelector = `//android.widget.Button[contains(@content-desc, "${formattedDate}")]`;

        // 4. รอและกด
        const dateEl = $(dateSelector);
        await dateEl.waitForDisplayed({ timeout: 5000 });
        await dateEl.click();
    }

    async checkAppointmentInHome(AppointmentName: string , AppointmentDate : string , AppointmentTime : string){
        const appointmentLabel = this.getAppointmentLabel(AppointmentName, AppointmentDate, AppointmentTime);
        await appointmentLabel.waitForDisplayed({ timeout: 5000 });
        await expect(appointmentLabel).toBeDisplayed({
            message: `ไม่พบกิจกรรมนัดหมาย: ${AppointmentName}, ${AppointmentDate}, ${AppointmentTime} ในหน้าหลัก`
        });
    }
}
export default new NIDAAjarnApplicationPage();