import path from 'path';
import type { Options } from '@wdio/types';

export const config = {
    runner: 'local',
    port: 4723,
    specs: [
        './tests/**/*.ts'
    ],
    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'Pixel_8',
        'appium:automationName': 'UiAutomator2',
        'appium:app': path.resolve(process.cwd(), 'apps/NIDA-App-20260203.apk'),
        'appium:autoGrantPermissions': true,
        'appium:adbExecTimeout': 30000,      // เพิ่มเวลารอ ADB
        'appium:newCommandTimeout': 3600,  
        'appium:noReset': false

    }],
    
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        timeout: 60000
    },
    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            transpileOnly: true,
            project: './tsconfig.json'
        }
    }
};