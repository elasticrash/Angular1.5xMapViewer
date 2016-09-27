function readLayersFromConfigFile($http) {
    return $http.get("app/config/config.json")
        .then(function (response) {
            return response.data;
        });
}

function readPaperSizesFromConfigFile($http) {
    return $http.get("app/config/paperSize.json")
        .then(function (response) {
            return response.data;
        });
}

function readSLDXmlTemplate($http) {
    return $http.get("app/config/polygon.sld.xml")
        .then(function (response) {
            return response.data;
        });
}

function printer($http, data) {
    var config = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        },
        responseType: 'arraybuffer'
    };
    return $http.post("http://localhost:8080/rest/print", data, [config])
}