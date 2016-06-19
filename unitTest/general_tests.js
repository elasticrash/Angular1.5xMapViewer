describe("Helpers", function () {
    var http;
    beforeEach(inject(function (_$http_) {
        http = _$http_;
    }));
    
    var obj = [];
    
    it("readLayersFromConfigFile", function () {
        expect(readLayersFromConfigFile).toBeDefined();
        expect(readLayersFromConfigFile).not.toThrow(http);
    });
    
    it("readLayersFromConfigFile response", function () {
        expect(readLayersFromConfigFile(http).then).toEqual(jasmine.any(Function));
    });

    it("readPaperSizesFromConfigFile", function () {
        expect(readPaperSizesFromConfigFile).toBeDefined();
        expect(readPaperSizesFromConfigFile).not.toThrow(http);

    });
    it("readSLDXmlTemplate", function () {
        expect(readSLDXmlTemplate).toBeDefined();
        expect(readSLDXmlTemplate).not.toThrow(http);
    });
    it("printer", function () {
        expect(printer).toBeDefined();
        expect(printer).not.toThrow(http);
    });
    it("fileDownloaderFromPostResponse", function () {
        expect(fileDownloaderFromPostResponse).toBeDefined();
    });

});