Navigator = function Navigator(){
    dtavm.throwError("TypeError", "Illegal constructor")
}
dtavm.func_set_native(Navigator)
dtavm.rename(Navigator.prototype, "Navigator")

dtavm.defineProperty(Navigator.prototype, 'vendorSub', '', true, true, true)
dtavm.defineProperty(Navigator.prototype, 'productSub', '20030107', true, true, true)
dtavm.defineProperty(Navigator.prototype, 'vendor', 'Google Inc.', true, true, true)
dtavm.defineProperty(Navigator.prototype, 'maxTouchPoints', 0, true, true, true)
dtavm.defineProperty(Navigator.prototype, 'userActivation', {}, true, true, true)
dtavm.defineProperty(Navigator.prototype, 'doNotTrack', null, true, true, true)
dtavm.defineProperty(Navigator.prototype, 'geolocation', {}, true, true, true)
dtavm.defineProperty(Navigator.prototype, 'connection', {}, true, true, true)
dtavm.defineProperty(Navigator.prototype, 'plugins', {}, true, true, true)
dtavm.defineProperty(Navigator.prototype, 'mimeTypes', {}, true, true, true)
dtavm.defineProperty(Navigator.prototype, 'pdfViewerEnabled', true, true, true, true)
dtavm.defineProperty(Navigator.prototype, 'webkitTemporaryStorage', {}, true, true, true)
dtavm.defineProperty(Navigator.prototype, 'webkitPersistentStorage', {}, true, true, true)
dtavm.defineProperty(Navigator.prototype, 'hardwareConcurrency', 16, true, true, true)
dtavm.defineProperty(Navigator.prototype, 'cookieEnabled', true, true, true, true)
dtavm.defineProperty(Navigator.prototype, 'appCodeName', 'Mozilla', true, true, true)
dtavm.defineProperty(Navigator.prototype, 'appName', 'Netscape', true, true, true)
dtavm.defineProperty(Navigator.prototype, 'appVersion', '5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.88 Safari/537.36', true, true, true)
dtavm.defineProperty(Navigator.prototype, 'platform', 'Linux x86_64', true, true, true)
dtavm.defineProperty(Navigator.prototype, 'product', 'Gecko', true, true, true)
dtavm.defineProperty(Navigator.prototype, 'userAgent', 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.88 Safari/537.36', true, true, true)
dtavm.defineProperty(Navigator.prototype, 'language', 'en-US', true, true, true)
dtavm.defineProperty(Navigator.prototype, 'languages', [], true, true, true)
dtavm.defineProperty(Navigator.prototype, 'onLine', true, true, true, true)
dtavm.defineProperty(Navigator.prototype, 'webdriver', false, true, true, true)
dtavm.defineProperty(Navigator.prototype, 'getBattery', function getBattery(){debugger;}, true, true, true); dtavm.func_set_native(Navigator.prototype.getBattery)
dtavm.defineProperty(Navigator.prototype, 'getGamepads', function getGamepads(){debugger;}, true, true, true); dtavm.func_set_native(Navigator.prototype.getGamepads)
dtavm.defineProperty(Navigator.prototype, 'javaEnabled', function javaEnabled(){debugger;}, true, true, true); dtavm.func_set_native(Navigator.prototype.javaEnabled)
dtavm.defineProperty(Navigator.prototype, 'sendBeacon', function sendBeacon(){debugger;}, true, true, true); dtavm.func_set_native(Navigator.prototype.sendBeacon)
dtavm.defineProperty(Navigator.prototype, 'vibrate', function vibrate(){debugger;}, true, true, true); dtavm.func_set_native(Navigator.prototype.vibrate)
dtavm.defineProperty(Navigator.prototype, 'constructor', function constructor(){debugger;}, true, true, true); dtavm.func_set_native(Navigator.prototype.constructor)
dtavm.defineProperty(Navigator.prototype, 'scheduling', {}, true, true, true)
dtavm.defineProperty(Navigator.prototype, 'clipboard', {}, true, true, true)
dtavm.defineProperty(Navigator.prototype, 'credentials', {}, true, true, true)
dtavm.defineProperty(Navigator.prototype, 'keyboard', {}, true, true, true)
dtavm.defineProperty(Navigator.prototype, 'managed', {}, true, true, true)
dtavm.defineProperty(Navigator.prototype, 'mediaDevices', {}, true, true, true)
dtavm.defineProperty(Navigator.prototype, 'storage', {}, true, true, true)
dtavm.defineProperty(Navigator.prototype, 'serviceWorker', {}, true, true, true)
dtavm.defineProperty(Navigator.prototype, 'wakeLock', {}, true, true, true)
dtavm.defineProperty(Navigator.prototype, 'deviceMemory', 8, true, true, true)
dtavm.defineProperty(Navigator.prototype, 'ink', {}, true, true, true)
dtavm.defineProperty(Navigator.prototype, 'hid', {}, true, true, true)
dtavm.defineProperty(Navigator.prototype, 'locks', {}, true, true, true)
dtavm.defineProperty(Navigator.prototype, 'mediaCapabilities', {}, true, true, true)
dtavm.defineProperty(Navigator.prototype, 'mediaSession', {}, true, true, true)
dtavm.defineProperty(Navigator.prototype, 'permissions', {}, true, true, true)
dtavm.defineProperty(Navigator.prototype, 'presentation', {}, true, true, true)
dtavm.defineProperty(Navigator.prototype, 'serial', {}, true, true, true)
dtavm.defineProperty(Navigator.prototype, 'virtualKeyboard', {}, true, true, true)
dtavm.defineProperty(Navigator.prototype, 'usb', {}, true, true, true)
dtavm.defineProperty(Navigator.prototype, 'xr', {}, true, true, true)
dtavm.defineProperty(Navigator.prototype, 'userAgentData', {}, true, true, true)
dtavm.defineProperty(Navigator.prototype, 'clearAppBadge', function clearAppBadge(){debugger;}, true, true, true); dtavm.func_set_native(Navigator.prototype.clearAppBadge)
dtavm.defineProperty(Navigator.prototype, 'setAppBadge', function setAppBadge(){debugger;}, true, true, true); dtavm.func_set_native(Navigator.prototype.setAppBadge)
dtavm.defineProperty(Navigator.prototype, 'getInstalledRelatedApps', function getInstalledRelatedApps(){debugger;}, true, true, true); dtavm.func_set_native(Navigator.prototype.getInstalledRelatedApps)
dtavm.defineProperty(Navigator.prototype, 'getUserMedia', function getUserMedia(){debugger;}, true, true, true); dtavm.func_set_native(Navigator.prototype.getUserMedia)
dtavm.defineProperty(Navigator.prototype, 'requestMIDIAccess', function requestMIDIAccess(){debugger;}, true, true, true); dtavm.func_set_native(Navigator.prototype.requestMIDIAccess)
dtavm.defineProperty(Navigator.prototype, 'requestMediaKeySystemAccess', function requestMediaKeySystemAccess(){debugger;}, true, true, true); dtavm.func_set_native(Navigator.prototype.requestMediaKeySystemAccess)
dtavm.defineProperty(Navigator.prototype, 'webkitGetUserMedia', function webkitGetUserMedia(){debugger;}, true, true, true); dtavm.func_set_native(Navigator.prototype.webkitGetUserMedia)
dtavm.defineProperty(Navigator.prototype, 'registerProtocolHandler', function registerProtocolHandler(){debugger;}, true, true, true); dtavm.func_set_native(Navigator.prototype.registerProtocolHandler)
dtavm.defineProperty(Navigator.prototype, 'unregisterProtocolHandler', function unregisterProtocolHandler(){debugger;}, true, true, true); dtavm.func_set_native(Navigator.prototype.unregisterProtocolHandler)

navigator = {}
Object.setPrototypeOf(navigator, Navigator.prototype)
