export const Server = (mode) => {
    serverUrl = 'http://www.rongserver.com';
    serverPort = '81';
    switch (mode) {
        case 'uri':
            return this.serverUrl;
            break;
        case 'fulluri':
            return this.serverUrl + ':' + this.serverPort;
            break;

    }

}
