const ClusterProvider = require("../src/QueueProvider/ClusterProvider");

test("Cluster Provider should store clusters in its own cluster store", () => {
    const autoClusterCreating = false;
    const clusters = [];
    const clusterProvider = new ClusterProvider(autoClusterCreating, clusters);

    clusterProvider.createCluster("Cluster_01", []);

    expect(clusterProvider.clusters).toStrictEqual([
        {
            id: "Cluster_01",
            events: []
        }
    ])
});