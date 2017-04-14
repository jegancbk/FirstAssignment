cordova.define("phonegap-plugin-loadui.LoadUI", function(require, exports, module) {
var exec = cordova.require("cordova/exec");

/**
 * Constructor.
 *
 * @returns {BarcodeScanner}
 */
function LoadUI() {

}

/**
 * Read code from scanner.
 *
 * @param {Function} successCallback This function will recieve a result object: {
 *        text : '12345-mock',    // The code that was scanned.
 *        format : 'FORMAT_NAME', // Code format.
 *        cancelled : true/false, // Was canceled.
 *    }
 * @param {Function} errorCallback
 * @param config
 */
LoadUI.prototype.load = function(successCallback, errorCallback) {

   if (errorCallback == null) {
        errorCallback = function() {};
    }

    if (typeof errorCallback != "function") {
        console.log("LoadUI failure: failure parameter not a function");
        return;
    }

    if (typeof successCallback != "function") {
        console.log("LoadUI failure: success callback parameter must be a function");
        return;
    }

    exec(
        function(result) {
            successCallback(result);
        },
        function(error) {
            errorCallback(error);
        },
        'LoadUI',
        'load'
    );
};

var loadUI = new LoadUI();
module.exports = loadUI;
});
