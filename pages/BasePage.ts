import { $ } from '@wdio/globals'

export default class BasePage {
    /**
     * รอให้ element แสดงผล
     */
    async waitForElement(element: WebdriverIO.Element, timeout = 10000) {
        await element.waitForDisplayed({ timeout });
    }

    /**
     * คลิก element
     */
    async clickElement(element: WebdriverIO.Element) {
        await element.waitForDisplayed();
        await element.click();
    }

    /**
     * กรอกข้อความ
     */
    async setText(element: WebdriverIO.Element, text: string) {
        await element.waitForDisplayed();
        await element.setValue(text);
    }
}