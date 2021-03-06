const ClusterProvider = require("../src/QueueProvider/ClusterProvider");
const QueueProviderOptions = require("../src/QueueProvider/QueueProviderOptions");
const EventProvider = require("../src/QueueProvider/EventProvider");

test("Cluster Provider should store clusters in its own cluster store", () => {
    const autoClusterCreating = false;
    const clusters = [];
    const clusterProvider = new ClusterProvider({autoClusterCreating, clusters, options: {}});

    const event_01_callback = () => console.log("Hello World");
    const event_02_callback = () => console.log("Free World");

    const _autoClusterCreating = true;
    const _clusters = [
        {
            id: "Cluster_01",
            events: [
                {
                    id: "Event_01",
                    cb: event_01_callback
                },
                {
                    id: "Event_02",
                    cb: event_02_callback
                }
            ]
        }
    ];
    const _clusterProvider = new ClusterProvider({
        autoClusterCreate: _autoClusterCreating,
        clusters: _clusters,
        options: new QueueProviderOptions({})
    });

    const eventProvider_01 = new EventProvider(
        {
            event: {
                id: "Event_01",
                cb: event_01_callback
            },
            options: new QueueProviderOptions({})
        }
    );

    const eventProvider_02 = new EventProvider(
        {
            event: {
                id: "Event_02",
                cb: event_02_callback
            },
            options: new QueueProviderOptions({})
        }
    );

    clusterProvider.createCluster("Cluster_01", []);

    expect(clusterProvider.clusters).toStrictEqual([
        {
            id: "Cluster_01",
            events: []
        }
    ]);

    expect(_clusterProvider.clusters).toStrictEqual([
        {
            id: "Cluster_01",
            events: [
                eventProvider_01,
                eventProvider_02
            ]
        }
    ]);
});