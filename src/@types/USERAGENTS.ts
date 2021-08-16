const USERAGENTS: IUserAgent = {
    chrome: {
        windows: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36',
        macOS: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36',
    },
    firefox: {
        windows: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:91.0) Gecko/20100101 Firefox/91.0',
        macOS: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.6; rv:16.0) Gecko/20100101 Firefox/16.0',
    },
    edge: {
        windows: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36 Edg/92.0.902.73',
        macOS: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 11_5_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36 Edg/92.0.902.73',
    }
};

interface IUserAgent {
    chrome: IBrowserAgent,
    firefox: IBrowserAgent,
    edge: IBrowserAgent,
}

interface IBrowserAgent {
    windows: string,
    macOS: string,
}

export type USERAGENTSBROWSERS = keyof IUserAgent;
export type USERAGENTSOS = keyof IBrowserAgent;

export default USERAGENTS;