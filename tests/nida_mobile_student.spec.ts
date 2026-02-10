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
});