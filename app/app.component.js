var app = angular.module('LeafletApp', ['ngMaterial','ngComponentRouter','nemLogging','ui-leaflet','ngAnimate','pascalprecht.translate']);
//var app = angular.module('LeafletApp', ['md.data.table', 'ngMaterial', 'pascalprecht.translate', 'ngSanitize']);

app.value("$routerRootComponent", "gisApp");

app.service('SharedProperties', function () {
    var _dataObj = {};
    this.dataObj = _dataObj;
});

app.config(function ($mdIconProvider) {
    $mdIconProvider.fontSet('md', 'material-icons');
});

app.component("gisApp", {
    templateUrl: "app/app.component.html",
    $routeConfig: [
        { path: "/gis", component: "gisInterface", name: "Gis", useAsDefault: true },
        { path: "/about", component: "about", name: "About" },
        { path: "/**", redirectTo: ["Gis", ""] }
    ]
})

app.component("about", {
    template: "About us ..."
});
