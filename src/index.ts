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
  await page.waitForSelector('img');

  const list = 'main ol li > article > header > h2 > a';
  const pixivList =
    'div.layout-body div._unit div.ranking-items-container div.ranking-items section.ranking-item > a.user-container';
  // await page.type('input.gLFyf', 'Puppeteer');
  // await page.screenshot({ path: 'example.png' });
  const datas = await page.$$eval(pixivList, (list) => {
    return list.map((elm) => elm.getAttribute('href'));
    // return list.map((data) => data.textContent);
  });

  console.log(datas);
  await browser.close();
};

screenShotFromURL('https://www.pixiv.net/ranking.php');
