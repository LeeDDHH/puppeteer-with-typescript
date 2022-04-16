'use strict';

import puppeteer from 'puppeteer';

// import Const from './lib/Const';

const screenShotFromURL = async (url: string) => {
  // Google Chromeを起動して処理をする場合
  // const browser = await puppeteer.launch(Const.LAUNCH_GOOGLE_CHROME_PROPS);
  // const browser = await puppeteer.launch({ headless: false, slowMo: 50 });
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  // await page.setViewport({ width: 1200, height: 800 });
  await page.goto(url);
  await page.waitForSelector('.gLFyf');
  await page.type('.gLFyf', 'Puppeteer');
  await page.screenshot({ path: 'example.png' });
  await browser.close();
};

screenShotFromURL('https://www.google.com/');
