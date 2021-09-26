const EventProvider = require("./EventProvider");
const defaultOptions = require("./Util/Constants/Defaults.json");

class ClusterProvider {
    constructor({autoClusterCreate, clusters, options = defaultOptions}) {

        this.clusters = [];
        this.options = options;

        if (autoClusterCreate) {
            clusters.forEach(cluster => {
                this.createCluster(cluster.id, cluster.events);
            })
        }
    }

    createCluster(clusterID, events) {
        this.clusters.push({
            id: clusterID,
            events: events && Array.isArray(events) && events.length
                ? events.map(event => new EventProvider({event, options: this.options}))
                : []
        })
    }


}

module.exports = ClusterProvider;