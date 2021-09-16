const {EventEmitter} = require("events");
const QueueProviderOptions = require("./QueueProviderOptions");

class QueueProvider extends EventEmitter {
    constructor(options) {
        super();

        const optionsProvider = new QueueProviderOptions(options);
    }
}

module.exports = QueueProvider;