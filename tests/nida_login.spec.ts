import LandingPage from '../pages/LandingPage.js';
import LoginPage from '../pages/LoginPage.js';

describe('NIDA Mobile App - Login Test', () => {
    it('TC-01 กรอก Username และ Password ได้', async () => {
        console.log('แอพเปิดแล้ว');
        await LoginPage.clickLoginBtn();
        console.log('กดปุ่มเข้าหน้า Login แล้ว');

        await LoginPage.login('chandra-nuj@nida.ac.th', 'unext@2022');
        console.log('กรอก Username , password แล้ว');

        await LoginPage.clickLoginBtn();
        console.log('กดปุ่ม login');
        

    });
});