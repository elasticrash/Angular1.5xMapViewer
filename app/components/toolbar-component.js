app.component("toolbarElement", {
    templateUrl: "app/templates/toolbar-component.html",
    binding: {
        "heading": "@"
    },
    require: {
        "parent": "^gisInterface"
    },
    controllerAs: "model",
    controller: function (leafletData, $mdDialog) {
        var model = this;

        model.$onInit = function () {
        };
        model.showLegend = function () {
            model.parent.showLegend();
        };
        model.identify = function () {
            leafletData.getMap().then(function (map) {
                map.on('click', model.identify.click);
            });
        };
        model.identify.click = function (e) {
            $mdDialog.show(
                $mdDialog.alert()
                    .parent(angular.element(document.body))
                    .clickOutsideToClose(true)
                    .title('the point you clicked is')
                    .textContent("latitude:" + Math.round((e.latlng.lat * 1000)) / 1000 +
                    " longtitude:" + Math.round((e.latlng.lng * 1000)) / 1000)
                    .ariaLabel('Show Coordinates')
                    .ok('Got it!')
            );
            leafletData.getMap().then(function (map) {
                map.off('click', model.identify.click);
            });
        };

        model.goTo = function () {
            leafletData.getMap().then(function (map) {
            });
        };

        model.print = function () {
            leafletData.getMap().then(function (map) {
                $mdDialog.show({
                    controller: PrintController,
                    templateUrl: 'app/templates/print.tmpl.html',
                    parent: angular.element(document.body),
                    clickOutsideToClose: true
                });
            });
        };
    }
});


