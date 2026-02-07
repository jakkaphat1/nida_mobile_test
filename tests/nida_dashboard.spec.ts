import DashboardPage from '../pages/DashboardPage.js';
import LandingPage from '../pages/LandingPage.js';
import LoginPage from '../pages/LoginPage.js';

describe('NIDA Mobile App - Login Test', () => {

    beforeEach(async () => {
        await driver.terminateApp('th.ac.nida.superapp'); 
        await driver.activateApp('th.ac.nida.superapp');
    });

    it('TC-02 กรอก Username และ Password ได้', async () => {
        console.log('แอพเปิดแล้ว');
        // await LoginPage.loginFullProcess('chandra-nuj@nida.ac.th', 'unext@2022','777777');
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
});