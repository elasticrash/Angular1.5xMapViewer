app.component("layerList", {
    bindings: {
        name: '<'
    },
    transclude: true,
    templateUrl: "app/templates/layer-list-component.html",
    controllerAs: "model",
    controller: ["$http", layerListController]
});

function layerListController($http) {
    var model = this;
}

