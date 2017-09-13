export default Server = (mode) => {
    serverUrl = 'http://www.rongserver.com';
    serverPort = '80';
    serverPath = '/ark/api'
    switch (mode) {
        case 'uri':
            return this.serverUrl;
            break;
        case 'fulluri':
            return this.serverUrl + ':' + this.serverPort + this.serverPath;
            break;

    }

}
