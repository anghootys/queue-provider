const QueueProvider = require("../src/QueueProvider/QueueProvider");
const QueueProviderOptions = require("../src/QueueProvider/QueueProviderOptions");
const ClusterProvider = require("../src/QueueProvider/ClusterProvider");

test("this.clusterProvider should instance of clusterProvider", () => {
    const queueProvider = new QueueProvider({});

    const queueProviderOptions = new QueueProviderOptions({});

    const autoClusterCreate = false;
    const clusters = [];
    const clusterProvider = new ClusterProvider({autoClusterCreate, clusters, options: queueProviderOptions});

    expect(queueProvider.clusterProvider).toStrictEqual(clusterProvider);
})