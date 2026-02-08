import DashboardPage from '../pages/DashboardPage.js';
import LandingPage from '../pages/LandingPage.js';
import LoginPage from '../pages/LoginPage.js';

describe('NIDA Mobile App - Dashboard Test', () => {

    beforeEach(async () => {
        await driver.terminateApp('th.ac.nida.superapp'); 
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

        await LoginPage.clickProfessorProfile();

        const expectedItems = [
            'Language', 'Accessibility', 'Notification', 
            'Privacy policy', 'Terms of use', 'Sign out'
        ];
        await DashboardPage.verifyMenuAndButtons(expectedItems);

    });

    it('TC-02 กรอก Username และ Password ได้', async () => {
        console.log('แอพเปิดแล้ว');
        await LoginPage.clickLoginBtn()
        await LoginPage.enterPin('777777')
        await LoginPage.clickProfessorProfile();

        const expectedItems = [
            'Language',         
            'Accessibility',   
            'Notification',    
            'Privacy policy',   
            'Terms of use',    
            'Sign out'
        ];
        await DashboardPage.verifyMenuAndButtons(expectedItems);

        await DashboardPage.clickElementByText('VIEW PROFILE')

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
        await LoginPage.clickProfessorProfile();
        await DashboardPage.clickLanguageBtn()
        await DashboardPage.clickBackBtn()
    });

    it('TC-03.2 กรณีตั้งค่าการเข้าถึง' , async () => {
        console.log('แอพเปิดแล้ว');
        await LoginPage.clickLoginBtn()
        await LoginPage.enterPin('777777')
        await LoginPage.clickProfessorProfile();
        await DashboardPage.clickAccessbilityBtn()
        await DashboardPage.clickBackBtn()
    });

    it('TC-03.3 กรณีตั้งค่าการแจ้งเตือน' , async () => {
        console.log('แอพเปิดแล้ว');
        await LoginPage.clickLoginBtn()
        await LoginPage.enterPin('777777')
        await LoginPage.clickProfessorProfile();
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
        await LoginPage.clickProfessorProfile();
        await DashboardPage.clickPrivacyBtn()
        await DashboardPage.clickBackBtn()
    });
});