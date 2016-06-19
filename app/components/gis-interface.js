app.component("gisInterface", {
    bindings: {
        "$router": "<"
    },
    templateUrl: "app/templates/gis-interface.html",
    controllerAs: "model",
    controller: function ($mdSidenav) {
        var model = this;
        model.showLegend = function(){
            $mdSidenav('left').toggle();
        };
        model.$onInit = function () {
        }
    }
});