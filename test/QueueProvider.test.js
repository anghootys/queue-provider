const QueueProvider = require("../src/QueueProvider/QueueProvider");
const ClusterProvider = require("../src/QueueProvider/ClusterProvider");

test("this.clusterProvider should instance of clusterProvider", () => {
    const queueProviderOptions = new QueueProvider({});

    const autoClusterCreate = false;
    const clusters = [];
    const clusterProvider = new ClusterProvider(autoClusterCreate, clusters);

    expect(queueProviderOptions.clusterProvider).toStrictEqual(clusterProvider);
})