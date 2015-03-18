blanket.options('reporter', function(coverageData) {
    for (var file in coverageData.files) {
        var data = coverageData.files[file];
        delete data.source;
        alert(JSON.stringify(['qunit.report', data, file]));
    }
});