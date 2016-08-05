app.factory(
    "mapService",
    function Constructor($window) {
        console.log("Service one instantiated.");
        layers = [];
        return {
            setLayers: function (leafLayer) {
                layers.push(leafLayer);
            },
            setView: function (position, zoomlevel, map) {
                map.setView(position, zoomlevel);
            },
            addTileLayer: function (service, map) {
                L.tileLayer(service).addTo(map);
            },
            addTileWmsLayer: function (layer, map) {

                var layerToBeAdded = {
                    layers: layer.namespace + ":" + layer.layerName,
                    format: layer.format,
                    transparent: layer.transparent,
                    attribution: layer.attribution,
                    styles: layer.styles,
                    sld_body: layer.sld_body
                };

                if (!layer.sld_body) {
                    delete layerToBeAdded.sld_body;
                }
                if (layer.styles || layer.styles === "") {
                    delete layerToBeAdded.styles;
                }

                var leafLayer = L.tileLayer.wms(layer.server + "/wms?", layerToBeAdded);

                leafLayer.addTo(map);
                this.setLayers(leafLayer);
            },
            removeLayer: function (index, map) {
                map.removeLayer(layers[index]);
            },
            addLayer: function (index, map) {
                layers[index].addTo(map);
            }
        }
    }
);