cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "phonegap-plugin-loadui.LoadUI",
        "file": "plugins/phonegap-plugin-loadui/www/loadui.js",
        "pluginId": "phonegap-plugin-loadui",
        "clobbers": [
            "cordova.plugins.loadUI"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.2",
    "cordova-plugin-compat": "1.1.0",
    "phonegap-plugin-loadui": "6.0.5"
};
// BOTTOM OF METADATA
});