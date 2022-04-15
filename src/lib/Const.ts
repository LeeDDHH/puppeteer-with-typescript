export default class Const {
  static get LAUNCH_GOOGLE_CHROME_PROPS() {
    return {
      headless: false,
      slowMo: 50,
      executablePath: this.GOOGLE_CHROME_MAC_PATH,
    };
  }

  static get GOOGLE_CHROME_MAC_PATH() {
    return '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
  }
}
