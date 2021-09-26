const QueueProviderOptions = require("../src/QueueProvider/QueueProviderOptions");
const defaults = require("../src/QueueProvider/Util/Constants/Defaults.json");

test("this.defaults should be defaults", () => {
    const queueProviderOptions = new QueueProviderOptions({});

    expect(queueProviderOptions.defautls).toEqual(defaults);
})