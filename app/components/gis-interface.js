app.component("gisInterface", {
    bindings: {
        "$router": "<"
    },
    templateUrl: processTemplate("app/templates/gis-interface.html", { classes: 'flex layout-column' }),
    controllerAs: "model",
    controller: function ($mdSidenav) {
        var model = this;
        model.showLegend = function () {
            $mdSidenav('left').toggle();
        };
        model.$onInit = function () {
        };

        model.flexComponent = function () {
        };
    }
});

function processTemplate(template, opts) {
    opts = opts || {};
    return ($element, $attrs) => {
        'ngInject';

        if (opts.classes) {
            $attrs.$addClass(opts.classes);
        }

        return template;
    };
}