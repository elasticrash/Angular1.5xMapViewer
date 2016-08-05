function PrintController($scope, $mdDialog, $http, leafletData) {
    $scope.print = {};
    $scope.papersizes = [];
    $scope.selectedLayer;
    $scope.orientation = ["portrait", "landscape"];
    $scope.legendPosition = ["right", "bottom"];
    $scope.dpi = ["75", "150", "300", "600"];
    readPaperSizesFromConfigFile($http).then(function (ps) {
        $scope.papersizes = ps;
    });
    $scope.availableLayers = [];
    $scope.setAvailableLayers = (function () {
        var availableLayers = [];
        leafletData.getMap().then(function (map) {
            map.eachLayer(function (layer) {
                if (layer.wmsParams) {
                    availableLayers.push(layer);
                }
            });
            $scope.availableLayers = availableLayers;
        });
    })();

    $scope.hide = function () {
        $mdDialog.hide();
    };
    $scope.cancel = function () {
        $mdDialog.cancel();
    };
    $scope.answer = function (answer) {
        $mdDialog.hide(answer);
        if (answer === "PRINT") {
            leafletData.getMap().then(function (map) {

                var ll = proj4(proj4.defs["EPSG:27700"]).forward([map.getBounds()._southWest.lng, map.getBounds()._southWest.lat]);
                var ur = proj4(proj4.defs["EPSG:27700"]).forward([map.getBounds()._northEast.lng, map.getBounds()._northEast.lat]);
                $scope.print.BBox = {};
                $scope.print.BBox.LLx = ll[0];
                $scope.print.BBox.LLy = ll[1];
                $scope.print.BBox.URx = ur[0];
                $scope.print.BBox.URy = ur[1];

                console.log($scope.print);

                var layerForPrinting = [];
                map.eachLayer(function (layer) {
                    if (layer.wmsParams) {
                        if (layer.wmsParams.layers === $scope.selectedLayer) {
                            layerForPrinting.push(layer);
                        }
                    }
                });

                if (layerForPrinting.length === 1) {
                    $scope.print.WmsService = {
                        WMSEndPoint: layerForPrinting[0]._url,
                        WMSVersion: layerForPrinting[0].wmsParams.version,
                        NS: layerForPrinting[0].wmsParams.layers.split(':')[0],
                        Layer: layerForPrinting[0].wmsParams.layers.split(':')[1],
                    };
                    fileDownloaderFromPostResponse("http://localhost:8080/rest/print", $scope.print)
                }
            });
        }
    };
}