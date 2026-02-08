import BasePage from './BasePage.js';

class NIDAAjarnApplicationPage extends BasePage {
    /**
     * Locator
     */
    get CalendarElement(){
        return $('//android.view.ViewGroup[@resource-id="undefined.item_2026-02"]')
    }

    /**
     * Method
     */
    
}

export default new NIDAAjarnApplicationPage();