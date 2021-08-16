import { VIEW_PORTS } from '../@types/VIEW_PORTS';
import puppeteer from '../services/puppeteer';
import USERAGENTS, { USERAGENTSBROWSERS, USERAGENTSOS } from '../@types/USERAGENTS';

export class User {
  public name: string = '';

  public email: string = '';

  public SO: USERAGENTSOS = 'windows';

  public browser: USERAGENTSBROWSERS = 'chrome';

  public idioma: string = '';

  public viewport: keyof typeof VIEW_PORTS = 'WEB';

  constructor(props: User) {
    Object.assign(this, props);
  }

  public async start() {
    const browser = await puppeteer.launch({
      headless: false,
      userDataDir: `./tmp/${this.email}`,
      args: ['--no-sandbox'],
      defaultViewport: VIEW_PORTS[this.viewport],
      product: 'firefox',
    });

    const page = await browser.newPage();
    page.setUserAgent(USERAGENTS[this.browser][this.SO]);
    await page.goto('https://antoinevastel.com/bots/datadome');
  }

  public getSO(): USERAGENTSOS {
    return this.SO;
  }

  public setSO(so: USERAGENTSOS): void {
    this.SO = so;
  }
}
