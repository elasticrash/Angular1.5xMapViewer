app.component("sidebarElement", {
    templateUrl: "app/templates/sidebar-component.html",
    binding: {
        "heading": "@"
    },
    controllerAs: "model",
    controller: function ($http, leafletData, mapService) {
        var model = this;
        model.layerGroups = [];
        var layers = [];
        model.$onInit = function () {
            readLayersFromConfigFile($http).then(function (lrs) {
                layers = lrs.layers;
                model.layers = layers;
                model.showLayerIndex = new Array(layers.length);
                model.showLayerIndex.fill(true);

                var occurance = [];
                layers.forEach(function (element, index) {
                    if (occurance.indexOf(element.group) === -1) {
                        model.layerGroups.push({ name: element.group })
                        occurance.push(element.group);
                    }
                }, this);

            });
        }
        model.showHideLayer = function (index) {
            leafletData.getMap().then(function (map) {
                if (model.showLayerIndex[index]) {
                    mapService.addLayer(index, map);
                } else {
                    mapService.removeLayer(index, map);
                }
            });
        }
    }
});