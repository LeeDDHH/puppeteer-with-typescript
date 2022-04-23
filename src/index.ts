'use strict';

import path from 'path';
import fs from 'fs';
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

// screenShotFromURL('https://www.pixiv.net/ranking.php');

const downloadGoogleLogoFromURL = async (url: string) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  await page.waitForSelector('img.lnXdpd');

  const image = await page.$('img.lnXdpd');

  console.log(image);

  const src = await image?.getProperty('src');

  console.log(src);

  const targetUrl = await src?.jsonValue();
  console.log('targetUrl: ' + targetUrl);

  const fileName = (targetUrl as string).split('/').pop();
  console.log('fileName: ' + fileName);

  const localFileFullPath = path.join(__dirname, fileName as string);
  console.log('localFileFullPath: ' + localFileFullPath);

  const viewSource = await page.goto(targetUrl as string);
  fs.writeFile(localFileFullPath, await viewSource.buffer(), (err) => {
    if (err) {
      console.log('err: ' + err);
      return;
    }
  });

  await browser.close();
};

downloadGoogleLogoFromURL('https://www.google.com/');
