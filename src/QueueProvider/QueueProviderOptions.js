const defaults = require("./Util/Constants/Defaults.json");

class QueueProviderOptions {
    constructor(options) {

        this.defautls = defaults;
        this.clusterCount = options.clusterCount || defaults.clusterCount;
        this.maxClusterCount = options.maxClusterCount || defaults.maxClusterCount;
        this.autoClusterCreating = options.autoClusterCreating || defaults.autoClusterCreating;
        this.clusters = options.clusters || defaults.clusters;
        this.asyncClusters = options.asyncClusters || defaults.asyncClusters;
        this.loadBalacing = options.loadBalacing || defaults.loadBalancing;
        this.finalSubscriber = options.finalSubscriber || defaults.finalSubscriber;
        this.multipleCallbacks = options.multipleCallbacks || defaults.multipleCallbacks;
    }
}

module.exports = QueueProviderOptions;