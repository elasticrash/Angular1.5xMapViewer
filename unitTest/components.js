describe("gisInteface", function () {
    beforeEach(module('LeafletApp'));
    beforeEach(module('templates'));

    var fakedMainResponse = '{"layers": [{},{}]}';
    var Backend;
    var element;
    var scope;
    beforeEach(inject(function ($injector) {
        Backend = $injector.get('$httpBackend');
        Backend.when('GET', 'http://localhost:3000/app/config/config.json').respond(fakedMainResponse);
    }));

    beforeEach(inject(function ($rootScope, $compile) {
        scope = $rootScope.$new();
        element = angular.element('<gis-Interface></gis-Interface>');
        element = $compile(element)(scope);
        scope.$apply();
    }));

    var controller;
    beforeEach(inject(function ($rootScope, $componentController) {
        scope = $rootScope.$new();
        controller = $componentController('gisInterface', { $scope: scope });
    }));

    it('gisInterface controller should be defined', function () {
        expect(controller).toBeDefined();
    });

    it('gisInterface showLegend and init should be defined', function () {
        expect(controller.showLegend).toBeDefined();
        expect(controller.showLegend).not.toThrow();
        expect(controller.$onInit).toBeDefined();
    });
});

describe("layerList", function () {
    beforeEach(module('LeafletApp'));
    beforeEach(module('templates'));

    var fakedMainResponse = '{"layers": [{},{}]}';
    var Backend;
    var element;
    var scope;

    beforeEach(inject(function ($rootScope, $compile) {
        scope = $rootScope.$new();
        element = angular.element('<layer-list></layer-list>');
        element = $compile(element)(scope);
        scope.$apply();
    }));

    var controller;
    beforeEach(inject(function ($rootScope, $componentController) {
        scope = $rootScope.$new();
        controller = $componentController('layerList', { $scope: scope });
    }));

    it('layerList controller should be defined', function () {
        expect(controller).toBeDefined();
    });
});

describe("sidebarElement", function () {
    beforeEach(module('LeafletApp'));
    beforeEach(module('templates'));

    var fakedMainResponse = '{"layers": [{},{}]}';
    var Backend;
    var element;
    var scope;
    beforeEach(inject(function ($injector) {
        Backend = $injector.get('$httpBackend');
        Backend.when('GET', 'http://localhost:3000/app/config/config.json').respond(fakedMainResponse);
    }));

    beforeEach(inject(function ($rootScope, $compile) {
        scope = $rootScope.$new();
        element = angular.element('<sidebar-element></sidebar-element>');
        element = $compile(element)(scope);
        scope.$apply();
    }));

    var controller;
    beforeEach(inject(function ($rootScope, $componentController) {
        scope = $rootScope.$new();
        controller = $componentController('sidebarElement', { $scope: scope });
    }));


    it('sidebarElement controller should be defined', function () {
        expect(controller).toBeDefined();
    });

    it('functions should be defined', function () {
        expect(controller.$onInit).toBeDefined();
        expect(controller.layerGroups).toBeDefined();
        expect(controller.showHideLayer).toBeDefined();
    });
});


describe("toolbarElement", function () {
    beforeEach(module('LeafletApp'));
    beforeEach(module('templates'));

    var fakedMainResponse = '{"layers": [{},{}]}';
    var Backend;
    var element;
    var scope;

    beforeEach(inject(function ($injector) {
        Backend = $injector.get('$httpBackend');
        Backend.when('GET', 'http://localhost:3000/app/config/config.json').respond(fakedMainResponse);
    }));

    beforeEach(inject(function ($rootScope, $compile) {
        scope = $rootScope.$new();
        element = angular.element('<toolbar-element></toolbar-element>');
        element = $compile(element)(scope);
        scope = element.children(':first').isolateScope();
    }));

    var toolbarController;
    beforeEach(inject(function ($rootScope, $componentController) {
        scope = $rootScope.$new();
        toolbarController = $componentController('toolbarElement', { $scope: scope });
    }));

    it('sidebarElement controller should be defined', function () {
        expect(toolbarController).toBeDefined();
    });

    it('functions should be defined', function () {
        expect(toolbarController.$onInit).toBeDefined();
        expect(toolbarController.showLegend).toBeDefined();
        expect(toolbarController.identify).toBeDefined();
        expect(toolbarController.goTo).toBeDefined();
        expect(toolbarController.print).toBeDefined();
    });
});
