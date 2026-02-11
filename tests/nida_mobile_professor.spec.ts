import DashboardPage from '../pages/DashboardPage.js';
import LandingPage from '../pages/LandingPage.js';
import LoginPage from '../pages/LoginPage.js';
import NIDAAjarnApplicationPage from '../pages/NIDAAjarnApplicationPage.js';
import NotificationPage from '../pages/NotificationPage.js';

describe('NIDA Mobile App - Dashboard Test', () => {

    beforeEach(async () => {
        await driver.terminateApp('th.ac.nida.superapp'); 
        await browser.pause(2000);
        await driver.activateApp('th.ac.nida.superapp');
    });

    it('TC-01 ตรวจสอบ Dashboard และ Profile (บนเครื่องใหม่)', async () => {
        console.log('--- เริ่มต้น Test บนเครื่องใหม่ ---');

        await LoginPage.clickLoginBtn();

        console.log('กำลังกรอก Username/Password...');
        await LoginPage.login('chandra-nuj@nida.ac.th', 'unext@2022');
        await LoginPage.clickLoginBtn();

        try {
            await LoginPage.clickOKinAllowAccessContent();
        } catch (e) { 
            console.log('ไม่มี Popup ขึ้น'); 
        }
        console.log('กำลังตั้งค่า PIN...');
        await LoginPage.enterPin('777777');  
        await LoginPage.enterPin2('777777');  
        
        await browser.pause(3000); 

        // await DashboardPage.clickProfile();
    
            // const expectedItems = [
            //     { en: 'Language', th: 'ตั้งค่าภาษา' },
            //     { en: 'Accessibility', th: 'ตั้งค่าการเข้าถึง' },
            //     { en: 'Notification', th: 'ตั้งค่าการแจ้งเตือน' },
            //     { en: 'Privacy policy', th: 'นโยบายความเป็นส่วนตัว' },
            //     { en: 'Terms of use', th: 'เงื่อนไขการใช้งานแอป' },
            //     { en: 'Sign out', th: 'ออกจากระบบ' }
            // ];
            // await DashboardPage.verifyMenuAndButtons(expectedItems);

    });

    it('TC-02 กรอก Username และ Password ได้', async () => {
        console.log('แอพเปิดแล้ว');
        await LoginPage.clickLoginBtn()
        await LoginPage.enterPin('777777')
        await DashboardPage.clickProfile();

        const expectedItems = [
                { en: 'Language', th: 'ตั้งค่าภาษา' },
                { en: 'Accessibility', th: 'ตั้งค่าการเข้าถึง' },
                { en: 'Notification', th: 'ตั้งค่าการแจ้งเตือน' },
                { en: 'Privacy policy', th: 'นโยบายความเป็นส่วนตัว' },
                { en: 'Terms of use', th: 'เงื่อนไขการใช้งานแอป' },
                { en: 'Sign out', th: 'ออกจากระบบ' }
            ];
        await DashboardPage.verifyMenuAndButtons(expectedItems);

        const expectedProfileItems = [
                { elementEN: 'VIEW PROFILE', elementTH: 'ดูโปรไฟล์' },
            ];
        await DashboardPage.clickElementByText(expectedProfileItems);

        const myPersonalInfo = [
            'Chandra-nuj',          // เช็คชื่อ
            'Mahakanjana',          // เช็คนามสกุล
            'xxxxxxxxx8765',        // เช็คเลขบัตร (บางส่วน)
            '2000-06-16',           // เช็ควันเกิด
            'oea.meeting1@gmail.com' // เช็คอีเมล
        ];
        await DashboardPage.verifyPersonalInfoData(myPersonalInfo);

        const myContactsInfo = [
            'oea.meeting1@gmail.com',
            '089xxxxx99'
        ]
        await DashboardPage.verifyContactInfoData(myContactsInfo)
        await DashboardPage.clickBackBtn()
        await DashboardPage.verifyMenuAndButtons(expectedItems);
    });

    it('TC-03.1 ทดสอบตั้งค่าแอปพลิเคชันและแจ้งเตือนกรณีตั้งค่าภาษา' , async () => {
        console.log('แอพเปิดแล้ว');
        await LoginPage.clickLoginBtn()
        await LoginPage.enterPin('777777')
        await DashboardPage.clickProfile();
        await DashboardPage.clickLanguageBtn()
        await DashboardPage.clickBackBtn()
    });

    // it('TC-03.2 กรณีตั้งค่าการเข้าถึง' , async () => {
    //     console.log('แอพเปิดแล้ว');
    //     // await LoginPage.clickLoginBtn()
    //     // await LoginPage.enterPin('777777')
    //     await LoginPage.handleBiometricPopup()
    //     // await DashboardPage.clickProfile();
    //     // await DashboardPage.clickAccessbilityBtn()
    //     // console.log('เข้าหน้าตั้งค่าการเข้าถึง')
    //     // await DashboardPage.clickFingerprintToggle()
    //     // console.log('กดปุ่ม Toggle Fingerprint scan')
    //     // await DashboardPage.clickBackBtn()
    // });

    it('TC-03.3 กรณีตั้งค่าการแจ้งเตือน' , async () => {
        console.log('แอพเปิดแล้ว');
        await LoginPage.clickLoginBtn()
        await LoginPage.enterPin('777777')
        await DashboardPage.clickProfile();
        await DashboardPage.clickNotificationBtn()

        const expectedNotificationsTH = [
            'งานลงทะเบียน',
            'งานอาจารย์ที่ปรึกษา',
            'งานประเมิน',
            'งานเทียบโอนรายวิชา',
            'งานหลักสูตร มคอ. 2',
            'งานขอสำเร็จการศึกษา',
            'งานประมวลผลเกรด'
        ];

        const expectedNotificationsEN = [
            'Enrollment',
            'Advisor',
            'Assessment',
            'Course',
            'Curriculum',
            'Graduation',
            'Grade'
        ];

        await DashboardPage.verifyNotificationItems(expectedNotificationsEN);
        await DashboardPage.clickNotificationWorkByName('Enrollment')
        await DashboardPage.checkSubNotificationWorkByName(['Notification via Message','Notification via Email'])
        await DashboardPage.setToggleState('Notification via Message', true);
        
        await DashboardPage.clickBackBtn()
        await DashboardPage.clickBackBtn()
    });

    it('TC-03.4 ทดสอบดูนโยบายความเป็นส่วนตัว' , async () => {
        console.log('แอพเปิดแล้ว');
        await LoginPage.clickLoginBtn()
        await LoginPage.enterPin('777777')
        await DashboardPage.clickProfile();
        await DashboardPage.clickPrivacyBtn()
        await DashboardPage.clickBackBtn()
    });

    it('TC-03.5 ทดสอบดูเงื่อนไขการใช้งานแอป' , async () => {
        console.log('แอพเปิดแล้ว');
        await LoginPage.clickLoginBtn()
        await LoginPage.enterPin('777777')
        await DashboardPage.clickProfile();
        await DashboardPage.clickTermOFUseBtn()
        await DashboardPage.checkTermOfUse('สิทธิในการได้รับแจ้ง จะมีการแจ้ง “ประกาศเกี่ยวกับความเป็นส่วนตัว (Privacy Notice)” ที่มีรายละเอียดวัตถุประสงค์ในการเก็บรวบรวม ใช้ และเปิดเผยข้อมูลส่วนบุคคลที่ชัดเจนสิทธิในการเพิกถอนความยินยอม ท่านสามารถขอเพิกถอนความยินยอมที่เคยให้สถาบันไว้ได้ทุกเมื่อ ทั้งนี้ไม่ส่งผลกระทบต่อการเก็บรวบรวม ใช้หรือเปิดเผยข้อมูลส่วนบุคคลที่ท่านได้ให้ความ ยินยอมไปแล้วโดยชอบ เฉพาะสำหรับข้อมูลส่วนบุคคลที่ได้เก็บรวบรวม ใช้')
        await DashboardPage.clickBackBtn()
        await DashboardPage.clickBackToDashboard()
    });

    it('TC-04.1 ทดสอบดูแจ้งเตือนข่าวสาร/สถานะคำร้อง' , async () => {
        console.log('แอพเปิดแล้ว');
        await LoginPage.clickLoginBtn()
        await LoginPage.enterPin('777777')
        await NotificationPage.clickNotificationBellBtn()
        await NotificationPage.checkNotificationFilter('รายวิชา', 'Subject');
        await NotificationPage.checkNotificationFilter('ส่วนกลาง', 'Central');
        await NotificationPage.checkNotificationFilter('หน่วยงาน', 'Agency');
        await NotificationPage.checkNotificationFilter('ส่วนตัว', 'Personal');
    });

    it('TC-04.2 ทดสอบ Filter ตามกลุ่มงาน' , async () => {
        console.log('แอพเปิดแล้ว');
        await LoginPage.clickLoginBtn()
        await LoginPage.enterPin('777777')
        await NotificationPage.clickNotificationBellBtn()
        await NotificationPage.checkNotificationFilter('รายวิชา', 'Subject');
        await NotificationPage.checkNotificationFilter('ส่วนกลาง', 'Central');
        await NotificationPage.checkNotificationFilter('หน่วยงาน', 'Agency');
        await NotificationPage.checkNotificationFilter('ส่วนตัว', 'Personal');
        
        await NotificationPage.clickNotificationFilter('รายวิชา', 'Subject');
        await NotificationPage.clickNotificationFilter('ส่วนกลาง', 'Central');
        await NotificationPage.clickNotificationFilter('หน่วยงาน', 'Agency');
        await NotificationPage.clickNotificationFilter('ส่วนตัว', 'Personal');
        // await NotificationPage.clickFilterAllNotiBtn()
        // await browser.pause(500);
        // const result = await NotificationPage.checkAllSubFiltersExist();
    
        // expect(result.allFound).toBe(true);
    });

    it('TC-04.3 ทดสอบ Filter ตามสถานะข้อความ' , async () => {
        console.log('แอพเปิดแล้ว');
        await LoginPage.clickLoginBtn()
        await LoginPage.enterPin('777777')
        await NotificationPage.clickNotificationBellBtn()
        await NotificationPage.clickFilterAllNotiBtn()
        await browser.pause(500);
        const result = await NotificationPage.checkAllSubFiltersExist();
        expect(result.allFound).toBe(true);

        await NotificationPage.clickSubFilter('read')
    });

    it('TC-04.4 ทดสอบค้นหาข้อความด้วยการพิมพ์' , async () => {
        console.log('แอพเปิดแล้ว');
        await LoginPage.clickLoginBtn()
        await LoginPage.enterPin('777777')
        await NotificationPage.clickNotificationBellBtn()
        await NotificationPage.clickNotificationSearchBtn()

        await NotificationPage.fillNotiSeachBox('ทดสอบค้นหาช่องค้นหาใน Notification')
        await NotificationPage.clickConfirmSeachBtn()
    });

    it('TC-05.1 ทดสอบดูรายละเอียดของประกาศของมหาวิทยาลัย' , async () => {
        console.log('แอพเปิดแล้ว');
        await LoginPage.clickLoginBtn()
        await LoginPage.enterPin('777777')
        await DashboardPage.clickSeeDetail()
        await DashboardPage.checkAnnouncementPage()
        await DashboardPage.clickBackBtn()
        await DashboardPage.checkDashboardLandingPage()
    });

    it('TC-06.1 ทดสอบดูกิจกรรมเพิ่มเติม' , async () => {
        console.log('แอพเปิดแล้ว');
        await LoginPage.clickLoginBtn()
        await LoginPage.enterPin('777777')
        await DashboardPage.activityCard(1).waitForDisplayed({ timeout: 5000 });
        await DashboardPage.swipeActivityLeft();
        await expect(DashboardPage.activityCard(2)).toBeDisplayed();
    });

    it('TC-07.1 การเข้าใช้งานแอปพลิเคชัน NIDA อาจารย์ นักศึกษา' , async () => {
        console.log('แอพเปิดแล้ว');
        await LoginPage.clickLoginBtn()
        await LoginPage.enterPin('777777')
        await DashboardPage.clickApplicationByName('NIDA Ajan Nisit','NIDA อาจารย์ นิสิต')
        await NIDAAjarnApplicationPage.checkNIDAAjarnApplicationPage()
        await NIDAAjarnApplicationPage.checkCalendarPageElements()
    });

    it('TC-07.2 ทดสอบดูกิจกรรมต่าง ๆ จากปฏิทิน' , async () => {
        console.log('แอพเปิดแล้ว');
        await LoginPage.clickLoginBtn()
        await browser.pause(1000);
        await LoginPage.enterPin('777777')
        // await DashboardPage.clickApplicationByName('NIDA Ajan Nisit','NIDA อาจารย์ นักศึกษา')
        await DashboardPage.NIDAAjarnAppIcon.click()
        await NIDAAjarnApplicationPage.checkNIDAAjarnApplicationPage()
        await NIDAAjarnApplicationPage.checkCalendarPageElements()
        await NIDAAjarnApplicationPage.selectDateInCalendar(3);
        await NIDAAjarnApplicationPage.checkAppointmentInHome('ทดสอบเพิ่มนัดหมาย' , '02/03/2026' , '10:00 - 17:00')
        await NIDAAjarnApplicationPage.clickAppointmentInHome('ทดสอบเพิ่มนัดหมาย')
        await browser.pause(3000);
        await NIDAAjarnApplicationPage.clickExitMenuINtodo()
    }); 

    it('TC-07.3 ทดสอบดูกิจกรรมตามปฏิทินการศึกษา' , async () => {
        console.log('แอพเปิดแล้ว');
        await LoginPage.clickLoginBtn()
        await LoginPage.enterPin('777777')
        await DashboardPage.clickApplicationByName('NIDA Ajan Nisit','NIDA อาจารย์ นักศึกษา')
        await NIDAAjarnApplicationPage.checkNIDAAjarnApplicationPage()
        await NIDAAjarnApplicationPage.checkCalendarPageElements()
        await NIDAAjarnApplicationPage.clickCalendarFilterAppointment()
        // await NIDAAjarnApplicationPage.clickCalendarFilterAcademic()
    });

    it('TC-07.4 ทดสอบตรวจสอบ และดำเนินการสำหรับงานที่รอดำเนินการ' , async () => {
        console.log('แอพเปิดแล้ว');
        await LoginPage.clickLoginBtn()
        await LoginPage.enterPin('777777')
        await DashboardPage.clickApplicationByName('NIDA Ajan Nisit','NIDA อาจารย์ นิสิต')
        await NIDAAjarnApplicationPage.checkNIDAAjarnApplicationPage()
        await NIDAAjarnApplicationPage.checkCalendarPageElements()
        await NIDAAjarnApplicationPage.clickTodoTab()
        await NIDAAjarnApplicationPage.clickMenuINtodo('กรอกเกรด')
        await NIDAAjarnApplicationPage.clickExitMenuINtodo()
    });

    it('TC-07.5 ทดสอบตรวจสอบงานลงทะเบียน (ตัวอย่าง) * ตรวจสอบนัดหมายนักศึกษา' , async () => {
        console.log('แอพเปิดแล้ว');
        await LoginPage.clickLoginBtn()
        await LoginPage.enterPin('777777')
        await DashboardPage.clickApplicationByName('NIDA Ajan Nisit','NIDA อาจารย์ นิสิต')
        await NIDAAjarnApplicationPage.checkNIDAAjarnApplicationPage()
        await NIDAAjarnApplicationPage.clickTodoTab()
        await NIDAAjarnApplicationPage.clickMenuINtodo('นัดหมายนิสิต')
        await browser.pause(500)
        await NIDAAjarnApplicationPage.clickExitMenuINtodo()
        await DashboardPage.clickBackBtn()
    });

    it('TC-08 ทดสอบเข้าใช้งานระบบย่อย' , async () => {
        console.log('แอพเปิดแล้ว');
        await LoginPage.clickLoginBtn()
        await LoginPage.enterPin('777777')
        await browser.pause(2000);
        await DashboardPage.clickNIDAUappBtn()
    });

    it('TC-09 ทดสอบออกจากระบบบริการอาจารย์บนมือถือ **กรณีที่ระบบยังจดจำแอ็กเคานต์ผู้ใช้งาน' , async () => {
        console.log('แอพเปิดแล้ว');
        await LoginPage.clickLoginBtn()
        browser.pause(2000)
        await LoginPage.enterPin('777777')
        await browser.pause(2000);
        await DashboardPage.clickExitAccountBtn()
        await LoginPage.clickLoginBtn()
        await LoginPage.enterPin('777777')
        await DashboardPage.checkDashboardLandingPage()
    });

    it('TC-10 ทดสอบออกจากระบบบริการอาจารย์บนมือถือ **กรณีที่ระบบไม่จดจำแอ็กเคานต์ผู้ใช้งาน' , async () => {
        console.log('แอพเปิดแล้ว');
        await LoginPage.clickLoginBtn()
        browser.pause(2000)
        await LoginPage.enterPin('777777')
        await browser.pause(2000);
        await DashboardPage.checkDashboardLandingPage()
        await DashboardPage.clickProfile()
        await DashboardPage.clickSignOutAccountBtn()
        await DashboardPage.clickConfirmSignOut()
    });
});