import { $ } from '@wdio/globals'
// นำเข้า Type มาแก้ปัญหาตัวแดง
import type { ChainablePromiseElement } from 'webdriverio'

export default class BasePage {
    // ใช้ ChainablePromiseElement เป็น Type ของ element
    async click(element: ChainablePromiseElement) {
        await element.waitForDisplayed();
        await element.click();
    }

    async type(element: ChainablePromiseElement, value: string) {
        await element.waitForDisplayed();
        await element.setValue(value);
    }
}