describe('mapService', function () {
    beforeEach(module('LeafletApp'));

    var $controller;
    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));

    describe('factory: mapService', function () {
        var mapfactory = null;
        beforeEach(inject(function (mapService) {
            mapfactory = mapService;
        }))
        it('mapService should be defined', function () {
            expect(mapfactory).toBeDefined()
        }); it('mapService functions should be defined', function () {
            expect(mapfactory.setLayers).toBeDefined();
            expect(mapfactory.setView).toBeDefined();
            expect(mapfactory.addTileLayer).toBeDefined();
            expect(mapfactory.addTileWmsLayer).toBeDefined();
            expect(mapfactory.removeLayer).toBeDefined();
            expect(mapfactory.addLayer).toBeDefined();
        });

    });
});