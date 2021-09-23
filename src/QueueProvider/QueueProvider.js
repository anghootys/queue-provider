const {EventEmitter} = require("events");
const QueueProviderOptions = require("./QueueProviderOptions");

class QueueProvider extends EventEmitter {
    constructor(options) {
        super();


        this.options = new QueueProviderOptions(options);

        this.createClusters();
    }

    createClusters() {
        // TODO: Create channels if it is automatic creating
        if (!this.options.autoClusterCreating) {
            // TODO: loop over custom clusters
        }
    }
}

module.exports = QueueProvider;