export default class CloudProviderBase {
    constructor(settings) {
        this.settings = settings;
    }
    start() {
        throw Error('"start" Not implemented');
    }
    stop() {
        throw Error('"stop" Not implemented');
    }
    updateSettings(settings) {
        this.settings = settings;
    }
    // getBrowsersAndDevices();
    updateCapabilities(target, caps, testName) {
        throw Error('"updateCapabilities" Not implemented');
    }
    updateOptions(target, options) {
        throw Error('"updateOptions" Not implemented');
    }
}