const {EventEmitter} = require("events");
const QueueProviderOptions = require("./QueueProviderOptions");
const ClusterProvider = require("./ClusterProvider");

class QueueProvider extends EventEmitter {
    constructor(options) {
        super();

        this.options = new QueueProviderOptions(options);

        this.clusterProvider = this.createClusterProvider();
    }

    createClusterProvider() {
        const {autoClusterCreating, clusters} = this.options;
        return new ClusterProvider(autoClusterCreating, clusters);
    }
}

module.exports = QueueProvider;