blanket.options('reporter', function(data) {
    alert(JSON.stringify(['qunit.report', data.files]));
});