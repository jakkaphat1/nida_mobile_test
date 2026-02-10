import DashboardPage from '../pages/DashboardPage.js';
import LandingPage from '../pages/LandingPage.js';
import LoginPage from '../pages/LoginPage.js';
import NIDAAjarnApplicationPage from '../pages/NIDAAjarnApplicationPage.js';
import NotificationPage from '../pages/NotificationPage.js';


describe('NIDA Mobile App - Role Student Test', () => {

    beforeEach(async () => {
        await driver.terminateApp('th.ac.nida.superapp'); 
        await driver.activateApp('th.ac.nida.superapp');
    });

    it('TC-01 ตรวจสอบ Dashboard และ Profile (บนเครื่องใหม่)', async () => {
            console.log('--- เริ่มต้น Test บนเครื่องใหม่ ---');
    
            await LoginPage.clickLoginBtn();
    
            console.log('กำลังกรอก Username/Password...');
            await LoginPage.login('6810451023100@stu.nida.ac.th', 'unext@2022');
            await LoginPage.clickLoginBtn();
    
            try {
                await LoginPage.clickFingerprintInAllowAccessBth();
                await LoginPage.clickOKinAllowAccessContent();
            } catch (e) { 
                console.log('ไม่มี Popup ขึ้น'); 
            }
            console.log('กำลังตั้งค่า PIN');
            await LoginPage.clickLoginBtn();
            await LoginPage.enterPin('777777');  
            await LoginPage.enterPin2('777777');  
            
            await browser.pause(3000); 
            // await DashboardPage.clickProfessorProfile();
    
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

    it('TC-02 ทดสอบดูข้อมูลโปรไฟล์นักศึกษา', async () => {
        console.log('--- เริ่มต้น Test บนเครื่องใหม่ ---');
    
        await LoginPage.clickLoginBtn();
        // await LoginPage.enterPin('777777');  
        await LoginPage.enterPin2('777777');  
            
        await browser.pause(3000); 
        await DashboardPage.clickProfessorProfile();
    
        const expectedItems = [
            { en: 'Language', th: 'ตั้งค่าภาษา' },
            { en: 'Accessibility', th: 'ตั้งค่าการเข้าถึง' },
            { en: 'Notification', th: 'ตั้งค่าการแจ้งเตือน' },
            { en: 'Privacy policy', th: 'นโยบายความเป็นส่วนตัว' },
            { en: 'Terms of use', th: 'เงื่อนไขการใช้งานแอป' },
            { en: 'Sign out', th: 'ออกจากระบบ' }
        ];
        await DashboardPage.verifyMenuAndButtons(expectedItems);
    
        });
});
