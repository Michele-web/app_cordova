cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "kr.co.joycorp.cordova.exitapp.exitApp",
      "file": "plugins/kr.co.joycorp.cordova.exitapp/www/ExitApp.js",
      "pluginId": "kr.co.joycorp.cordova.exitapp",
      "merges": [
        "navigator.app"
      ]
    },
    {
      "id": "cordova-plugin-exit.exit",
      "file": "plugins/cordova-plugin-exit/www/exit.js",
      "pluginId": "cordova-plugin-exit",
      "clobbers": [
        "cordova.plugins.exit"
      ]
    },
    {
      "id": "cordova-plugin-inappbrowser.inappbrowser",
      "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
      "pluginId": "cordova-plugin-inappbrowser",
      "clobbers": [
        "cordova.InAppBrowser.open",
        "window.open"
      ]
    },
    {
      "id": "es6-promise-plugin.Promise",
      "file": "plugins/es6-promise-plugin/www/promise.js",
      "pluginId": "es6-promise-plugin",
      "runs": true
    },
    {
      "id": "cordova-plugin-screen-orientation.screenorientation",
      "file": "plugins/cordova-plugin-screen-orientation/www/screenorientation.js",
      "pluginId": "cordova-plugin-screen-orientation",
      "clobbers": [
        "cordova.plugins.screenorientation"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.3",
    "kr.co.joycorp.cordova.exitapp": "1.0.0",
    "cordova-plugin-exit": "1.0.3",
    "cordova-plugin-inappbrowser": "3.0.0",
    "es6-promise-plugin": "4.2.2",
    "cordova-plugin-screen-orientation": "3.0.1"
  };
});