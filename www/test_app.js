var TestApp = function() {};

TestApp.prototype.show = function(success, fail) {
    cordova.exec(success, fail, "Vognition","show", []);
};

var ts = new TestApp();
module.exports = ts;