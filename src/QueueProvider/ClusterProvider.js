class ClusterProvider {
    constructor(autoClusterCreate, clusters) {

        this.clusters = [];

        if (autoClusterCreate) {
            clusters.forEach(cluster => {
                this.createCluster(cluster.id, cluster.events);
            })
        }
    }

    createCluster(clusterID, events) {
        this.clusters.push({
            id: clusterID,
            events: [...events]
        })
    }


}

module.exports = ClusterProvider;