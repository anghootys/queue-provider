const defaultOptions = require("./Util/Constants/Defaults.json");

class EventProvider {
    constructor({event, options = defaultOptions}) {
        this.event = event;
    }
}

module.exports = EventProvider;