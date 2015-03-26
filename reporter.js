blanket.options('reporter', function(data) {
    for (var file in data.files) {
        delete data.files[file].source;
    }
    alert(JSON.stringify(['qunit.report', data.files]));
});