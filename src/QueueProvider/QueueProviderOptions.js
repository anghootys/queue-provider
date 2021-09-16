const defaults = require("./Util/Constants/Defaults.json");

class QueueProviderOptions {
    constructor(options) {

        this.defautls = defaults;
        this.clusterCount = options.clusterCount || defaults.clusterCount;
        this.asyncClusters = options.asyncClusters || defaults.asyncClusters;
        this.loadBalacing = options.loadBalacing || defaults.loadBalancing;
        this.finalSubscriber = options.finalSubscriber || defaults.finalSubscriber;
    }
}

module.exports = QueueProviderOptions;