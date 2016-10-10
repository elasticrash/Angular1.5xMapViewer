app.component("leafElement", {
    templateUrl: "app/templates/leaflet-component.html",
    controllerAs: "model",
    controller: function ($http, leafletData, mapService) {
        var model = this;
        model.layers = [];
        model.$onInit = function () {
            leafletData.getMap().then(function (map) {
+               mapService.setView([55.945, -3.195], 15, map);
                mapService.addTileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', map);
            });
            readLayersFromConfigFile($http).then(function (layers) {
                leafletData.getMap().then(function (map) {
                    model.layers = layers.layers;

                    model.layers.forEach(function (layer) {
                        //layer.sld_body ='<?xml version="1.0" encoding="ISO-8859-1"?> <StyledLayerDescriptor version="1.0.0" xsi:schemaLocation="http://www.opengis.net/sld StyledLayerDescriptor.xsd" xmlns="http://www.opengis.net/sld" xmlns:ogc="http://www.opengis.net/ogc" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"> <NamedLayer> <Name>rmx4:nhbc_coastal_buffer</Name> <UserStyle> <Title>test</Title> <Abstract>tttt</Abstract> <FeatureTypeStyle> <Rule> <Name>dffdfd</Name> <Title>dddtd</Title> <Abstract>dtdtttt</Abstract> <PolygonSymbolizer> <Fill> <CssParameter name="fill">#51926f</CssParameter> </Fill> <Stroke> <CssParameter name="stroke">#FE3563</CssParameter> <CssParameter name="stroke-width">1</CssParameter> </Stroke> </PolygonSymbolizer> </Rule> </FeatureTypeStyle> </UserStyle> </NamedLayer> </StyledLayerDescriptor>'
                        mapService.addTileWmsLayer(layer, map);
                    });
                });
            });
        }
    }
});
