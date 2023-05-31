var v_saf;!function(){var n=Function.toString,t=[],i=[],o=[].indexOf.bind(t),e=[].push.bind(t),r=[].push.bind(i);function u(n,t){return-1==o(n)&&(e(n),r(`function ${t||n.name||""}() { [native code] }`)),n}Object.defineProperty(Function.prototype,"toString",{enumerable:!1,configurable:!0,writable:!0,value:function(){return"function"==typeof this&&i[o(this)]||n.call(this)}}),u(Function.prototype.toString,"toString"),v_saf=u}();


function _inherits(t, e) {
  t.prototype = Object.create(e.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 }
  }), e && Object.setPrototypeOf(t, e) }
Object.defineProperty(Object.prototype, Symbol.toStringTag, {
  get() { return Object.getPrototypeOf(this).constructor.name }
});
var v_new_toggle = true
Object.freeze(console)//only for javascript-obfuscator anti console debug.
var v_console_logger = console.log
var v_console_log = function(){if (!v_new_toggle){ v_console_logger.apply(this, arguments) }}
var v_random = (function() { var seed = 276951438; return function random() { return seed = (seed * 9301 + 49297) % 233280, (seed / 233280)} })()
var v_new = function(v){var temp=v_new_toggle; v_new_toggle = true; var r = new v; v_new_toggle = temp; return r}


Navigator = v_saf(function Navigator(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };this._plugins = typeof PluginArray=='undefined'?[]:v_new(PluginArray); this._mimeTypes = typeof MimeTypeArray=='undefined'?[]:v_new(MimeTypeArray)})
EventTarget = v_saf(function EventTarget(){;})
HTMLCollection = v_saf(function HTMLCollection(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
Storage = v_saf(function Storage(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
Event = v_saf(function Event(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
PerformanceTiming = v_saf(function PerformanceTiming(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
PerformanceEntry = v_saf(function PerformanceEntry(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
PerformanceObserver = v_saf(function PerformanceObserver(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
DOMRectReadOnly = v_saf(function DOMRectReadOnly(){;})
URLSearchParams = v_saf(function URLSearchParams(){;})
StyleSheet = v_saf(function StyleSheet(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
CSSRuleList = v_saf(function CSSRuleList(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
IntersectionObserver = v_saf(function IntersectionObserver(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
Headers = v_saf(function Headers(){;})
URL = v_saf(function URL(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
PerformanceObserverEntryList = v_saf(function PerformanceObserverEntryList(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
IntersectionObserverEntry = v_saf(function IntersectionObserverEntry(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
Response = v_saf(function Response(){;})
NodeList = v_saf(function NodeList(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
History = v_saf(function History(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
webkitURL = v_saf(function webkitURL(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
Image = v_saf(function Image(){;return v_new(HTMLImageElement)})
TextDecoder = v_saf(function TextDecoder(){;})
Screen = v_saf(function Screen(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(Screen, EventTarget)
Node = v_saf(function Node(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(Node, EventTarget)
Performance = v_saf(function Performance(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(Performance, EventTarget)
DOMRect = v_saf(function DOMRect(){;}); _inherits(DOMRect, DOMRectReadOnly)
CSSStyleSheet = v_saf(function CSSStyleSheet(){;}); _inherits(CSSStyleSheet, StyleSheet)
LayoutShift = v_saf(function LayoutShift(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(LayoutShift, PerformanceEntry)
XMLHttpRequestEventTarget = v_saf(function XMLHttpRequestEventTarget(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(XMLHttpRequestEventTarget, EventTarget)
PageTransitionEvent = v_saf(function PageTransitionEvent(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PageTransitionEvent, Event)
PerformanceResourceTiming = v_saf(function PerformanceResourceTiming(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PerformanceResourceTiming, PerformanceEntry)
MessagePort = v_saf(function MessagePort(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(MessagePort, EventTarget)
UIEvent = v_saf(function UIEvent(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(UIEvent, Event)
MessageEvent = v_saf(function MessageEvent(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(MessageEvent, Event)
ScreenOrientation = v_saf(function ScreenOrientation(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(ScreenOrientation, EventTarget)
Worker = v_saf(function Worker(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(Worker, EventTarget)
NetworkInformation = v_saf(function NetworkInformation(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(NetworkInformation, EventTarget)
Document = v_saf(function Document(){;}); _inherits(Document, Node)
Element = v_saf(function Element(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(Element, Node)
XMLHttpRequest = v_saf(function XMLHttpRequest(){;}); _inherits(XMLHttpRequest, XMLHttpRequestEventTarget)
MouseEvent = v_saf(function MouseEvent(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(MouseEvent, UIEvent)
PerformanceNavigationTiming = v_saf(function PerformanceNavigationTiming(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PerformanceNavigationTiming, PerformanceResourceTiming)
HTMLElement = v_saf(function HTMLElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLElement, Element)
HTMLScriptElement = v_saf(function HTMLScriptElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLScriptElement, HTMLElement)
HTMLLinkElement = v_saf(function HTMLLinkElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLLinkElement, HTMLElement)
HTMLStyleElement = v_saf(function HTMLStyleElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLStyleElement, HTMLElement)
HTMLInputElement = v_saf(function HTMLInputElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLInputElement, HTMLElement)
HTMLImageElement = v_saf(function HTMLImageElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLImageElement, HTMLElement)
Window = v_saf(function Window(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(Window, EventTarget)
HTMLDocument = v_saf(function HTMLDocument(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };Object.defineProperty(this, 'location', {get(){return location}})}); _inherits(HTMLDocument, Document)
PluginArray = v_saf(function PluginArray(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };
  this[0]=v_new(Plugin);this[0].description="Portable Document Format";this[0].filename="internal-pdf-viewer";this[0].length=2;this[0].name="PDF Viewer";
  this[1]=v_new(Plugin);this[1].description="Portable Document Format";this[1].filename="internal-pdf-viewer";this[1].length=2;this[1].name="Chrome PDF Viewer";
  this[2]=v_new(Plugin);this[2].description="Portable Document Format";this[2].filename="internal-pdf-viewer";this[2].length=2;this[2].name="Chromium PDF Viewer";
  this[3]=v_new(Plugin);this[3].description="Portable Document Format";this[3].filename="internal-pdf-viewer";this[3].length=2;this[3].name="Microsoft Edge PDF Viewer";
  this[4]=v_new(Plugin);this[4].description="Portable Document Format";this[4].filename="internal-pdf-viewer";this[4].length=2;this[4].name="WebKit built-in PDF";})
Plugin = v_saf(function Plugin(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
MimeTypeArray = v_saf(function MimeTypeArray(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };
  this[0]=v_new(Plugin);this[0].description="Portable Document Format";this[0].enabledPlugin={"0":{},"1":{}};this[0].suffixes="pdf";this[0].type="application/pdf";
  this[1]=v_new(Plugin);this[1].description="Portable Document Format";this[1].enabledPlugin={"0":{},"1":{}};this[1].suffixes="pdf";this[1].type="text/pdf";})
MimeType = v_saf(function MimeType(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
CSSStyleDeclaration = v_saf(function CSSStyleDeclaration(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
Location = v_saf(function Location(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
HTMLCanvasElement = v_saf(function HTMLCanvasElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLCanvasElement, HTMLElement)
WebGLRenderingContext = v_saf(function WebGLRenderingContext(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };
  function WebGLBuffer(){}
  function WebGLProgram(){}
  function WebGLShader(){}
  this._toggle = {}
  this.createBuffer = function(){ v_console_log('  [*] WebGLRenderingContext -> createBuffer[func]'); return v_new(WebGLBuffer) }
  this.createProgram = function(){ v_console_log('  [*] WebGLRenderingContext -> createProgram[func]'); return v_new(WebGLProgram) }
  this.createShader = function(){ v_console_log('  [*] WebGLRenderingContext -> createShader[func]'); return v_new(WebGLShader) }
  this.getSupportedExtensions = function(){
    v_console_log('  [*] WebGLRenderingContext -> getSupportedExtensions[func]')
    return [
      "ANGLE_instanced_arrays", "EXT_blend_minmax", "EXT_color_buffer_half_float", "EXT_disjoint_timer_query", "EXT_float_blend", "EXT_frag_depth",
      "EXT_shader_texture_lod", "EXT_texture_compression_bptc", "EXT_texture_compression_rgtc", "EXT_texture_filter_anisotropic", "WEBKIT_EXT_texture_filter_anisotropic", "EXT_sRGB",
      "KHR_parallel_shader_compile", "OES_element_index_uint", "OES_fbo_render_mipmap", "OES_standard_derivatives", "OES_texture_float", "OES_texture_float_linear",
      "OES_texture_half_float", "OES_texture_half_float_linear", "OES_vertex_array_object", "WEBGL_color_buffer_float", "WEBGL_compressed_texture_s3tc",
      "WEBKIT_WEBGL_compressed_texture_s3tc", "WEBGL_compressed_texture_s3tc_srgb", "WEBGL_debug_renderer_info", "WEBGL_debug_shaders",
      "WEBGL_depth_texture","WEBKIT_WEBGL_depth_texture","WEBGL_draw_buffers","WEBGL_lose_context","WEBKIT_WEBGL_lose_context","WEBGL_multi_draw",
    ]
  }
  var self = this
  this.getExtension = function(key){
    v_console_log('  [*] WebGLRenderingContext -> getExtension[func]:', key)
    class WebGLDebugRendererInfo{
      get UNMASKED_VENDOR_WEBGL(){self._toggle[37445]=1;return 37445}
      get UNMASKED_RENDERER_WEBGL(){self._toggle[37446]=1;return 37446}
    }
    class EXTTextureFilterAnisotropic{}
    class WebGLLoseContext{
      loseContext(){}
      restoreContext(){}
    }
    if (key == 'WEBGL_debug_renderer_info'){ var r = new WebGLDebugRendererInfo }
    if (key == 'EXT_texture_filter_anisotropic'){ var r = new EXTTextureFilterAnisotropic }
    if (key == 'WEBGL_lose_context'){ var r = new WebGLLoseContext }
    else{ var r = new WebGLDebugRendererInfo }
    return r
  }
  this.getParameter = function(key){
    v_console_log('  [*] WebGLRenderingContext -> getParameter[func]:', key)
    if (this._toggle[key]){
      if (key == 37445){ return "Google Inc. (NVIDIA)" }
      if (key == 37446){ return "ANGLE (NVIDIA, NVIDIA GeForce GTX 1050 Ti Direct3D11 vs_5_0 ps_5_0, D3D11-27.21.14.5671)" }
    }else{
      if (key == 33902){ return new Float32Array([1,1]) }
      if (key == 33901){ return new Float32Array([1,1024]) }
      if (key == 35661){ return 32 }
      if (key == 34047){ return 16 }
      if (key == 34076){ return 16384 }
      if (key == 36349){ return 1024 }
      if (key == 34024){ return 16384 }
      if (key == 34930){ return 16 }
      if (key == 3379){ return 16384 }
      if (key == 36348){ return 30 }
      if (key == 34921){ return 16 }
      if (key == 35660){ return 16 }
      if (key == 36347){ return 4095 }
      if (key == 3386){ return new Int32Array([32767, 32767]) }
      if (key == 3410){ return 8 }
      if (key == 7937){ return "WebKit WebGL" }
      if (key == 35724){ return "WebGL GLSL ES 1.0 (OpenGL ES GLSL ES 1.0 Chromium)" }
      if (key == 3415){ return 0 }
      if (key == 7936){ return "WebKit" }
      if (key == 7938){ return "WebGL 1.0 (OpenGL ES 2.0 Chromium)" }
      if (key == 3411){ return 8 }
      if (key == 3412){ return 8 }
      if (key == 3413){ return 8 }
      if (key == 3414){ return 24 }
      return null
    }
  }
  this.getContextAttributes = function(){
    v_console_log('  [*] WebGLRenderingContext -> getContextAttributes[func]')
    return {
      alpha: true,
      antialias: true,
      depth: true,
      desynchronized: false,
      failIfMajorPerformanceCaveat: false,
      powerPreference: "default",
      premultipliedAlpha: true,
      preserveDrawingBuffer: false,
      stencil: false,
      xrCompatible: false,
    }
  }
  this.getShaderPrecisionFormat = function(a,b){
    v_console_log('  [*] WebGLRenderingContext -> getShaderPrecisionFormat[func]')
    function WebGLShaderPrecisionFormat(){}
    var r1 = v_new(WebGLShaderPrecisionFormat)
    r1.rangeMin = 127
    r1.rangeMax = 127
    r1.precision = 23
    var r2 = v_new(WebGLShaderPrecisionFormat)
    r2.rangeMin = 31
    r2.rangeMax = 30
    r2.precision = 0
    if (a == 35633 && b == 36338){ return r1 } if (a == 35633 && b == 36337){ return r1 } if (a == 35633 && b == 36336){ return r1 }
    if (a == 35633 && b == 36341){ return r2 } if (a == 35633 && b == 36340){ return r2 } if (a == 35633 && b == 36339){ return r2 }
    if (a == 35632 && b == 36338){ return r1 } if (a == 35632 && b == 36337){ return r1 } if (a == 35632 && b == 36336){ return r1 }
    if (a == 35632 && b == 36341){ return r2 } if (a == 35632 && b == 36340){ return r2 } if (a == 35632 && b == 36339){ return r2 }
    throw Error('getShaderPrecisionFormat')
  }
  v_saf(this.createBuffer, 'createBuffer')
  v_saf(this.createProgram, 'createProgram')
  v_saf(this.createShader, 'createShader')
  v_saf(this.getSupportedExtensions, 'getSupportedExtensions')
  v_saf(this.getExtension, 'getExtension')
  v_saf(this.getParameter, 'getParameter')
  v_saf(this.getContextAttributes, 'getContextAttributes')
  v_saf(this.getShaderPrecisionFormat, 'getShaderPrecisionFormat')})
CanvasRenderingContext2D = v_saf(function CanvasRenderingContext2D(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
HTMLMediaElement = v_saf(function HTMLMediaElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLMediaElement, HTMLElement)
HTMLHtmlElement = v_saf(function HTMLHtmlElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLHtmlElement, HTMLElement)
HTMLDivElement = v_saf(function HTMLDivElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLDivElement, HTMLElement)
HTMLAnchorElement = v_saf(function HTMLAnchorElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };v_hook_href(this, 'HTMLAnchorElement', location.href)}); _inherits(HTMLAnchorElement, HTMLElement)
HTMLBodyElement = v_saf(function HTMLBodyElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLBodyElement, HTMLElement)
HTMLTitleElement = v_saf(function HTMLTitleElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLTitleElement, HTMLElement)
Object.defineProperties(Navigator.prototype, {
  userAgent: {get(){ v_console_log("  [*] Navigator -> userAgent[get]", "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.88 Safari/537.36");return "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.88 Safari/537.36" }},
  webdriver: {get(){ v_console_log("  [*] Navigator -> webdriver[get]", false);return false }},
  platform: {get(){ v_console_log("  [*] Navigator -> platform[get]", "Linux x86_64");return "Linux x86_64" }},
  cookieEnabled: {get(){ v_console_log("  [*] Navigator -> cookieEnabled[get]", true);return true }},
  javaEnabled: {value: v_saf(function javaEnabled(){v_console_log("  [*] Navigator -> javaEnabled[func]", [].slice.call(arguments));return true})},
  language: {get(){ v_console_log("  [*] Navigator -> language[get]", "en-US");return "en-US" }},
  connection: {get(){ v_console_log("  [*] Navigator -> connection[get]", {});return {} }},
  [Symbol.toStringTag]: {value:"Navigator",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(EventTarget.prototype, {
  removeEventListener: {value: v_saf(function removeEventListener(){v_console_log("  [*] EventTarget -> removeEventListener[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"EventTarget",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLCollection.prototype, {
  length: {get(){ v_console_log("  [*] HTMLCollection -> length[get]", 24);return 24 }},
  [Symbol.toStringTag]: {value:"HTMLCollection",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Storage.prototype, {
  [Symbol.toStringTag]: {value:"Storage",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Event.prototype, {
  target: {get(){ v_console_log("  [*] Event -> target[get]", {});return {} }},
  type: {get(){ v_console_log("  [*] Event -> type[get]", "load");return "load" }},
  eventPhase: {get(){ v_console_log("  [*] Event -> eventPhase[get]", 3);return 3 }},
  bubbles: {get(){ v_console_log("  [*] Event -> bubbles[get]", true);return true }},
  cancelable: {get(){ v_console_log("  [*] Event -> cancelable[get]", true);return true }},
  timeStamp: {get(){ v_console_log("  [*] Event -> timeStamp[get]", 5955.799999999814);return 5955.799999999814 }},
  defaultPrevented: {get(){ v_console_log("  [*] Event -> defaultPrevented[get]", false);return false }},
  srcElement: {get(){ v_console_log("  [*] Event -> srcElement[get]", {});return {} }},
  NONE: {"value":0,"writable":false,"enumerable":true,"configurable":false},
  CAPTURING_PHASE: {"value":1,"writable":false,"enumerable":true,"configurable":false},
  AT_TARGET: {"value":2,"writable":false,"enumerable":true,"configurable":false},
  BUBBLING_PHASE: {"value":3,"writable":false,"enumerable":true,"configurable":false},
  [Symbol.toStringTag]: {value:"Event",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceTiming.prototype, {
  navigationStart: {get(){ v_console_log("  [*] PerformanceTiming -> navigationStart[get]", 1650707853069);return 1650707853069 }},
  loadEventEnd: {get(){ v_console_log("  [*] PerformanceTiming -> loadEventEnd[get]", 0);return 0 }},
  unloadEventStart: {get(){ v_console_log("  [*] PerformanceTiming -> unloadEventStart[get]", 1650707853221);return 1650707853221 }},
  unloadEventEnd: {get(){ v_console_log("  [*] PerformanceTiming -> unloadEventEnd[get]", 1650707853230);return 1650707853230 }},
  redirectStart: {get(){ v_console_log("  [*] PerformanceTiming -> redirectStart[get]", 0);return 0 }},
  redirectEnd: {get(){ v_console_log("  [*] PerformanceTiming -> redirectEnd[get]", 0);return 0 }},
  fetchStart: {get(){ v_console_log("  [*] PerformanceTiming -> fetchStart[get]", 1650707853077);return 1650707853077 }},
  domainLookupStart: {get(){ v_console_log("  [*] PerformanceTiming -> domainLookupStart[get]", 1650707853077);return 1650707853077 }},
  domainLookupEnd: {get(){ v_console_log("  [*] PerformanceTiming -> domainLookupEnd[get]", 1650707853077);return 1650707853077 }},
  connectStart: {get(){ v_console_log("  [*] PerformanceTiming -> connectStart[get]", 1650707853077);return 1650707853077 }},
  connectEnd: {get(){ v_console_log("  [*] PerformanceTiming -> connectEnd[get]", 1650707853077);return 1650707853077 }},
  secureConnectionStart: {get(){ v_console_log("  [*] PerformanceTiming -> secureConnectionStart[get]", 0);return 0 }},
  requestStart: {get(){ v_console_log("  [*] PerformanceTiming -> requestStart[get]", 1650707853080);return 1650707853080 }},
  responseStart: {get(){ v_console_log("  [*] PerformanceTiming -> responseStart[get]", 1650707853210);return 1650707853210 }},
  responseEnd: {get(){ v_console_log("  [*] PerformanceTiming -> responseEnd[get]", 1650707853256);return 1650707853256 }},
  domLoading: {get(){ v_console_log("  [*] PerformanceTiming -> domLoading[get]", 1650707853236);return 1650707853236 }},
  domInteractive: {get(){ v_console_log("  [*] PerformanceTiming -> domInteractive[get]", 1650707854885);return 1650707854885 }},
  domContentLoadedEventStart: {get(){ v_console_log("  [*] PerformanceTiming -> domContentLoadedEventStart[get]", 1650707854934);return 1650707854934 }},
  domContentLoadedEventEnd: {get(){ v_console_log("  [*] PerformanceTiming -> domContentLoadedEventEnd[get]", 1650707855323);return 1650707855323 }},
  domComplete: {get(){ v_console_log("  [*] PerformanceTiming -> domComplete[get]", 1650707855953);return 1650707855953 }},
  loadEventStart: {get(){ v_console_log("  [*] PerformanceTiming -> loadEventStart[get]", 1650707855953);return 1650707855953 }},
  [Symbol.toStringTag]: {value:"PerformanceTiming",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceEntry.prototype, {
  name: {get(){ v_console_log("  [*] PerformanceEntry -> name[get]", "first-contentful-paint");return "first-contentful-paint" }},
  startTime: {get(){ v_console_log("  [*] PerformanceEntry -> startTime[get]", 2546);return 2546 }},
  duration: {get(){ v_console_log("  [*] PerformanceEntry -> duration[get]", 149);return 149 }},
  [Symbol.toStringTag]: {value:"PerformanceEntry",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceObserver.prototype, {
  observe: {value: v_saf(function observe(){v_console_log("  [*] PerformanceObserver -> observe[func]", [].slice.call(arguments));})},
  disconnect: {value: v_saf(function disconnect(){v_console_log("  [*] PerformanceObserver -> disconnect[func]", [].slice.call(arguments));})},
  takeRecords: {value: v_saf(function takeRecords(){v_console_log("  [*] PerformanceObserver -> takeRecords[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"PerformanceObserver",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(DOMRectReadOnly.prototype, {
  top: {get(){ v_console_log("  [*] DOMRectReadOnly -> top[get]", 3927.75);return 3927.75 }},
  left: {get(){ v_console_log("  [*] DOMRectReadOnly -> left[get]", 0);return 0 }},
  bottom: {get(){ v_console_log("  [*] DOMRectReadOnly -> bottom[get]", 3909.75);return 3909.75 }},
  [Symbol.toStringTag]: {value:"DOMRectReadOnly",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(URLSearchParams.prototype, {
  toString: {value: v_saf(function toString(){v_console_log("  [*] URLSearchParams -> toString[func]", [].slice.call(arguments));})},
  set: {value: v_saf(function set(){v_console_log("  [*] URLSearchParams -> set[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"URLSearchParams",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(StyleSheet.prototype, {
  [Symbol.toStringTag]: {value:"StyleSheet",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(CSSRuleList.prototype, {
  length: {get(){ v_console_log("  [*] CSSRuleList -> length[get]", 276);return 276 }},
  [Symbol.toStringTag]: {value:"CSSRuleList",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(IntersectionObserver.prototype, {
  observe: {value: v_saf(function observe(){v_console_log("  [*] IntersectionObserver -> observe[func]", [].slice.call(arguments));})},
  disconnect: {value: v_saf(function disconnect(){v_console_log("  [*] IntersectionObserver -> disconnect[func]", [].slice.call(arguments));})},
  unobserve: {value: v_saf(function unobserve(){v_console_log("  [*] IntersectionObserver -> unobserve[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"IntersectionObserver",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Headers.prototype, {
  has: {value: v_saf(function has(){v_console_log("  [*] Headers -> has[func]", [].slice.call(arguments));})},
  get: {value: v_saf(function get(){v_console_log("  [*] Headers -> get[func]", [].slice.call(arguments));})},
  set: {value: v_saf(function set(){v_console_log("  [*] Headers -> set[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"Headers",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(URL.prototype, {
  pathname: {get(){ v_console_log("  [*] URL -> pathname[get]", "/api/v4/search/calendar");return "/api/v4/search/calendar" }},
  search: {get(){ v_console_log("  [*] URL -> search[get]", "?q=python");return "?q=python" }},
  [Symbol.toStringTag]: {value:"URL",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceObserverEntryList.prototype, {
  getEntries: {value: v_saf(function getEntries(){v_console_log("  [*] PerformanceObserverEntryList -> getEntries[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"PerformanceObserverEntryList",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(IntersectionObserverEntry.prototype, {
  isIntersecting: {get(){ v_console_log("  [*] IntersectionObserverEntry -> isIntersecting[get]", true);return true }},
  intersectionRatio: {get(){ v_console_log("  [*] IntersectionObserverEntry -> intersectionRatio[get]", 1);return 1 }},
  target: {get(){ v_console_log("  [*] IntersectionObserverEntry -> target[get]", {});return {} }},
  [Symbol.toStringTag]: {value:"IntersectionObserverEntry",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Response.prototype, {
  status: {get(){ v_console_log("  [*] Response -> status[get]", 200);return 200 }},
  headers: {get(){ v_console_log("  [*] Response -> headers[get]", {});return {} }},
  json: {value: v_saf(function json(){v_console_log("  [*] Response -> json[func]", [].slice.call(arguments));})},
  ok: {get(){ v_console_log("  [*] Response -> ok[get]", true);return true }},
  [Symbol.toStringTag]: {value:"Response",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(NodeList.prototype, {
  length: {get(){ v_console_log("  [*] NodeList -> length[get]", 0);return 0 }},
  [Symbol.toStringTag]: {value:"NodeList",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(History.prototype, {
  state: {get(){ v_console_log("  [*] History -> state[get]", {});return {} }},
  [Symbol.toStringTag]: {value:"History",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(webkitURL.prototype, {
  pathname: {get(){ v_console_log("  [*] webkitURL -> pathname[get]", "/api/v4/search/calendar");return "/api/v4/search/calendar" }},
  search: {get(){ v_console_log("  [*] webkitURL -> search[get]", "?q=python");return "?q=python" }},
  [Symbol.toStringTag]: {value:"webkitURL",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Image.prototype, {
  src: {set(){ v_console_log("  [*] Image -> src[set]", [].slice.call(arguments)); }},
  [Symbol.toStringTag]: {value:"Image",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(TextDecoder.prototype, {
  decode: {value: v_saf(function decode(){v_console_log("  [*] TextDecoder -> decode[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"TextDecoder",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Screen.prototype, {
  width: {get(){ v_console_log("  [*] Screen -> width[get]", 1918);return 1918 }},
  height: {get(){ v_console_log("  [*] Screen -> height[get]", 918);return 918 }},
  colorDepth: {get(){ v_console_log("  [*] Screen -> colorDepth[get]", 24);return 24 }},
  orientation: {get(){ v_console_log("  [*] Screen -> orientation[get]", {});return {} }},
  [Symbol.toStringTag]: {value:"Screen",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Node.prototype, {
  parentElement: {get(){ v_console_log("  [*] Node -> parentElement[get]", {});return {} }},
  textContent: {get(){ v_console_log("  [*] Node -> textContent[get]", "c++如此繁琐，为什么大学不直接开展python课程？");return "c++如此繁琐，为什么大学不直接开展python课程？" },set(){ v_console_log("  [*] Node -> textContent[set]", [].slice.call(arguments));return "c++如此繁琐，为什么大学不直接开展python课程？" }},
  appendChild: {value: v_saf(function appendChild(){v_console_log("  [*] Node -> appendChild[func]", [].slice.call(arguments));})},
  removeChild: {value: v_saf(function removeChild(){v_console_log("  [*] Node -> removeChild[func]", [].slice.call(arguments));})},
  firstChild: {get(){ v_console_log("  [*] Node -> firstChild[get]", {});return {} }},
  insertBefore: {value: v_saf(function insertBefore(){v_console_log("  [*] Node -> insertBefore[func]", [].slice.call(arguments));})},
  isEqualNode: {value: v_saf(function isEqualNode(){v_console_log("  [*] Node -> isEqualNode[func]", [].slice.call(arguments));})},
  nodeType: {get(){ v_console_log("  [*] Node -> nodeType[get]", 9);return 9 }},
  nextSibling: {get(){ v_console_log("  [*] Node -> nextSibling[get]", {});return {} }},
  nodeName: {get(){ v_console_log("  [*] Node -> nodeName[get]", "DIV");return "DIV" }},
  ownerDocument: {get(){ v_console_log("  [*] Node -> ownerDocument[get]", {});return {} }},
  parentNode: {get(){ v_console_log("  [*] Node -> parentNode[get]", {});return {} }},
  contains: {value: v_saf(function contains(){v_console_log("  [*] Node -> contains[func]", [].slice.call(arguments));})},
  ELEMENT_NODE: {"value":1,"writable":false,"enumerable":true,"configurable":false},
  ATTRIBUTE_NODE: {"value":2,"writable":false,"enumerable":true,"configurable":false},
  TEXT_NODE: {"value":3,"writable":false,"enumerable":true,"configurable":false},
  CDATA_SECTION_NODE: {"value":4,"writable":false,"enumerable":true,"configurable":false},
  ENTITY_REFERENCE_NODE: {"value":5,"writable":false,"enumerable":true,"configurable":false},
  ENTITY_NODE: {"value":6,"writable":false,"enumerable":true,"configurable":false},
  PROCESSING_INSTRUCTION_NODE: {"value":7,"writable":false,"enumerable":true,"configurable":false},
  COMMENT_NODE: {"value":8,"writable":false,"enumerable":true,"configurable":false},
  DOCUMENT_NODE: {"value":9,"writable":false,"enumerable":true,"configurable":false},
  DOCUMENT_TYPE_NODE: {"value":10,"writable":false,"enumerable":true,"configurable":false},
  DOCUMENT_FRAGMENT_NODE: {"value":11,"writable":false,"enumerable":true,"configurable":false},
  NOTATION_NODE: {"value":12,"writable":false,"enumerable":true,"configurable":false},
  DOCUMENT_POSITION_DISCONNECTED: {"value":1,"writable":false,"enumerable":true,"configurable":false},
  DOCUMENT_POSITION_PRECEDING: {"value":2,"writable":false,"enumerable":true,"configurable":false},
  DOCUMENT_POSITION_FOLLOWING: {"value":4,"writable":false,"enumerable":true,"configurable":false},
  DOCUMENT_POSITION_CONTAINS: {"value":8,"writable":false,"enumerable":true,"configurable":false},
  DOCUMENT_POSITION_CONTAINED_BY: {"value":16,"writable":false,"enumerable":true,"configurable":false},
  DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: {"value":32,"writable":false,"enumerable":true,"configurable":false},
  [Symbol.toStringTag]: {value:"Node",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Performance.prototype, {
  timing: {get(){ v_console_log("  [*] Performance -> timing[get]", v_new(PerformanceTiming));return v_new(PerformanceTiming) }},
  getEntriesByType: {value: v_saf(function getEntriesByType(){v_console_log("  [*] Performance -> getEntriesByType[func]", [].slice.call(arguments));if (arguments[0]=='resource'){return v_new(PerformanceResourceTiming)}})},
  now: {value: v_saf(function now(){v_console_log("  [*] Performance -> now[func]", [].slice.call(arguments));})},
  getEntries: {value: v_saf(function getEntries(){v_console_log("  [*] Performance -> getEntries[func]", [].slice.call(arguments));})},
  navigation: {get(){ v_console_log("  [*] Performance -> navigation[get]", {});return {} }},
  getEntriesByName: {value: v_saf(function getEntriesByName(){v_console_log("  [*] Performance -> getEntriesByName[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"Performance",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(DOMRect.prototype, {
  width: {get(){ v_console_log("  [*] DOMRect -> width[get]", 482);return 482 }},
  height: {get(){ v_console_log("  [*] DOMRect -> height[get]", 52);return 52 }},
  [Symbol.toStringTag]: {value:"DOMRect",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(CSSStyleSheet.prototype, {
  cssRules: {get(){ v_console_log("  [*] CSSStyleSheet -> cssRules[get]", {});return {} }},
  insertRule: {value: v_saf(function insertRule(){v_console_log("  [*] CSSStyleSheet -> insertRule[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"CSSStyleSheet",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(LayoutShift.prototype, {
  hadRecentInput: {get(){ v_console_log("  [*] LayoutShift -> hadRecentInput[get]", false);return false }},
  value: {get(){ v_console_log("  [*] LayoutShift -> value[get]", 0.04082983876337693);return 0.04082983876337693 }},
  [Symbol.toStringTag]: {value:"LayoutShift",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(XMLHttpRequestEventTarget.prototype, {
  onerror: {get(){ v_console_log("  [*] XMLHttpRequestEventTarget -> onerror[get]", {});return {} },set(){ v_console_log("  [*] XMLHttpRequestEventTarget -> onerror[set]", [].slice.call(arguments));return {} }},
  onload: {get(){ v_console_log("  [*] XMLHttpRequestEventTarget -> onload[get]", {});return {} },set(){ v_console_log("  [*] XMLHttpRequestEventTarget -> onload[set]", [].slice.call(arguments));return {} }},
  onprogress: {get(){ v_console_log("  [*] XMLHttpRequestEventTarget -> onprogress[get]", {});return {} }},
  [Symbol.toStringTag]: {value:"XMLHttpRequestEventTarget",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PageTransitionEvent.prototype, {
  persisted: {get(){ v_console_log("  [*] PageTransitionEvent -> persisted[get]", false);return false }},
  [Symbol.toStringTag]: {value:"PageTransitionEvent",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceResourceTiming.prototype, {
  responseStart: {get(){ v_console_log("  [*] PerformanceResourceTiming -> responseStart[get]", 140.70000000018626);return 140.70000000018626 }},
  domainLookupEnd: {get(){ v_console_log("  [*] PerformanceResourceTiming -> domainLookupEnd[get]", 8.200000000186265);return 8.200000000186265 }},
  domainLookupStart: {get(){ v_console_log("  [*] PerformanceResourceTiming -> domainLookupStart[get]", 8.200000000186265);return 8.200000000186265 }},
  connectEnd: {get(){ v_console_log("  [*] PerformanceResourceTiming -> connectEnd[get]", 8.200000000186265);return 8.200000000186265 }},
  connectStart: {get(){ v_console_log("  [*] PerformanceResourceTiming -> connectStart[get]", 8.200000000186265);return 8.200000000186265 }},
  requestStart: {get(){ v_console_log("  [*] PerformanceResourceTiming -> requestStart[get]", 11.099999999627471);return 11.099999999627471 }},
  responseEnd: {get(){ v_console_log("  [*] PerformanceResourceTiming -> responseEnd[get]", 187.5);return 187.5 }},
  secureConnectionStart: {get(){ v_console_log("  [*] PerformanceResourceTiming -> secureConnectionStart[get]", 8.200000000186265);return 8.200000000186265 }},
  fetchStart: {get(){ v_console_log("  [*] PerformanceResourceTiming -> fetchStart[get]", 8.200000000186265);return 8.200000000186265 }},
  redirectEnd: {get(){ v_console_log("  [*] PerformanceResourceTiming -> redirectEnd[get]", 0);return 0 }},
  redirectStart: {get(){ v_console_log("  [*] PerformanceResourceTiming -> redirectStart[get]", 0);return 0 }},
  nextHopProtocol: {get(){ v_console_log("  [*] PerformanceResourceTiming -> nextHopProtocol[get]", "h2");return "h2" }},
  [Symbol.toStringTag]: {value:"PerformanceResourceTiming",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(MessagePort.prototype, {
  postMessage: {value: v_saf(function postMessage(){v_console_log("  [*] MessagePort -> postMessage[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"MessagePort",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(UIEvent.prototype, {
  view: {get(){ v_console_log("  [*] UIEvent -> view[get]", {});return {} }},
  detail: {get(){ v_console_log("  [*] UIEvent -> detail[get]", 1);return 1 }},
  [Symbol.toStringTag]: {value:"UIEvent",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(MessageEvent.prototype, {
  source: {get(){ v_console_log("  [*] MessageEvent -> source[get]", {});return {} }},
  data: {get(){ v_console_log("  [*] MessageEvent -> data[get]", {});return {} }},
  [Symbol.toStringTag]: {value:"MessageEvent",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(ScreenOrientation.prototype, {
  angle: {get(){ v_console_log("  [*] ScreenOrientation -> angle[get]", 0);return 0 }},
  [Symbol.toStringTag]: {value:"ScreenOrientation",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Worker.prototype, {
  onmessage: {set(){ v_console_log("  [*] Worker -> onmessage[set]", [].slice.call(arguments)); }},
  postMessage: {value: v_saf(function postMessage(){v_console_log("  [*] Worker -> postMessage[func]", [].slice.call(arguments));})},
  terminate: {value: v_saf(function terminate(){v_console_log("  [*] Worker -> terminate[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"Worker",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(NetworkInformation.prototype, {
  effectiveType: {get(){ v_console_log("  [*] NetworkInformation -> effectiveType[get]", "4g");return "4g" }},
  downlink: {get(){ v_console_log("  [*] NetworkInformation -> downlink[get]", 10);return 10 }},
  rtt: {get(){ v_console_log("  [*] NetworkInformation -> rtt[get]", 150);return 150 }},
  [Symbol.toStringTag]: {value:"NetworkInformation",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Document.prototype, {
  scripts: {get(){ v_console_log("  [*] Document -> scripts[get]", {});return {} }},
  createElement: {value: v_saf(function createElement(){v_console_log("  [*] Document -> createElement[func]", [].slice.call(arguments));return _createElement(arguments[0])})},
  head: {get(){ v_console_log("  [*] Document -> head[get]", {});return {} }},
  readyState: {get(){ v_console_log("  [*] Document -> readyState[get]", "interactive");return "interactive" }},
  body: {get(){ v_console_log("  [*] Document -> body[get]", {});return {} }},
  createTextNode: {value: v_saf(function createTextNode(){v_console_log("  [*] Document -> createTextNode[func]", [].slice.call(arguments));})},
  visibilityState: {get(){ v_console_log("  [*] Document -> visibilityState[get]", "visible");return "visible" }},
  title: {get(){ v_console_log("  [*] Document -> title[get]", "python - 搜索结果 - 知乎");return "python - 搜索结果 - 知乎" }},
  documentElement: {get(){ v_console_log("  [*] Document -> documentElement[get]", document);return document }},
  activeElement: {get(){ v_console_log("  [*] Document -> activeElement[get]", {});return {} }},
  createElementNS: {value: v_saf(function createElementNS(){v_console_log("  [*] Document -> createElementNS[func]", [].slice.call(arguments));})},
  hidden: {get(){ v_console_log("  [*] Document -> hidden[get]", false);return false }},
  referrer: {get(){ v_console_log("  [*] Document -> referrer[get]", "");return "" }},
  currentScript: {get(){ v_console_log("  [*] Document -> currentScript[get]", {});return {} }},
  onreadystatechange: {"enumerable":true,"configurable":true},
  onmouseenter: {"enumerable":true,"configurable":true},
  onmouseleave: {"enumerable":true,"configurable":true},
  [Symbol.toStringTag]: {value:"Document",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Element.prototype, {
  getAttribute: {value: v_saf(function getAttribute(){v_console_log("  [*] Element -> getAttribute[func]", [].slice.call(arguments));})},
  className: {get(){ v_console_log("  [*] Element -> className[get]", "");return "" },set(){ v_console_log("  [*] Element -> className[set]", [].slice.call(arguments));return "" }},
  getBoundingClientRect: {value: v_saf(function getBoundingClientRect(){v_console_log("  [*] Element -> getBoundingClientRect[func]", [].slice.call(arguments));})},
  setAttribute: {value: v_saf(function setAttribute(){v_console_log("  [*] Element -> setAttribute[func]", [].slice.call(arguments));})},
  removeAttribute: {value: v_saf(function removeAttribute(){v_console_log("  [*] Element -> removeAttribute[func]", [].slice.call(arguments));})},
  querySelectorAll: {value: v_saf(function querySelectorAll(){v_console_log("  [*] Element -> querySelectorAll[func]", [].slice.call(arguments));})},
  children: {get(){ v_console_log("  [*] Element -> children[get]", {});return {} }},
  closest: {value: v_saf(function closest(){v_console_log("  [*] Element -> closest[func]", [].slice.call(arguments));})},
  namespaceURI: {get(){ v_console_log("  [*] Element -> namespaceURI[get]", "http://www.w3.org/1999/xhtml");return "http://www.w3.org/1999/xhtml" }},
  tagName: {get(){ v_console_log("  [*] Element -> tagName[get]", this._tagName);return this._tagName }},
  innerHTML: {set(){ v_console_log("  [*] Element -> innerHTML[set]", [].slice.call(arguments));return "HTML" }},
  clientHeight: {get(){ v_console_log("  [*] Element -> clientHeight[get]", 750);return 750 }},
  querySelector: {value: v_saf(function querySelector(){v_console_log("  [*] Element -> querySelector[func]", [].slice.call(arguments));})},
  scrollTop: {get(){ v_console_log("  [*] Element -> scrollTop[get]", 0);return 0 }},
  id: {get(){ v_console_log("  [*] Element -> id[get]", "");return "" }},
  classList: {get(){ v_console_log("  [*] Element -> classList[get]", {});return {} }},
  getElementsByTagName: {value: v_saf(function getElementsByTagName(){v_console_log("  [*] Element -> getElementsByTagName[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"Element",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(XMLHttpRequest.prototype, {
  setRequestHeader: {value: v_saf(function setRequestHeader(){v_console_log("  [*] XMLHttpRequest -> setRequestHeader[func]", [].slice.call(arguments));})},
  withCredentials: {set(){ v_console_log("  [*] XMLHttpRequest -> withCredentials[set]", [].slice.call(arguments)); }},
  open: {value: v_saf(function open(){v_console_log("  [*] XMLHttpRequest -> open[func]", [].slice.call(arguments));})},
  onreadystatechange: {get(){ v_console_log("  [*] XMLHttpRequest -> onreadystatechange[get]", {});return {} },set(){ v_console_log("  [*] XMLHttpRequest -> onreadystatechange[set]", [].slice.call(arguments));return {} }},
  send: {value: v_saf(function send(){v_console_log("  [*] XMLHttpRequest -> send[func]", [].slice.call(arguments));})},
  readyState: {get(){ v_console_log("  [*] XMLHttpRequest -> readyState[get]", 4);return 4 }},
  status: {get(){ v_console_log("  [*] XMLHttpRequest -> status[get]", 200);return 200 }},
  responseText: {get(){ v_console_log("  [*] XMLHttpRequest -> responseText[get]", "{\"dns\":[{\"host\":\"www.zhihu.com\",\"client_ip\":\"113.247.137.111\",\"ips\":[\"27.159.95.53\",\"112.67.251.72\",\"113.105.165.19\",\"124.227.184.69\",\"14.29.104.109\",\"14.215.167.223\",\"106.122.255.158\",\"222.218.187.232\",\"14.29.104.79\"],\"ttl\":50,\"origin_ttl\":60}]}");return "{\"dns\":[{\"host\":\"www.zhihu.com\",\"client_ip\":\"113.247.137.111\",\"ips\":[\"27.159.95.53\",\"112.67.251.72\",\"113.105.165.19\",\"124.227.184.69\",\"14.29.104.109\",\"14.215.167.223\",\"106.122.255.158\",\"222.218.187.232\",\"14.29.104.79\"],\"ttl\":50,\"origin_ttl\":60}]}" }},
  getResponseHeader: {value: v_saf(function getResponseHeader(){v_console_log("  [*] XMLHttpRequest -> getResponseHeader[func]", [].slice.call(arguments));})},
  responseXML: {get(){ v_console_log("  [*] XMLHttpRequest -> responseXML[get]", {});return {} }},
  UNSENT: {"value":0,"writable":false,"enumerable":true,"configurable":false},
  OPENED: {"value":1,"writable":false,"enumerable":true,"configurable":false},
  HEADERS_RECEIVED: {"value":2,"writable":false,"enumerable":true,"configurable":false},
  LOADING: {"value":3,"writable":false,"enumerable":true,"configurable":false},
  DONE: {"value":4,"writable":false,"enumerable":true,"configurable":false},
  [Symbol.toStringTag]: {value:"XMLHttpRequest",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(MouseEvent.prototype, {
  button: {get(){ v_console_log("  [*] MouseEvent -> button[get]", 2);return 2 }},
  screenX: {get(){ v_console_log("  [*] MouseEvent -> screenX[get]", 1168);return 1168 }},
  screenY: {get(){ v_console_log("  [*] MouseEvent -> screenY[get]", 393);return 393 }},
  clientX: {get(){ v_console_log("  [*] MouseEvent -> clientX[get]", 0);return 0 }},
  clientY: {get(){ v_console_log("  [*] MouseEvent -> clientY[get]", 0);return 0 }},
  pageX: {get(){ v_console_log("  [*] MouseEvent -> pageX[get]", 925);return 925 }},
  pageY: {get(){ v_console_log("  [*] MouseEvent -> pageY[get]", 253);return 253 }},
  ctrlKey: {get(){ v_console_log("  [*] MouseEvent -> ctrlKey[get]", false);return false }},
  shiftKey: {get(){ v_console_log("  [*] MouseEvent -> shiftKey[get]", false);return false }},
  altKey: {get(){ v_console_log("  [*] MouseEvent -> altKey[get]", false);return false }},
  metaKey: {get(){ v_console_log("  [*] MouseEvent -> metaKey[get]", false);return false }},
  buttons: {get(){ v_console_log("  [*] MouseEvent -> buttons[get]", 2);return 2 }},
  relatedTarget: {get(){ v_console_log("  [*] MouseEvent -> relatedTarget[get]", {});return {} }},
  fromElement: {get(){ v_console_log("  [*] MouseEvent -> fromElement[get]", {});return {} }},
  movementX: {get(){ v_console_log("  [*] MouseEvent -> movementX[get]", 0);return 0 }},
  movementY: {get(){ v_console_log("  [*] MouseEvent -> movementY[get]", 0);return 0 }},
  [Symbol.toStringTag]: {value:"MouseEvent",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceNavigationTiming.prototype, {
  domInteractive: {get(){ v_console_log("  [*] PerformanceNavigationTiming -> domInteractive[get]", 1815.7000000001863);return 1815.7000000001863 }},
  loadEventStart: {get(){ v_console_log("  [*] PerformanceNavigationTiming -> loadEventStart[get]", 2884.2999999998137);return 2884.2999999998137 }},
  domContentLoadedEventEnd: {get(){ v_console_log("  [*] PerformanceNavigationTiming -> domContentLoadedEventEnd[get]", 2254.5999999996275);return 2254.5999999996275 }},
  type: {get(){ v_console_log("  [*] PerformanceNavigationTiming -> type[get]", "reload");return "reload" }},
  [Symbol.toStringTag]: {value:"PerformanceNavigationTiming",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLElement.prototype, {
  onload: {set(){ v_console_log("  [*] HTMLElement -> onload[set]", [].slice.call(arguments)); }},
  onerror: {set(){ v_console_log("  [*] HTMLElement -> onerror[set]", [].slice.call(arguments)); }},
  contentEditable: {get(){ v_console_log("  [*] HTMLElement -> contentEditable[get]", "inherit");return "inherit" }},
  onclick: {get(){ v_console_log("  [*] HTMLElement -> onclick[get]", {});return {} },set(){ v_console_log("  [*] HTMLElement -> onclick[set]", [].slice.call(arguments));return {} }},
  style: {get(){ v_console_log("  [*] HTMLElement -> style[get]", this._style);return this._style }},
  offsetHeight: {get(){ v_console_log("  [*] HTMLElement -> offsetHeight[get]", 105);return 105 }},
  dataset: {get(){ v_console_log("  [*] HTMLElement -> dataset[get]", {});return {} }},
  click: {value: v_saf(function click(){v_console_log("  [*] HTMLElement -> click[func]", [].slice.call(arguments));})},
  offsetWidth: {get(){ v_console_log("  [*] HTMLElement -> offsetWidth[get]", 190);return 190 }},
  onmouseenter: {"enumerable":true,"configurable":true},
  onmouseleave: {"enumerable":true,"configurable":true},
  [Symbol.toStringTag]: {value:"HTMLElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLScriptElement.prototype, {
  src: {get(){ v_console_log("  [*] HTMLScriptElement -> src[get]", "https://static.zhihu.com/heifetz/main.modals.4cfe91490f83357c4ee5.js");return "https://static.zhihu.com/heifetz/main.modals.4cfe91490f83357c4ee5.js" },set(){ v_console_log("  [*] HTMLScriptElement -> src[set]", [].slice.call(arguments));return "https://static.zhihu.com/heifetz/main.modals.4cfe91490f83357c4ee5.js" }},
  charset: {set(){ v_console_log("  [*] HTMLScriptElement -> charset[set]", [].slice.call(arguments));return "https://static.zhihu.com/heifetz/main.modals.4cfe91490f83357c4ee5.js" }},
  crossOrigin: {set(){ v_console_log("  [*] HTMLScriptElement -> crossOrigin[set]", [].slice.call(arguments));return "https://static.zhihu.com/heifetz/main.modals.4cfe91490f83357c4ee5.js" }},
  [Symbol.toStringTag]: {value:"HTMLScriptElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLLinkElement.prototype, {
  rel: {get(){ v_console_log("  [*] HTMLLinkElement -> rel[get]", "stylesheet");return "stylesheet" },set(){ v_console_log("  [*] HTMLLinkElement -> rel[set]", [].slice.call(arguments));return "stylesheet" }},
  type: {set(){ v_console_log("  [*] HTMLLinkElement -> type[set]", [].slice.call(arguments));return "stylesheet" }},
  href: {get(){ v_console_log("  [*] HTMLLinkElement -> href[get]", "https://static.zhihu.com/heifetz/main.modals.216a26f4.8a9f1e018146f66fa9df.css");return "https://static.zhihu.com/heifetz/main.modals.216a26f4.8a9f1e018146f66fa9df.css" },set(){ v_console_log("  [*] HTMLLinkElement -> href[set]", [].slice.call(arguments));return "https://static.zhihu.com/heifetz/main.modals.216a26f4.8a9f1e018146f66fa9df.css" }},
  crossOrigin: {set(){ v_console_log("  [*] HTMLLinkElement -> crossOrigin[set]", [].slice.call(arguments));return "https://static.zhihu.com/heifetz/main.modals.216a26f4.8a9f1e018146f66fa9df.css" }},
  [Symbol.toStringTag]: {value:"HTMLLinkElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLStyleElement.prototype, {
  sheet: {get(){ v_console_log("  [*] HTMLStyleElement -> sheet[get]", {});return {} }},
  [Symbol.toStringTag]: {value:"HTMLStyleElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLInputElement.prototype, {
  type: {get(){ v_console_log("  [*] HTMLInputElement -> type[get]", "text");return "text" }},
  value: {get(){ v_console_log("  [*] HTMLInputElement -> value[get]", "python");return "python" },set(){ v_console_log("  [*] HTMLInputElement -> value[set]", [].slice.call(arguments));return "python" }},
  defaultValue: {get(){ v_console_log("  [*] HTMLInputElement -> defaultValue[get]", "python");return "python" },set(){ v_console_log("  [*] HTMLInputElement -> defaultValue[set]", [].slice.call(arguments));return "python" }},
  name: {get(){ v_console_log("  [*] HTMLInputElement -> name[get]", "");return "" }},
  defaultChecked: {set(){ v_console_log("  [*] HTMLInputElement -> defaultChecked[set]", [].slice.call(arguments));return "" }},
  [Symbol.toStringTag]: {value:"HTMLInputElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLImageElement.prototype, {
  src: {set(){ v_console_log("  [*] HTMLImageElement -> src[set]", [].slice.call(arguments)); }},
  [Symbol.toStringTag]: {value:"HTMLImageElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Window.prototype, {
  TEMPORARY: {"value":0,"writable":false,"enumerable":true,"configurable":false},
  PERSISTENT: {"value":1,"writable":false,"enumerable":true,"configurable":false},
  [Symbol.toStringTag]: {value:"Window",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLDocument.prototype, {
  [Symbol.toStringTag]: {value:"HTMLDocument",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PluginArray.prototype, {
  [Symbol.toStringTag]: {value:"PluginArray",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Plugin.prototype, {
  [Symbol.toStringTag]: {value:"Plugin",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(MimeTypeArray.prototype, {
  [Symbol.toStringTag]: {value:"MimeTypeArray",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(MimeType.prototype, {
  [Symbol.toStringTag]: {value:"MimeType",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(CSSStyleDeclaration.prototype, {
  [Symbol.toStringTag]: {value:"CSSStyleDeclaration",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Location.prototype, {
  [Symbol.toStringTag]: {value:"Location",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLCanvasElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLCanvasElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(WebGLRenderingContext.prototype, {
  DEPTH_BUFFER_BIT: {"value":256,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_BUFFER_BIT: {"value":1024,"writable":false,"enumerable":true,"configurable":false},
  COLOR_BUFFER_BIT: {"value":16384,"writable":false,"enumerable":true,"configurable":false},
  POINTS: {"value":0,"writable":false,"enumerable":true,"configurable":false},
  LINES: {"value":1,"writable":false,"enumerable":true,"configurable":false},
  LINE_LOOP: {"value":2,"writable":false,"enumerable":true,"configurable":false},
  LINE_STRIP: {"value":3,"writable":false,"enumerable":true,"configurable":false},
  TRIANGLES: {"value":4,"writable":false,"enumerable":true,"configurable":false},
  TRIANGLE_STRIP: {"value":5,"writable":false,"enumerable":true,"configurable":false},
  TRIANGLE_FAN: {"value":6,"writable":false,"enumerable":true,"configurable":false},
  ZERO: {"value":0,"writable":false,"enumerable":true,"configurable":false},
  ONE: {"value":1,"writable":false,"enumerable":true,"configurable":false},
  SRC_COLOR: {"value":768,"writable":false,"enumerable":true,"configurable":false},
  ONE_MINUS_SRC_COLOR: {"value":769,"writable":false,"enumerable":true,"configurable":false},
  SRC_ALPHA: {"value":770,"writable":false,"enumerable":true,"configurable":false},
  ONE_MINUS_SRC_ALPHA: {"value":771,"writable":false,"enumerable":true,"configurable":false},
  DST_ALPHA: {"value":772,"writable":false,"enumerable":true,"configurable":false},
  ONE_MINUS_DST_ALPHA: {"value":773,"writable":false,"enumerable":true,"configurable":false},
  DST_COLOR: {"value":774,"writable":false,"enumerable":true,"configurable":false},
  ONE_MINUS_DST_COLOR: {"value":775,"writable":false,"enumerable":true,"configurable":false},
  SRC_ALPHA_SATURATE: {"value":776,"writable":false,"enumerable":true,"configurable":false},
  FUNC_ADD: {"value":32774,"writable":false,"enumerable":true,"configurable":false},
  BLEND_EQUATION: {"value":32777,"writable":false,"enumerable":true,"configurable":false},
  BLEND_EQUATION_RGB: {"value":32777,"writable":false,"enumerable":true,"configurable":false},
  BLEND_EQUATION_ALPHA: {"value":34877,"writable":false,"enumerable":true,"configurable":false},
  FUNC_SUBTRACT: {"value":32778,"writable":false,"enumerable":true,"configurable":false},
  FUNC_REVERSE_SUBTRACT: {"value":32779,"writable":false,"enumerable":true,"configurable":false},
  BLEND_DST_RGB: {"value":32968,"writable":false,"enumerable":true,"configurable":false},
  BLEND_SRC_RGB: {"value":32969,"writable":false,"enumerable":true,"configurable":false},
  BLEND_DST_ALPHA: {"value":32970,"writable":false,"enumerable":true,"configurable":false},
  BLEND_SRC_ALPHA: {"value":32971,"writable":false,"enumerable":true,"configurable":false},
  CONSTANT_COLOR: {"value":32769,"writable":false,"enumerable":true,"configurable":false},
  ONE_MINUS_CONSTANT_COLOR: {"value":32770,"writable":false,"enumerable":true,"configurable":false},
  CONSTANT_ALPHA: {"value":32771,"writable":false,"enumerable":true,"configurable":false},
  ONE_MINUS_CONSTANT_ALPHA: {"value":32772,"writable":false,"enumerable":true,"configurable":false},
  BLEND_COLOR: {"value":32773,"writable":false,"enumerable":true,"configurable":false},
  ARRAY_BUFFER: {"value":34962,"writable":false,"enumerable":true,"configurable":false},
  ELEMENT_ARRAY_BUFFER: {"value":34963,"writable":false,"enumerable":true,"configurable":false},
  ARRAY_BUFFER_BINDING: {"value":34964,"writable":false,"enumerable":true,"configurable":false},
  ELEMENT_ARRAY_BUFFER_BINDING: {"value":34965,"writable":false,"enumerable":true,"configurable":false},
  STREAM_DRAW: {"value":35040,"writable":false,"enumerable":true,"configurable":false},
  STATIC_DRAW: {"value":35044,"writable":false,"enumerable":true,"configurable":false},
  DYNAMIC_DRAW: {"value":35048,"writable":false,"enumerable":true,"configurable":false},
  BUFFER_SIZE: {"value":34660,"writable":false,"enumerable":true,"configurable":false},
  BUFFER_USAGE: {"value":34661,"writable":false,"enumerable":true,"configurable":false},
  CURRENT_VERTEX_ATTRIB: {"value":34342,"writable":false,"enumerable":true,"configurable":false},
  FRONT: {"value":1028,"writable":false,"enumerable":true,"configurable":false},
  BACK: {"value":1029,"writable":false,"enumerable":true,"configurable":false},
  FRONT_AND_BACK: {"value":1032,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_2D: {"value":3553,"writable":false,"enumerable":true,"configurable":false},
  CULL_FACE: {"value":2884,"writable":false,"enumerable":true,"configurable":false},
  BLEND: {"value":3042,"writable":false,"enumerable":true,"configurable":false},
  DITHER: {"value":3024,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_TEST: {"value":2960,"writable":false,"enumerable":true,"configurable":false},
  DEPTH_TEST: {"value":2929,"writable":false,"enumerable":true,"configurable":false},
  SCISSOR_TEST: {"value":3089,"writable":false,"enumerable":true,"configurable":false},
  POLYGON_OFFSET_FILL: {"value":32823,"writable":false,"enumerable":true,"configurable":false},
  SAMPLE_ALPHA_TO_COVERAGE: {"value":32926,"writable":false,"enumerable":true,"configurable":false},
  SAMPLE_COVERAGE: {"value":32928,"writable":false,"enumerable":true,"configurable":false},
  NO_ERROR: {"value":0,"writable":false,"enumerable":true,"configurable":false},
  INVALID_ENUM: {"value":1280,"writable":false,"enumerable":true,"configurable":false},
  INVALID_VALUE: {"value":1281,"writable":false,"enumerable":true,"configurable":false},
  INVALID_OPERATION: {"value":1282,"writable":false,"enumerable":true,"configurable":false},
  OUT_OF_MEMORY: {"value":1285,"writable":false,"enumerable":true,"configurable":false},
  CW: {"value":2304,"writable":false,"enumerable":true,"configurable":false},
  CCW: {"value":2305,"writable":false,"enumerable":true,"configurable":false},
  LINE_WIDTH: {"value":2849,"writable":false,"enumerable":true,"configurable":false},
  ALIASED_POINT_SIZE_RANGE: {"value":33901,"writable":false,"enumerable":true,"configurable":false},
  ALIASED_LINE_WIDTH_RANGE: {"value":33902,"writable":false,"enumerable":true,"configurable":false},
  CULL_FACE_MODE: {"value":2885,"writable":false,"enumerable":true,"configurable":false},
  FRONT_FACE: {"value":2886,"writable":false,"enumerable":true,"configurable":false},
  DEPTH_RANGE: {"value":2928,"writable":false,"enumerable":true,"configurable":false},
  DEPTH_WRITEMASK: {"value":2930,"writable":false,"enumerable":true,"configurable":false},
  DEPTH_CLEAR_VALUE: {"value":2931,"writable":false,"enumerable":true,"configurable":false},
  DEPTH_FUNC: {"value":2932,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_CLEAR_VALUE: {"value":2961,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_FUNC: {"value":2962,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_FAIL: {"value":2964,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_PASS_DEPTH_FAIL: {"value":2965,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_PASS_DEPTH_PASS: {"value":2966,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_REF: {"value":2967,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_VALUE_MASK: {"value":2963,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_WRITEMASK: {"value":2968,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_BACK_FUNC: {"value":34816,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_BACK_FAIL: {"value":34817,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_BACK_PASS_DEPTH_FAIL: {"value":34818,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_BACK_PASS_DEPTH_PASS: {"value":34819,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_BACK_REF: {"value":36003,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_BACK_VALUE_MASK: {"value":36004,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_BACK_WRITEMASK: {"value":36005,"writable":false,"enumerable":true,"configurable":false},
  VIEWPORT: {"value":2978,"writable":false,"enumerable":true,"configurable":false},
  SCISSOR_BOX: {"value":3088,"writable":false,"enumerable":true,"configurable":false},
  COLOR_CLEAR_VALUE: {"value":3106,"writable":false,"enumerable":true,"configurable":false},
  COLOR_WRITEMASK: {"value":3107,"writable":false,"enumerable":true,"configurable":false},
  UNPACK_ALIGNMENT: {"value":3317,"writable":false,"enumerable":true,"configurable":false},
  PACK_ALIGNMENT: {"value":3333,"writable":false,"enumerable":true,"configurable":false},
  MAX_TEXTURE_SIZE: {"value":3379,"writable":false,"enumerable":true,"configurable":false},
  MAX_VIEWPORT_DIMS: {"value":3386,"writable":false,"enumerable":true,"configurable":false},
  SUBPIXEL_BITS: {"value":3408,"writable":false,"enumerable":true,"configurable":false},
  RED_BITS: {"value":3410,"writable":false,"enumerable":true,"configurable":false},
  GREEN_BITS: {"value":3411,"writable":false,"enumerable":true,"configurable":false},
  BLUE_BITS: {"value":3412,"writable":false,"enumerable":true,"configurable":false},
  ALPHA_BITS: {"value":3413,"writable":false,"enumerable":true,"configurable":false},
  DEPTH_BITS: {"value":3414,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_BITS: {"value":3415,"writable":false,"enumerable":true,"configurable":false},
  POLYGON_OFFSET_UNITS: {"value":10752,"writable":false,"enumerable":true,"configurable":false},
  POLYGON_OFFSET_FACTOR: {"value":32824,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_BINDING_2D: {"value":32873,"writable":false,"enumerable":true,"configurable":false},
  SAMPLE_BUFFERS: {"value":32936,"writable":false,"enumerable":true,"configurable":false},
  SAMPLES: {"value":32937,"writable":false,"enumerable":true,"configurable":false},
  SAMPLE_COVERAGE_VALUE: {"value":32938,"writable":false,"enumerable":true,"configurable":false},
  SAMPLE_COVERAGE_INVERT: {"value":32939,"writable":false,"enumerable":true,"configurable":false},
  COMPRESSED_TEXTURE_FORMATS: {"value":34467,"writable":false,"enumerable":true,"configurable":false},
  DONT_CARE: {"value":4352,"writable":false,"enumerable":true,"configurable":false},
  FASTEST: {"value":4353,"writable":false,"enumerable":true,"configurable":false},
  NICEST: {"value":4354,"writable":false,"enumerable":true,"configurable":false},
  GENERATE_MIPMAP_HINT: {"value":33170,"writable":false,"enumerable":true,"configurable":false},
  BYTE: {"value":5120,"writable":false,"enumerable":true,"configurable":false},
  UNSIGNED_BYTE: {"value":5121,"writable":false,"enumerable":true,"configurable":false},
  SHORT: {"value":5122,"writable":false,"enumerable":true,"configurable":false},
  UNSIGNED_SHORT: {"value":5123,"writable":false,"enumerable":true,"configurable":false},
  INT: {"value":5124,"writable":false,"enumerable":true,"configurable":false},
  UNSIGNED_INT: {"value":5125,"writable":false,"enumerable":true,"configurable":false},
  FLOAT: {"value":5126,"writable":false,"enumerable":true,"configurable":false},
  DEPTH_COMPONENT: {"value":6402,"writable":false,"enumerable":true,"configurable":false},
  ALPHA: {"value":6406,"writable":false,"enumerable":true,"configurable":false},
  RGB: {"value":6407,"writable":false,"enumerable":true,"configurable":false},
  RGBA: {"value":6408,"writable":false,"enumerable":true,"configurable":false},
  LUMINANCE: {"value":6409,"writable":false,"enumerable":true,"configurable":false},
  LUMINANCE_ALPHA: {"value":6410,"writable":false,"enumerable":true,"configurable":false},
  UNSIGNED_SHORT_4_4_4_4: {"value":32819,"writable":false,"enumerable":true,"configurable":false},
  UNSIGNED_SHORT_5_5_5_1: {"value":32820,"writable":false,"enumerable":true,"configurable":false},
  UNSIGNED_SHORT_5_6_5: {"value":33635,"writable":false,"enumerable":true,"configurable":false},
  FRAGMENT_SHADER: {"value":35632,"writable":false,"enumerable":true,"configurable":false},
  VERTEX_SHADER: {"value":35633,"writable":false,"enumerable":true,"configurable":false},
  MAX_VERTEX_ATTRIBS: {"value":34921,"writable":false,"enumerable":true,"configurable":false},
  MAX_VERTEX_UNIFORM_VECTORS: {"value":36347,"writable":false,"enumerable":true,"configurable":false},
  MAX_VARYING_VECTORS: {"value":36348,"writable":false,"enumerable":true,"configurable":false},
  MAX_COMBINED_TEXTURE_IMAGE_UNITS: {"value":35661,"writable":false,"enumerable":true,"configurable":false},
  MAX_VERTEX_TEXTURE_IMAGE_UNITS: {"value":35660,"writable":false,"enumerable":true,"configurable":false},
  MAX_TEXTURE_IMAGE_UNITS: {"value":34930,"writable":false,"enumerable":true,"configurable":false},
  MAX_FRAGMENT_UNIFORM_VECTORS: {"value":36349,"writable":false,"enumerable":true,"configurable":false},
  SHADER_TYPE: {"value":35663,"writable":false,"enumerable":true,"configurable":false},
  DELETE_STATUS: {"value":35712,"writable":false,"enumerable":true,"configurable":false},
  LINK_STATUS: {"value":35714,"writable":false,"enumerable":true,"configurable":false},
  VALIDATE_STATUS: {"value":35715,"writable":false,"enumerable":true,"configurable":false},
  ATTACHED_SHADERS: {"value":35717,"writable":false,"enumerable":true,"configurable":false},
  ACTIVE_UNIFORMS: {"value":35718,"writable":false,"enumerable":true,"configurable":false},
  ACTIVE_ATTRIBUTES: {"value":35721,"writable":false,"enumerable":true,"configurable":false},
  SHADING_LANGUAGE_VERSION: {"value":35724,"writable":false,"enumerable":true,"configurable":false},
  CURRENT_PROGRAM: {"value":35725,"writable":false,"enumerable":true,"configurable":false},
  NEVER: {"value":512,"writable":false,"enumerable":true,"configurable":false},
  LESS: {"value":513,"writable":false,"enumerable":true,"configurable":false},
  EQUAL: {"value":514,"writable":false,"enumerable":true,"configurable":false},
  LEQUAL: {"value":515,"writable":false,"enumerable":true,"configurable":false},
  GREATER: {"value":516,"writable":false,"enumerable":true,"configurable":false},
  NOTEQUAL: {"value":517,"writable":false,"enumerable":true,"configurable":false},
  GEQUAL: {"value":518,"writable":false,"enumerable":true,"configurable":false},
  ALWAYS: {"value":519,"writable":false,"enumerable":true,"configurable":false},
  KEEP: {"value":7680,"writable":false,"enumerable":true,"configurable":false},
  REPLACE: {"value":7681,"writable":false,"enumerable":true,"configurable":false},
  INCR: {"value":7682,"writable":false,"enumerable":true,"configurable":false},
  DECR: {"value":7683,"writable":false,"enumerable":true,"configurable":false},
  INVERT: {"value":5386,"writable":false,"enumerable":true,"configurable":false},
  INCR_WRAP: {"value":34055,"writable":false,"enumerable":true,"configurable":false},
  DECR_WRAP: {"value":34056,"writable":false,"enumerable":true,"configurable":false},
  VENDOR: {"value":7936,"writable":false,"enumerable":true,"configurable":false},
  RENDERER: {"value":7937,"writable":false,"enumerable":true,"configurable":false},
  VERSION: {"value":7938,"writable":false,"enumerable":true,"configurable":false},
  NEAREST: {"value":9728,"writable":false,"enumerable":true,"configurable":false},
  LINEAR: {"value":9729,"writable":false,"enumerable":true,"configurable":false},
  NEAREST_MIPMAP_NEAREST: {"value":9984,"writable":false,"enumerable":true,"configurable":false},
  LINEAR_MIPMAP_NEAREST: {"value":9985,"writable":false,"enumerable":true,"configurable":false},
  NEAREST_MIPMAP_LINEAR: {"value":9986,"writable":false,"enumerable":true,"configurable":false},
  LINEAR_MIPMAP_LINEAR: {"value":9987,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_MAG_FILTER: {"value":10240,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_MIN_FILTER: {"value":10241,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_WRAP_S: {"value":10242,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_WRAP_T: {"value":10243,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE: {"value":5890,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_CUBE_MAP: {"value":34067,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_BINDING_CUBE_MAP: {"value":34068,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_CUBE_MAP_POSITIVE_X: {"value":34069,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_CUBE_MAP_NEGATIVE_X: {"value":34070,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_CUBE_MAP_POSITIVE_Y: {"value":34071,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_CUBE_MAP_NEGATIVE_Y: {"value":34072,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_CUBE_MAP_POSITIVE_Z: {"value":34073,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_CUBE_MAP_NEGATIVE_Z: {"value":34074,"writable":false,"enumerable":true,"configurable":false},
  MAX_CUBE_MAP_TEXTURE_SIZE: {"value":34076,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE0: {"value":33984,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE1: {"value":33985,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE2: {"value":33986,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE3: {"value":33987,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE4: {"value":33988,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE5: {"value":33989,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE6: {"value":33990,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE7: {"value":33991,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE8: {"value":33992,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE9: {"value":33993,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE10: {"value":33994,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE11: {"value":33995,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE12: {"value":33996,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE13: {"value":33997,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE14: {"value":33998,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE15: {"value":33999,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE16: {"value":34000,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE17: {"value":34001,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE18: {"value":34002,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE19: {"value":34003,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE20: {"value":34004,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE21: {"value":34005,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE22: {"value":34006,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE23: {"value":34007,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE24: {"value":34008,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE25: {"value":34009,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE26: {"value":34010,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE27: {"value":34011,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE28: {"value":34012,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE29: {"value":34013,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE30: {"value":34014,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE31: {"value":34015,"writable":false,"enumerable":true,"configurable":false},
  ACTIVE_TEXTURE: {"value":34016,"writable":false,"enumerable":true,"configurable":false},
  REPEAT: {"value":10497,"writable":false,"enumerable":true,"configurable":false},
  CLAMP_TO_EDGE: {"value":33071,"writable":false,"enumerable":true,"configurable":false},
  MIRRORED_REPEAT: {"value":33648,"writable":false,"enumerable":true,"configurable":false},
  FLOAT_VEC2: {"value":35664,"writable":false,"enumerable":true,"configurable":false},
  FLOAT_VEC3: {"value":35665,"writable":false,"enumerable":true,"configurable":false},
  FLOAT_VEC4: {"value":35666,"writable":false,"enumerable":true,"configurable":false},
  INT_VEC2: {"value":35667,"writable":false,"enumerable":true,"configurable":false},
  INT_VEC3: {"value":35668,"writable":false,"enumerable":true,"configurable":false},
  INT_VEC4: {"value":35669,"writable":false,"enumerable":true,"configurable":false},
  BOOL: {"value":35670,"writable":false,"enumerable":true,"configurable":false},
  BOOL_VEC2: {"value":35671,"writable":false,"enumerable":true,"configurable":false},
  BOOL_VEC3: {"value":35672,"writable":false,"enumerable":true,"configurable":false},
  BOOL_VEC4: {"value":35673,"writable":false,"enumerable":true,"configurable":false},
  FLOAT_MAT2: {"value":35674,"writable":false,"enumerable":true,"configurable":false},
  FLOAT_MAT3: {"value":35675,"writable":false,"enumerable":true,"configurable":false},
  FLOAT_MAT4: {"value":35676,"writable":false,"enumerable":true,"configurable":false},
  SAMPLER_2D: {"value":35678,"writable":false,"enumerable":true,"configurable":false},
  SAMPLER_CUBE: {"value":35680,"writable":false,"enumerable":true,"configurable":false},
  VERTEX_ATTRIB_ARRAY_ENABLED: {"value":34338,"writable":false,"enumerable":true,"configurable":false},
  VERTEX_ATTRIB_ARRAY_SIZE: {"value":34339,"writable":false,"enumerable":true,"configurable":false},
  VERTEX_ATTRIB_ARRAY_STRIDE: {"value":34340,"writable":false,"enumerable":true,"configurable":false},
  VERTEX_ATTRIB_ARRAY_TYPE: {"value":34341,"writable":false,"enumerable":true,"configurable":false},
  VERTEX_ATTRIB_ARRAY_NORMALIZED: {"value":34922,"writable":false,"enumerable":true,"configurable":false},
  VERTEX_ATTRIB_ARRAY_POINTER: {"value":34373,"writable":false,"enumerable":true,"configurable":false},
  VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: {"value":34975,"writable":false,"enumerable":true,"configurable":false},
  IMPLEMENTATION_COLOR_READ_TYPE: {"value":35738,"writable":false,"enumerable":true,"configurable":false},
  IMPLEMENTATION_COLOR_READ_FORMAT: {"value":35739,"writable":false,"enumerable":true,"configurable":false},
  COMPILE_STATUS: {"value":35713,"writable":false,"enumerable":true,"configurable":false},
  LOW_FLOAT: {"value":36336,"writable":false,"enumerable":true,"configurable":false},
  MEDIUM_FLOAT: {"value":36337,"writable":false,"enumerable":true,"configurable":false},
  HIGH_FLOAT: {"value":36338,"writable":false,"enumerable":true,"configurable":false},
  LOW_INT: {"value":36339,"writable":false,"enumerable":true,"configurable":false},
  MEDIUM_INT: {"value":36340,"writable":false,"enumerable":true,"configurable":false},
  HIGH_INT: {"value":36341,"writable":false,"enumerable":true,"configurable":false},
  FRAMEBUFFER: {"value":36160,"writable":false,"enumerable":true,"configurable":false},
  RENDERBUFFER: {"value":36161,"writable":false,"enumerable":true,"configurable":false},
  RGBA4: {"value":32854,"writable":false,"enumerable":true,"configurable":false},
  RGB5_A1: {"value":32855,"writable":false,"enumerable":true,"configurable":false},
  RGB565: {"value":36194,"writable":false,"enumerable":true,"configurable":false},
  DEPTH_COMPONENT16: {"value":33189,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_INDEX8: {"value":36168,"writable":false,"enumerable":true,"configurable":false},
  DEPTH_STENCIL: {"value":34041,"writable":false,"enumerable":true,"configurable":false},
  RENDERBUFFER_WIDTH: {"value":36162,"writable":false,"enumerable":true,"configurable":false},
  RENDERBUFFER_HEIGHT: {"value":36163,"writable":false,"enumerable":true,"configurable":false},
  RENDERBUFFER_INTERNAL_FORMAT: {"value":36164,"writable":false,"enumerable":true,"configurable":false},
  RENDERBUFFER_RED_SIZE: {"value":36176,"writable":false,"enumerable":true,"configurable":false},
  RENDERBUFFER_GREEN_SIZE: {"value":36177,"writable":false,"enumerable":true,"configurable":false},
  RENDERBUFFER_BLUE_SIZE: {"value":36178,"writable":false,"enumerable":true,"configurable":false},
  RENDERBUFFER_ALPHA_SIZE: {"value":36179,"writable":false,"enumerable":true,"configurable":false},
  RENDERBUFFER_DEPTH_SIZE: {"value":36180,"writable":false,"enumerable":true,"configurable":false},
  RENDERBUFFER_STENCIL_SIZE: {"value":36181,"writable":false,"enumerable":true,"configurable":false},
  FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: {"value":36048,"writable":false,"enumerable":true,"configurable":false},
  FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: {"value":36049,"writable":false,"enumerable":true,"configurable":false},
  FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: {"value":36050,"writable":false,"enumerable":true,"configurable":false},
  FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: {"value":36051,"writable":false,"enumerable":true,"configurable":false},
  COLOR_ATTACHMENT0: {"value":36064,"writable":false,"enumerable":true,"configurable":false},
  DEPTH_ATTACHMENT: {"value":36096,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_ATTACHMENT: {"value":36128,"writable":false,"enumerable":true,"configurable":false},
  DEPTH_STENCIL_ATTACHMENT: {"value":33306,"writable":false,"enumerable":true,"configurable":false},
  NONE: {"value":0,"writable":false,"enumerable":true,"configurable":false},
  FRAMEBUFFER_COMPLETE: {"value":36053,"writable":false,"enumerable":true,"configurable":false},
  FRAMEBUFFER_INCOMPLETE_ATTACHMENT: {"value":36054,"writable":false,"enumerable":true,"configurable":false},
  FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: {"value":36055,"writable":false,"enumerable":true,"configurable":false},
  FRAMEBUFFER_INCOMPLETE_DIMENSIONS: {"value":36057,"writable":false,"enumerable":true,"configurable":false},
  FRAMEBUFFER_UNSUPPORTED: {"value":36061,"writable":false,"enumerable":true,"configurable":false},
  FRAMEBUFFER_BINDING: {"value":36006,"writable":false,"enumerable":true,"configurable":false},
  RENDERBUFFER_BINDING: {"value":36007,"writable":false,"enumerable":true,"configurable":false},
  MAX_RENDERBUFFER_SIZE: {"value":34024,"writable":false,"enumerable":true,"configurable":false},
  INVALID_FRAMEBUFFER_OPERATION: {"value":1286,"writable":false,"enumerable":true,"configurable":false},
  UNPACK_FLIP_Y_WEBGL: {"value":37440,"writable":false,"enumerable":true,"configurable":false},
  UNPACK_PREMULTIPLY_ALPHA_WEBGL: {"value":37441,"writable":false,"enumerable":true,"configurable":false},
  CONTEXT_LOST_WEBGL: {"value":37442,"writable":false,"enumerable":true,"configurable":false},
  UNPACK_COLORSPACE_CONVERSION_WEBGL: {"value":37443,"writable":false,"enumerable":true,"configurable":false},
  BROWSER_DEFAULT_WEBGL: {"value":37444,"writable":false,"enumerable":true,"configurable":false},
  [Symbol.toStringTag]: {value:"WebGLRenderingContext",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(CanvasRenderingContext2D.prototype, {
  [Symbol.toStringTag]: {value:"CanvasRenderingContext2D",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLMediaElement.prototype, {
  NETWORK_EMPTY: {"value":0,"writable":false,"enumerable":true,"configurable":false},
  NETWORK_IDLE: {"value":1,"writable":false,"enumerable":true,"configurable":false},
  NETWORK_LOADING: {"value":2,"writable":false,"enumerable":true,"configurable":false},
  NETWORK_NO_SOURCE: {"value":3,"writable":false,"enumerable":true,"configurable":false},
  HAVE_NOTHING: {"value":0,"writable":false,"enumerable":true,"configurable":false},
  HAVE_METADATA: {"value":1,"writable":false,"enumerable":true,"configurable":false},
  HAVE_CURRENT_DATA: {"value":2,"writable":false,"enumerable":true,"configurable":false},
  HAVE_FUTURE_DATA: {"value":3,"writable":false,"enumerable":true,"configurable":false},
  HAVE_ENOUGH_DATA: {"value":4,"writable":false,"enumerable":true,"configurable":false},
  [Symbol.toStringTag]: {value:"HTMLMediaElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLHtmlElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLHtmlElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLDivElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLDivElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLAnchorElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLAnchorElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLBodyElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLBodyElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLTitleElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLTitleElement",writable:false,enumerable:false,configurable:true},
})




if (typeof __dirname != 'undefined'){ __dirname = undefined }
if (typeof __filename != 'undefined'){ __filename = undefined }
if (typeof require != 'undefined'){ require = undefined }
if (typeof exports != 'undefined'){ exports = undefined }
if (typeof module != 'undefined'){ module = undefined }
if (typeof Buffer != 'undefined'){ Buffer = undefined }
var __globalThis__ = typeof global != 'undefined' ? global : this
var window = new Proxy(v_new(Window), {
  get(a,b){ return a[b] || __globalThis__[b] },
  set(a,b,c){ __globalThis__[b] = a[b] = c },
})
Object.defineProperties(__globalThis__, {[Symbol.toStringTag]:{value:'Window'}})
Object.defineProperties(__globalThis__, Object.getOwnPropertyDescriptors(window))
Object.setPrototypeOf(__globalThis__, Object.getPrototypeOf(window))
window.parent = window
window.top = window
window.frames = window
window.self = window
window.document = v_new(HTMLDocument)
window.location = v_new(Location)
window.history = v_new(History)
window.navigator = v_new(Navigator)
window.screen = v_new(Screen)
window.clientInformation = navigator
window.performance = v_new(Performance)
window.sessionStorage = v_new(Storage)
window.localStorage = v_new(Storage)
function _createElement(name){
  var htmlmap = {"HTMLElement":["abbr","address","article","aside","b","bdi","bdo","cite","code","dd","dfn","dt","em","figcaption","figure","footer","header","hgroup","i","kbd","main","mark","nav","noscript","rp","rt","ruby","s","samp","section","small","strong","sub","summary","sup","u","var","wbr"],"HTMLScriptElement":["script"],"HTMLLinkElement":["link"],"HTMLStyleElement":["style"],"HTMLInputElement":["input"],"HTMLImageElement":["img"],"HTMLCanvasElement":["canvas"],"HTMLMediaElement":[]}
  var ret, htmlmapkeys = Object.keys(htmlmap)
  name = name.toLocaleLowerCase()
  for (var i = 0; i < htmlmapkeys.length; i++) {
    if (htmlmap[htmlmapkeys[i]].indexOf(name) != -1){
      ret = v_new(window[htmlmapkeys[i]])
      break
    }
  }
  if (!ret){ ret = new v_saf(function HTMLUnknownElement(){}) }
  if (typeof CSSStyleDeclaration != 'undefined') { ret._style = v_new(CSSStyleDeclaration) }
  ret._tagName = name.toUpperCase()
  return ret
}
function init_cookie(cookie){
  var cache = (cookie || "").trim();
  if (!cache){
    cache = ''
  }else if (cache.charAt(cache.length-1) != ';'){
    cache += '; '
  }else{
    cache += ' '
  }
  Object.defineProperty(Document.prototype, 'cookie', {
    get: function() {
      var r = cache.slice(0,cache.length-2);
      v_console_log('  [*] document -> cookie[get]', r)
      return r
    },
    set: function(c) {
      v_console_log('  [*] document -> cookie[set]', c)
      var ncookie = c.split(";")[0].split("=");
      if (!ncookie[1]){
        return c
      }
      var key = ncookie[0].trim()
      var val = ncookie[1].trim()
      var newc = key+'='+val
      var flag = false;
      var temp = cache.split("; ").map(function(a) {
        if (a.split("=")[0] === key) {
          flag = true;
          return newc;
        }
        return a;
      })
      cache = temp.join("; ");
      if (!flag) {
        cache += newc + "; ";
      }
      return cache;
    }
  });
}
function v_hook_href(obj, name, initurl){
  var r = Object.defineProperty(obj, 'href', {
    get: function(){
      if (!(this.protocol) && !(this.host)){
        r = ''
      }else{
        r = this.protocol + "//" + this.host + (this.port ? ":" + this.port : "") + this.pathname + this.search + this.hash;
      }
      v_console_log(`  [*] ${name||obj.constructor.name} -> href[get]:`, JSON.stringify(r))
      return r
    },
    set: function(href){
      href = href.trim()
      v_console_log(`  [*] ${name||obj.constructor.name} -> href[set]:`, JSON.stringify(href))
      if (href.startsWith("http://") || href.startsWith("https://")){/*ok*/}
      else if(href.startsWith("//")){ href = (this.protocol?this.protocol:'http:') + href}
      else{ href = this.protocol+"//"+this.host + (this.port?":"+this.port:"") + '/' + ((href[0]=='/')?href.slice(1):href) }
      var a = href.match(/([^:]+:)\/\/([^/:?#]+):?(\d+)?([^?#]*)?(\?[^#]*)?(#.*)?/);
      this.protocol = a[1] ? a[1] : "";
      this.host     = a[2] ? a[2] : "";
      this.port     = a[3] ? a[3] : "";
      this.pathname = a[4] ? a[4] : "";
      this.search   = a[5] ? a[5] : "";
      this.hash     = a[6] ? a[6] : "";
      this.hostname = this.host;
      this.origin   = this.protocol + "//" + this.host + (this.port ? ":" + this.port : "");
    }
  });
  if (initurl && initurl.trim()){ var temp=v_new_toggle; v_new_toggle = true; r.href = initurl; v_new_toggle = temp; }
  return r
}
function v_hook_storage(){
  Storage.prototype.clear      = v_saf(function(){          v_console_log(`  [*] Storage -> clear[func]:`); var self=this;Object.keys(self).forEach(function (key) { delete self[key]; }); }, 'clear')
  Storage.prototype.getItem    = v_saf(function(key){       v_console_log(`  [*] Storage -> getItem[func]:`, key); var r = (this.hasOwnProperty(key)?String(this[key]):null); return r}, 'getItem')
  Storage.prototype.setItem    = v_saf(function(key, val){  v_console_log(`  [*] Storage -> setItem[func]:`, key, val); this[key] = (val === undefined)?null:String(val) }, 'setItem')
  Storage.prototype.key        = v_saf(function(key){       v_console_log(`  [*] Storage -> key[func]:`, key); return Object.keys(this)[key||0];} , 'key')
  Storage.prototype.removeItem = v_saf(function(key){       v_console_log(`  [*] Storage -> removeItem[func]:`, key); delete this[key];}, 'removeItem')
  Object.defineProperty(Storage.prototype, 'length', {get: function(){
    if(this===Storage.prototype){ throw TypeError('Illegal invocation') }return Object.keys(this).length
  }})
  window.sessionStorage = new Proxy(sessionStorage,{ set:function(a,b,c){ v_console_log(`  [*] Storage -> [set]:`, b, c); return a[b]=String(c)}, get:function(a,b){ v_console_log(`  [*] Storage -> [get]:`, b, a[b]); return a[b]},})
  window.localStorage = new Proxy(localStorage,{ set:function(a,b,c){ v_console_log(`  [*] Storage -> [set]:`, b, c); return a[b]=String(c)}, get:function(a,b){ v_console_log(`  [*] Storage -> [get]:`, b, a[b]); return a[b]},})
}
function v_init_document(){
  Document.prototype.getElementById = v_saf(function getElementById(name){ var r = v_getele(name, 'getElementById'); v_console_log('  [*] Document -> getElementById', name, r); return r })
  Document.prototype.querySelector = v_saf(function querySelector(name){ var r = v_getele(name, 'querySelector'); v_console_log('  [*] Document -> querySelector', name, r); return r })
  Document.prototype.getElementsByClassName = v_saf(function getElementsByClassName(name){ var r = v_geteles(name, 'getElementsByClassName'); v_console_log('  [*] Document -> getElementsByClassName', name, r); return r })
  Document.prototype.getElementsByName = v_saf(function getElementsByName(name){ var r = v_geteles(name, 'getElementsByName'); v_console_log('  [*] Document -> getElementsByName', name, r); return r })
  Document.prototype.getElementsByTagName = v_saf(function getElementsByTagName(name){ var r = v_geteles(name, 'getElementsByTagName'); v_console_log('  [*] Document -> getElementsByTagName', name, r); return r })
  Document.prototype.getElementsByTagNameNS = v_saf(function getElementsByTagNameNS(name){ var r = v_geteles(name, 'getElementsByTagNameNS'); v_console_log('  [*] Document -> getElementsByTagNameNS', name, r); return r })
  Document.prototype.querySelectorAll = v_saf(function querySelectorAll(name){ var r = v_geteles(name, 'querySelectorAll'); v_console_log('  [*] Document -> querySelectorAll', name, r); return r })
}
function v_init_canvas(){
  HTMLCanvasElement.prototype.getContext = function(){if (arguments[0]=='2d'){var r = v_new(CanvasRenderingContext2D); return r}; if (arguments[0]=='webgl' || arguments[0]=='experimental-webgl'){var r = v_new(WebGLRenderingContext); r._canvas = this; return r}; return null}
  HTMLCanvasElement.prototype.toDataURL = function(){return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACWCAYAAABkW7XSAAAEYklEQVR4Xu3UAQkAAAwCwdm/9HI83BLIOdw5AgQIRAQWySkmAQIEzmB5AgIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlACBB1YxAJfjJb2jAAAAAElFTkSuQmCC"}
}
function v_init_event_target(){
  EventTarget.prototype.addEventListener = function(){v_console_log('  [*] EventTarget -> addEventListener[func]', this===window?'[Window]':this===document?'[Document]':this, [].slice.call(arguments)); return null}
  EventTarget.prototype.dispatchEvent = function(){v_console_log('  [*] EventTarget -> dispatchEvent[func]', this===window?'[Window]':this===document?'[Document]':this, [].slice.call(arguments)); return null}
  EventTarget.prototype.removeEventListener = function(){v_console_log('  [*] EventTarget -> removeEventListener[func]', this===window?'[Window]':this===document?'[Document]':this, [].slice.call(arguments)); return null}
}
function mk_atob_btoa(r){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",t=new Array(-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-1,-1,-1,-1,-1);return{atob:function(r){var a,e,o,h,c,i,n;for(i=r.length,c=0,n="";c<i;){do{a=t[255&r.charCodeAt(c++)]}while(c<i&&-1==a);if(-1==a)break;do{e=t[255&r.charCodeAt(c++)]}while(c<i&&-1==e);if(-1==e)break;n+=String.fromCharCode(a<<2|(48&e)>>4);do{if(61==(o=255&r.charCodeAt(c++)))return n;o=t[o]}while(c<i&&-1==o);if(-1==o)break;n+=String.fromCharCode((15&e)<<4|(60&o)>>2);do{if(61==(h=255&r.charCodeAt(c++)))return n;h=t[h]}while(c<i&&-1==h);if(-1==h)break;n+=String.fromCharCode((3&o)<<6|h)}return n},btoa:function(r){var t,e,o,h,c,i;for(o=r.length,e=0,t="";e<o;){if(h=255&r.charCodeAt(e++),e==o){t+=a.charAt(h>>2),t+=a.charAt((3&h)<<4),t+="==";break}if(c=r.charCodeAt(e++),e==o){t+=a.charAt(h>>2),t+=a.charAt((3&h)<<4|(240&c)>>4),t+=a.charAt((15&c)<<2),t+="=";break}i=r.charCodeAt(e++),t+=a.charAt(h>>2),t+=a.charAt((3&h)<<4|(240&c)>>4),t+=a.charAt((15&c)<<2|(192&i)>>6),t+=a.charAt(63&i)}return t}}}
var atob_btoa = mk_atob_btoa()
window.btoa = window.btoa || v_saf(atob_btoa.btoa, 'btoa')
window.atob = window.atob || v_saf(atob_btoa.atob, 'atob')

init_cookie("_zap=476fd0c5-97f8-4d47-9f55-403d09c5f272; d_c0=\"ACCQX95UxxSPTlCkxLbbbKkC_J2dLMTcPhs=|1649754295\"; _xsrf=fb9c0085-40e6-4859-ac5b-bfb2d22af1a5; Hm_lvt_98beee57fd2ef70ccdd5ca52b9740c49=1649759738,1650246862,1650265721,1650707806; SESSIONID=dEtd9Q4SNlsOx9ox9YPoctegvxUAavTHpiGqCPDOjm9; JOID=VF0RBk-vRYE2qvqjP6y0k6hLrWUpyAH0U5Golm3jKvN408HPRs2I4ler-KM_iWehJ-aJ-DNGvsfX_KXrQSDyFho=; osd=VlwQBEKtRIA0p_iiPq65kalKr2gryQD2XpOpl2_uKPJ50czNR8yK71Wq-aEyi2agJeuL-TJEs8XW_afmQyHzFBc=; Hm_lpvt_98beee57fd2ef70ccdd5ca52b9740c49=1650707855; KLBRSID=dc02df4a8178e8c4dfd0a3c8cbd8c726|1650707858|1650707805")
v_hook_href(window.location, 'location', "https://www.zhihu.com/search?type=content&q=python")
v_hook_storage()
v_init_document()
v_init_canvas()
v_init_event_target()
function v_getele(name, func){
  if(name == "html" && func == "querySelector"){ return v_new(HTMLHtmlElement) }
  if(name == "js-initialData" && func == "getElementById"){ return v_new(HTMLScriptElement) }
  if(name == "root" && func == "getElementById"){ return v_new(HTMLDivElement) }
  if(name == ".ContentItem-title a" && func == "querySelector"){ return v_new(HTMLAnchorElement) }
  return null
}
function v_geteles(name, func){
  if(name == "link" && func == "getElementsByTagName"){ return [v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement)] }
  if(name == "body" && func == "getElementsByTagName"){ return [v_new(HTMLBodyElement)] }
  if(name == "html" && func == "getElementsByTagName"){ return [v_new(HTMLHtmlElement)] }
  if(name == "title" && func == "getElementsByTagName"){ return [v_new(HTMLTitleElement)] }
  if(name == "link[data-rh]" && func == "querySelectorAll"){ return [v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement)] }
  if(name == "script" && func == "getElementsByTagName"){ return [v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement)] }
  if(name == "style" && func == "getElementsByTagName"){ return [v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement)] }
  if(name == "adsbox" && func == "getElementsByClassName"){ return [] }
  return null
}
v_new_toggle = undefined;


!function(e) {
    function t(t) {
        for (var r, i, c = t[0], u = t[1], s = t[2], l = 0, f = []; l < c.length; l++)
            i = c[l],
            Object.prototype.hasOwnProperty.call(o, i) && o[i] && f.push(o[i][0]),
            o[i] = 0;
        for (r in u)
            Object.prototype.hasOwnProperty.call(u, r) && (e[r] = u[r]);
        for (d && d(t); f.length; )
            f.shift()();
        return a.push.apply(a, s || []),
        n()
    }
    function n() {
        for (var e, t = 0; t < a.length; t++) {
            for (var n = a[t], r = !0, i = 1; i < n.length; i++) {
                var u = n[i];
                0 !== o[u] && (r = !1)
            }
            r && (a.splice(t--, 1),
            e = c(c.s = n[0]))
        }
        return e
    }
    var r = {}
      , i = {
        38: 0
    }
      , o = {
        38: 0
    }
      , a = [];
    function c(t) {
        if (r[t])
            return r[t].exports;
        var n = r[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, c),
        n.l = !0,
        n.exports
    }
    globalThis.myexports = c
    c.e = function(e) {
        var t = [];
        i[e] ? t.push(i[e]) : 0 !== i[e] && {
            8: 1,
            20: 1,
            23: 1,
            24: 1,
            26: 1,
            27: 1,
            29: 1,
            30: 1,
            32: 1,
            34: 1,
            40: 1,
            42: 1,
            43: 1,
            44: 1,
            45: 1,
            47: 1,
            48: 1,
            49: 1,
            50: 1,
            52: 1,
            56: 1,
            58: 1,
            59: 1,
            61: 1,
            73: 1,
            74: 1,
            75: 1,
            77: 1,
            78: 1,
            79: 1,
            80: 1,
            81: 1,
            85: 1,
            86: 1,
            87: 1,
            88: 1,
            89: 1,
            90: 1,
            91: 1,
            92: 1,
            94: 1,
            95: 1,
            96: 1,
            97: 1,
            98: 1
        }[e] && t.push(i[e] = new Promise((function(t, n) {
            for (var r = "main." + ({
                0: "shared_5cac3ab8a563f9bbb56eca3256b8ed78b8d955b6",
                1: "lib_0ad37f8a",
                2: "shared_ddb69a58413b8324ef696dc6cfa9d1ea4c7519cc",
                3: "lib_79b5cf47",
                4: "shared_1257c3c9568bb2a3f62d5ecd308c048e4bf1bfcd",
                5: "shared_92f99629e986751c8921c57c658e5e3ebe23d234",
                6: "lib_29107295",
                7: "shared_f30f7459f944e851b885959dfde412e92f3a8d2e",
                8: "shared_f30f7459f944e851b885959dfde412e92f3a8d2e_CSS",
                9: "shared_3254bd1931ca333a5c274ba01dd8e55e0d0915f7",
                10: "shared_1104b8f2b63afffb41e814c682e6b97a8e41b800",
                11: "shared_1679dafdec5942113b512c7479f90fe8c8cc0c34",
                12: "shared_6389524d82c312e7d98e40d6619dd28305142472",
                13: "shared_d1ef5af0010fdbecda3e7215eeb794b639ace47a",
                14: "lib_330004dc",
                15: "lib_5c8e84aa",
                16: "shared_02f2a87bf33ecb38af7b19dfbca195a9fc2fb430",
                17: "shared_4be4eabe8cccf0f9dd1e84435900f6b53ad5b687",
                18: "shared_b59f4818030bb32444355928d14a422ae90a2e9b",
                19: "shared_daaa4a126208fc5f5a863f08a363ab54d49aaa6e",
                20: "shared_daaa4a126208fc5f5a863f08a363ab54d49aaa6e_CSS",
                21: "shared_f1b5eab796a5ddd197a0ff016899f44eb2f67a1f",
                22: "shared_fbca60420ffd478b37705e6a59ffc05ef978523e",
                23: "Carousel",
                24: "Chart",
                25: "ECharts",
                26: "ECommerceAd",
                27: "EcommerceAdCard",
                28: "EditorHelpDocMoveableWrapper",
                29: "FeeConsultCard",
                30: "GoodsRecommendGoodsCardList",
                31: "HistoricalScore",
                32: "InlineVideo",
                33: "KnowledgeForm",
                34: "Labels",
                35: "ScoreLineChart",
                36: "VideoAnswerLabel",
                37: "VideoController",
                39: "biz-co-creation",
                40: "campaign-routes",
                41: "collection-Scroller",
                42: "collection-routes",
                43: "collections-routes",
                44: "comment-manage-footer",
                45: "comments-modals",
                46: "contribution-modal",
                47: "creation-manage-action-list",
                48: "creator-routes",
                49: "creator-salt-routes",
                50: "email-register-routes",
                51: "empty-view-svg",
                52: "explore-routes",
                53: "flv.js",
                54: "gaokao-pray-cheer-animation-data",
                55: "gaokao-pray-kanshan-animation-data",
                56: "globalOrgReport",
                57: "griffith-player",
                58: "help-center-routes",
                59: "host-routes",
                60: "image-editor",
                61: "knowledge-plan-routes",
                63: "lib_0bf4e2b2",
                64: "lib_620696dc",
                65: "lib_75fc9c18",
                66: "lib_9974496f",
                67: "lib_a0a3d150",
                68: "lib_a4c92b5b",
                69: "lib_c3f561e3",
                70: "lib_f3cf1418",
                71: "liveplus-routes",
                72: "lottie-web",
                73: "mcn-routes",
                74: "messages-routes",
                75: "modals",
                76: "mqtt",
                77: "navbar-messages",
                78: "navbar-notifications",
                79: "notifications-routes",
                80: "people-routes",
                81: "question-routes",
                82: "react-draggable-tags",
                83: "react-id-swiper",
                84: "report_modals",
                85: "richinput",
                86: "richinputV2",
                87: "roundtable-routes",
                88: "search-routes",
                89: "settings-routes",
                90: "sign-page",
                91: "signflow",
                92: "special-routes",
                93: "theater-player",
                94: "topic-routes",
                95: "topstory-routes",
                96: "user-hover-card",
                97: "vessay-routes",
                98: "wiki-routes",
                99: "zswsdid"
            }[e] || e) + ".216a26f4." + {
                0: "31d6cfe0d16ae931b73c",
                1: "31d6cfe0d16ae931b73c",
                2: "31d6cfe0d16ae931b73c",
                3: "31d6cfe0d16ae931b73c",
                4: "31d6cfe0d16ae931b73c",
                5: "31d6cfe0d16ae931b73c",
                6: "31d6cfe0d16ae931b73c",
                7: "31d6cfe0d16ae931b73c",
                8: "8c561314a3781f221e99",
                9: "31d6cfe0d16ae931b73c",
                10: "31d6cfe0d16ae931b73c",
                11: "31d6cfe0d16ae931b73c",
                12: "31d6cfe0d16ae931b73c",
                13: "31d6cfe0d16ae931b73c",
                14: "31d6cfe0d16ae931b73c",
                15: "31d6cfe0d16ae931b73c",
                16: "31d6cfe0d16ae931b73c",
                17: "31d6cfe0d16ae931b73c",
                18: "31d6cfe0d16ae931b73c",
                19: "31d6cfe0d16ae931b73c",
                20: "89971b0e4e3977395f29",
                21: "31d6cfe0d16ae931b73c",
                22: "31d6cfe0d16ae931b73c",
                23: "6c92d300e158ac1b00bc",
                24: "1225590f22ec86bcb10b",
                25: "31d6cfe0d16ae931b73c",
                26: "752a48f8cba9087b6345",
                27: "6aff1abff3181c4be4b7",
                28: "31d6cfe0d16ae931b73c",
                29: "f8e68f066fec0a9d4928",
                30: "17268c49036e63718bcd",
                31: "31d6cfe0d16ae931b73c",
                32: "7ed1c89d2a44c4e39cfa",
                33: "31d6cfe0d16ae931b73c",
                34: "7d19d2afdc588e36471f",
                35: "31d6cfe0d16ae931b73c",
                36: "31d6cfe0d16ae931b73c",
                37: "31d6cfe0d16ae931b73c",
                39: "31d6cfe0d16ae931b73c",
                40: "5762235590444ee49c6c",
                41: "31d6cfe0d16ae931b73c",
                42: "b30e2f98301de0bbfdd3",
                43: "e9682e569cbc7a3ca25d",
                44: "e1e2513512bf9513c082",
                45: "70081f8c7268cd3eac1e",
                46: "31d6cfe0d16ae931b73c",
                47: "c5727e0d8feff765fe71",
                48: "05c3d1b04952c8e9892a",
                49: "efb3a2be601f99fa646a",
                50: "d5af88bf0877dbbadba6",
                51: "31d6cfe0d16ae931b73c",
                52: "206a39de43ed49d917cb",
                53: "31d6cfe0d16ae931b73c",
                54: "31d6cfe0d16ae931b73c",
                55: "31d6cfe0d16ae931b73c",
                56: "c9fabf19426d427409fd",
                57: "31d6cfe0d16ae931b73c",
                58: "22e7e30567ffe264f89b",
                59: "e0162ac20dadb7fc7597",
                60: "31d6cfe0d16ae931b73c",
                61: "2cb2a6983cc21c71d5ce",
                63: "31d6cfe0d16ae931b73c",
                64: "31d6cfe0d16ae931b73c",
                65: "31d6cfe0d16ae931b73c",
                66: "31d6cfe0d16ae931b73c",
                67: "31d6cfe0d16ae931b73c",
                68: "31d6cfe0d16ae931b73c",
                69: "31d6cfe0d16ae931b73c",
                70: "31d6cfe0d16ae931b73c",
                71: "31d6cfe0d16ae931b73c",
                72: "31d6cfe0d16ae931b73c",
                73: "389aeb69295f84506732",
                74: "04e82341dee640e3233e",
                75: "8a9f1e018146f66fa9df",
                76: "31d6cfe0d16ae931b73c",
                77: "ca0b42383c605b8b86ac",
                78: "7caacf7297cf060f1139",
                79: "040570dea51c0ae52487",
                80: "3f13b8ae9aed76611cb8",
                81: "a44861b82618d7930fd9",
                82: "31d6cfe0d16ae931b73c",
                83: "31d6cfe0d16ae931b73c",
                84: "31d6cfe0d16ae931b73c",
                85: "d693ca048ef351a9ee55",
                86: "a15ee21d130183861337",
                87: "0db447eadea0aa469879",
                88: "8a1a00106e2458c8ba9a",
                89: "b778001e1676432ba6f1",
                90: "dacaad938950e1d102e1",
                91: "0951c43b3a77921dbd98",
                92: "969f85fee5b260820c26",
                93: "31d6cfe0d16ae931b73c",
                94: "603d51dbc0aa38201faa",
                95: "c89b74abcb712457b52a",
                96: "10ae99b418ed149c88bd",
                97: "7fdd87db3c673dbfa53b",
                98: "f4a6a08e8f996045124e",
                99: "31d6cfe0d16ae931b73c",
                100: "31d6cfe0d16ae931b73c"
            }[e] + ".css", o = c.p + r, a = document.getElementsByTagName("link"), u = 0; u < a.length; u++) {
                var s = (d = a[u]).getAttribute("data-href") || d.getAttribute("href");
                if ("stylesheet" === d.rel && (s === r || s === o))
                    return t()
            }
            var l = document.getElementsByTagName("style");
            for (u = 0; u < l.length; u++) {
                var d;
                if ((s = (d = l[u]).getAttribute("data-href")) === r || s === o)
                    return t()
            }
            var f = document.createElement("link");
            f.rel = "stylesheet",
            f.type = "text/css";
            f.onerror = f.onload = function(r) {
                if (f.onerror = f.onload = null,
                "load" === r.type)
                    t();
                else {
                    var a = r && ("load" === r.type ? "missing" : r.type)
                      , c = r && r.target && r.target.href || o
                      , u = new Error("Loading CSS chunk " + e + " failed.\n(" + c + ")");
                    u.code = "CSS_CHUNK_LOAD_FAILED",
                    u.type = a,
                    u.request = c,
                    delete i[e],
                    f.parentNode.removeChild(f),
                    n(u)
                }
            }
            ,
            f.href = o,
            0 !== f.href.indexOf(window.location.origin + "/") && (f.crossOrigin = "anonymous"),
            document.head.appendChild(f)
        }
        )).then((function() {
            i[e] = 0
        }
        )));
        var n = o[e];
        if (0 !== n)
            if (n)
                t.push(n[2]);
            else {
                var r = new Promise((function(t, r) {
                    n = o[e] = [t, r]
                }
                ));
                t.push(n[2] = r);
                var a, u = document.createElement("script");
                u.charset = "utf-8",
                u.timeout = 120,
                c.nc && u.setAttribute("nonce", c.nc),
                u.src = function(e) {
                    return c.p + "main." + ({
                        0: "shared_5cac3ab8a563f9bbb56eca3256b8ed78b8d955b6",
                        1: "lib_0ad37f8a",
                        2: "shared_ddb69a58413b8324ef696dc6cfa9d1ea4c7519cc",
                        3: "lib_79b5cf47",
                        4: "shared_1257c3c9568bb2a3f62d5ecd308c048e4bf1bfcd",
                        5: "shared_92f99629e986751c8921c57c658e5e3ebe23d234",
                        6: "lib_29107295",
                        7: "shared_f30f7459f944e851b885959dfde412e92f3a8d2e",
                        8: "shared_f30f7459f944e851b885959dfde412e92f3a8d2e_CSS",
                        9: "shared_3254bd1931ca333a5c274ba01dd8e55e0d0915f7",
                        10: "shared_1104b8f2b63afffb41e814c682e6b97a8e41b800",
                        11: "shared_1679dafdec5942113b512c7479f90fe8c8cc0c34",
                        12: "shared_6389524d82c312e7d98e40d6619dd28305142472",
                        13: "shared_d1ef5af0010fdbecda3e7215eeb794b639ace47a",
                        14: "lib_330004dc",
                        15: "lib_5c8e84aa",
                        16: "shared_02f2a87bf33ecb38af7b19dfbca195a9fc2fb430",
                        17: "shared_4be4eabe8cccf0f9dd1e84435900f6b53ad5b687",
                        18: "shared_b59f4818030bb32444355928d14a422ae90a2e9b",
                        19: "shared_daaa4a126208fc5f5a863f08a363ab54d49aaa6e",
                        20: "shared_daaa4a126208fc5f5a863f08a363ab54d49aaa6e_CSS",
                        21: "shared_f1b5eab796a5ddd197a0ff016899f44eb2f67a1f",
                        22: "shared_fbca60420ffd478b37705e6a59ffc05ef978523e",
                        23: "Carousel",
                        24: "Chart",
                        25: "ECharts",
                        26: "ECommerceAd",
                        27: "EcommerceAdCard",
                        28: "EditorHelpDocMoveableWrapper",
                        29: "FeeConsultCard",
                        30: "GoodsRecommendGoodsCardList",
                        31: "HistoricalScore",
                        32: "InlineVideo",
                        33: "KnowledgeForm",
                        34: "Labels",
                        35: "ScoreLineChart",
                        36: "VideoAnswerLabel",
                        37: "VideoController",
                        39: "biz-co-creation",
                        40: "campaign-routes",
                        41: "collection-Scroller",
                        42: "collection-routes",
                        43: "collections-routes",
                        44: "comment-manage-footer",
                        45: "comments-modals",
                        46: "contribution-modal",
                        47: "creation-manage-action-list",
                        48: "creator-routes",
                        49: "creator-salt-routes",
                        50: "email-register-routes",
                        51: "empty-view-svg",
                        52: "explore-routes",
                        53: "flv.js",
                        54: "gaokao-pray-cheer-animation-data",
                        55: "gaokao-pray-kanshan-animation-data",
                        56: "globalOrgReport",
                        57: "griffith-player",
                        58: "help-center-routes",
                        59: "host-routes",
                        60: "image-editor",
                        61: "knowledge-plan-routes",
                        63: "lib_0bf4e2b2",
                        64: "lib_620696dc",
                        65: "lib_75fc9c18",
                        66: "lib_9974496f",
                        67: "lib_a0a3d150",
                        68: "lib_a4c92b5b",
                        69: "lib_c3f561e3",
                        70: "lib_f3cf1418",
                        71: "liveplus-routes",
                        72: "lottie-web",
                        73: "mcn-routes",
                        74: "messages-routes",
                        75: "modals",
                        76: "mqtt",
                        77: "navbar-messages",
                        78: "navbar-notifications",
                        79: "notifications-routes",
                        80: "people-routes",
                        81: "question-routes",
                        82: "react-draggable-tags",
                        83: "react-id-swiper",
                        84: "report_modals",
                        85: "richinput",
                        86: "richinputV2",
                        87: "roundtable-routes",
                        88: "search-routes",
                        89: "settings-routes",
                        90: "sign-page",
                        91: "signflow",
                        92: "special-routes",
                        93: "theater-player",
                        94: "topic-routes",
                        95: "topstory-routes",
                        96: "user-hover-card",
                        97: "vessay-routes",
                        98: "wiki-routes",
                        99: "zswsdid"
                    }[e] || e) + "." + {
                        0: "e9b1eafbbaf4fd8de2e7",
                        1: "07a46cdc6c2faaf3025a",
                        2: "66f038a40b775c0d4018",
                        3: "ee6096f4ca35f9653a7f",
                        4: "e9d17df3cae1b93b4ed8",
                        5: "c39a42b74cf56c45df26",
                        6: "c02605cdbb46cce4cf38",
                        7: "e67e70f7def716d6155f",
                        8: "fd26e1b2d6ea8f34794d",
                        9: "354007c2c7546b6626e2",
                        10: "18ac87a7424a17df500f",
                        11: "9daf8427ec387d5e4d5e",
                        12: "ae5dc0328100f19dfe76",
                        13: "43b4e624e965dc545d10",
                        14: "5bab3a6170afa5b8d989",
                        15: "e9dc29a1c12d06099328",
                        16: "1c942494e674e7166259",
                        17: "bcad340bad187528a3a1",
                        18: "22f9ee326f1f8e10b292",
                        19: "920dfaeddf055bb55c66",
                        20: "4f5f70a0e124d79dfcd9",
                        21: "612577e1206ad8a9f3ec",
                        22: "fd86175ee59bc8def30e",
                        23: "d239ba7a73d6b21addf3",
                        24: "19353e67008139084767",
                        25: "f6fd3a4273d0770d6dec",
                        26: "aaeec5ca07c2497976ff",
                        27: "41ef23f8db17be4facb3",
                        28: "273135880ff07233bc78",
                        29: "920cf51c01cb7b5f9fa4",
                        30: "41c995c0e17ec2a70c57",
                        31: "01b9e02c5b1dd40af1b8",
                        32: "edc15ce732c7c5b92c6a",
                        33: "bc9a20ab9d252219b13c",
                        34: "db68edc3ede7224dc048",
                        35: "eebb1482959c51797565",
                        36: "1780e92246557dbe9676",
                        37: "8af9f4abbd83ea152973",
                        39: "f4f65b36667c207562fc",
                        40: "c499f82d0ed4530f24fa",
                        41: "1beaa8a23c4729661a95",
                        42: "4715b94a1d5337e75c52",
                        43: "87ef20305500527fac2c",
                        44: "4d2fcdd737bca53756f2",
                        45: "d22e0adc11bf41556e2e",
                        46: "7e5e4d57830b2edebebb",
                        47: "59587acfa9351a4da055",
                        48: "a98c4d9c6f30826d2009",
                        49: "79503b276473066f76aa",
                        50: "2b64a66f91e96c2ce682",
                        51: "6c3811d7facb91c70687",
                        52: "cebc0077fd8d82b2bd1f",
                        53: "7a37aa58e4ffd57750f5",
                        54: "82d4d3842113199e9b50",
                        55: "f11d57ac974709c39eea",
                        56: "558bb88cce03a0cf80d5",
                        57: "0538db899dc276557483",
                        58: "44be51af87302806e5d8",
                        59: "410248ee016b3c3722e9",
                        60: "e6f0a6d41a307d7461d7",
                        61: "b750f0cd7622086eeb12",
                        63: "77a7075cc157027a9a23",
                        64: "9d82fa86b686d707d4a1",
                        65: "8da1b31fe2f035ff12e1",
                        66: "6f96d4d837cc919b1d8e",
                        67: "0dbf1afa76b6deddebc7",
                        68: "45914fc0749737407a30",
                        69: "b6a4d73c759d5f97e891",
                        70: "e347608630f65704dbbb",
                        71: "0bd1010a983a6b6235f3",
                        72: "1e0e8b204da4fc5fdcd8",
                        73: "37699f521fc9e4243ec5",
                        74: "44e533b2eab3080055bb",
                        75: "4482891e47f43f10e87d",
                        76: "d56425aaf020d082980b",
                        77: "f08acc4f3e2aa450b891",
                        78: "990d63db4ab24c22013e",
                        79: "0a70ac3a9b81157a26d2",
                        80: "da537def78474341d40e",
                        81: "2713e1cd66d16631565b",
                        82: "c55f81a59f16d5ab2b08",
                        83: "479d825c88d96f23bd48",
                        84: "e1f02557545099950ac0",
                        85: "8df44c460619a972abeb",
                        86: "52db1ba15967e35bc940",
                        87: "8c53a49ae9c3535f4a8f",
                        88: "a61853a1ad5c3bced234",
                        89: "7c04de8f1e955c164bfc",
                        90: "237315d22cc4d7c26b30",
                        91: "37774e6d0f84d1b2f11c",
                        92: "550e3995dffe6ad33406",
                        93: "c714a6f8c9c5a685ddfc",
                        94: "2d57662fd02c89d5daab",
                        95: "dadb22a2c2cebf328ac6",
                        96: "78b828e1e53abbab092e",
                        97: "cdf9bc136a26d94ac5af",
                        98: "b2a77772af3447e5b862",
                        99: "497b5a9f8675a5744074",
                        100: "df9ae62387d3b37443cc"
                    }[e] + ".js"
                }(e),
                0 !== u.src.indexOf(window.location.origin + "/") && (u.crossOrigin = "anonymous");
                var s = new Error;
                a = function(t) {
                    u.onerror = u.onload = null,
                    clearTimeout(l);
                    var n = o[e];
                    if (0 !== n) {
                        if (n) {
                            var r = t && ("load" === t.type ? "missing" : t.type)
                              , i = t && t.target && t.target.src;
                            s.message = "Loading chunk " + e + " failed.\n(" + r + ": " + i + ")",
                            s.name = "ChunkLoadError",
                            s.type = r,
                            s.request = i,
                            n[1](s)
                        }
                        o[e] = void 0
                    }
                }
                ;
                var l = setTimeout((function() {
                    a({
                        type: "timeout",
                        target: u
                    })
                }
                ), 12e4);
                u.onerror = u.onload = a,
                document.head.appendChild(u)
            }
        return Promise.all(t)
    }
    ,
    c.m = e,
    c.c = r,
    c.d = function(e, t, n) {
        c.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }
    ,
    c.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    c.t = function(e, t) {
        if (1 & t && (e = c(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var n = Object.create(null);
        if (c.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var r in e)
                c.d(n, r, function(t) {
                    return e[t]
                }
                .bind(null, r));
        return n
    }
    ,
    c.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return c.d(t, "a", t),
        t
    }
    ,
    c.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    c.p = "https://static.zhihu.com/heifetz/",
    c.oe = function(e) {
        throw console.error(e),
        e
    }
    ;
    var u = window.webpackJsonp = window.webpackJsonp || []
      , s = u.push.bind(u);
    u.push = t,
    u = u.slice();
    for (var l = 0; l < u.length; l++)
        t(u[l]);
    var d = s;
    a.push([867, 62]),
    n()
}(
    {'255':function(module, exports, __webpack_require__) {
    "use strict";
    function t(e) {
        return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.A ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        )(e)
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var A = "2.0"
      , __g = {};
    globalThis.__g = __g
    function s() {}
    function i(e) {
        this.t = (2048 & e) >> 11,
        this.s = (1536 & e) >> 9,
        this.i = 511 & e,
        this.h = 511 & e
    }
    function h(e) {
        this.s = (3072 & e) >> 10,
        this.h = 1023 & e
    }
    function a(e) {
        this.a = (3072 & e) >> 10,
        this.c = (768 & e) >> 8,
        this.n = (192 & e) >> 6,
        this.t = 63 & e
    }
    function c(e) {
        this.s = e >> 10 & 3,
        this.i = 1023 & e
    }
    function n() {}
    function e(e) {
        this.a = (3072 & e) >> 10,
        this.c = (768 & e) >> 8,
        this.n = (192 & e) >> 6,
        this.t = 63 & e
    }
    function o(e) {
        this.h = (4095 & e) >> 2,
        this.t = 3 & e
    }
    function r(e) {
        this.s = e >> 10 & 3,
        this.i = e >> 2 & 255,
        this.t = 3 & e
    }
    s.prototype.e = function(e) {
        e.o = !1
    }
    ,
    i.prototype.e = function(e) {
        switch (this.t) {
        case 0:
            e.r[this.s] = this.i;
            break;
        case 1:
            e.r[this.s] = e.k[this.h]
        }
    }
    ,
    h.prototype.e = function(e) {
        e.k[this.h] = e.r[this.s]
    }
    ,
    a.prototype.e = function(e) {
        switch (this.t) {
        case 0:
            e.r[this.a] = e.r[this.c] + e.r[this.n];
            break;
        case 1:
            e.r[this.a] = e.r[this.c] - e.r[this.n];
            break;
        case 2:
            e.r[this.a] = e.r[this.c] * e.r[this.n];
            break;
        case 3:
            e.r[this.a] = e.r[this.c] / e.r[this.n];
            break;
        case 4:
            e.r[this.a] = e.r[this.c] % e.r[this.n];
            break;
        case 5:
            e.r[this.a] = e.r[this.c] == e.r[this.n];
            break;
        case 6:
            e.r[this.a] = e.r[this.c] >= e.r[this.n];
            break;
        case 7:
            e.r[this.a] = e.r[this.c] || e.r[this.n];
            break;
        case 8:
            e.r[this.a] = e.r[this.c] && e.r[this.n];
            break;
        case 9:
            e.r[this.a] = e.r[this.c] !== e.r[this.n];
            break;
        case 10:
            e.r[this.a] = t(e.r[this.c]);
            break;
        case 11:
            e.r[this.a] = e.r[this.c]in e.r[this.n];
            break;
        case 12:
            e.r[this.a] = e.r[this.c] > e.r[this.n];
            break;
        case 13:
            e.r[this.a] = -e.r[this.c];
            break;
        case 14:
            e.r[this.a] = e.r[this.c] < e.r[this.n];
            break;
        case 15:
            e.r[this.a] = e.r[this.c] & e.r[this.n];
            break;
        case 16:
            e.r[this.a] = e.r[this.c] ^ e.r[this.n];
            break;
        case 17:
            e.r[this.a] = e.r[this.c] << e.r[this.n];
            break;
        case 18:
            e.r[this.a] = e.r[this.c] >>> e.r[this.n];
            break;
        case 19:
            e.r[this.a] = e.r[this.c] | e.r[this.n];
            break;
        case 20:
            e.r[this.a] = !e.r[this.c]
        }
    }
    ,
    c.prototype.e = function(e) {
        e.Q.push(e.C),
        e.B.push(e.k),
        e.C = e.r[this.s],
        e.k = [];
        for (var t = 0; t < this.i; t++)
            e.k.unshift(e.f.pop());
        e.g.push(e.f),
        e.f = []
    }
    ,
    n.prototype.e = function(e) {
        e.C = e.Q.pop(),
        e.k = e.B.pop(),
        e.f = e.g.pop()
    }
    ,
    e.prototype.e = function(e) {
        switch (this.t) {
        case 0:
            e.u = e.r[this.a] >= e.r[this.c];
            break;
        case 1:
            e.u = e.r[this.a] <= e.r[this.c];
            break;
        case 2:
            e.u = e.r[this.a] > e.r[this.c];
            break;
        case 3:
            e.u = e.r[this.a] < e.r[this.c];
            break;
        case 4:
            e.u = e.r[this.a] == e.r[this.c];
            break;
        case 5:
            e.u = e.r[this.a] != e.r[this.c];
            break;
        case 6:
            e.u = e.r[this.a];
            break;
        case 7:
            e.u = !e.r[this.a]
        }
    }
    ,
    o.prototype.e = function(e) {
        switch (this.t) {
        case 0:
            e.C = this.h;
            break;
        case 1:
            e.u && (e.C = this.h);
            break;
        case 2:
            e.u || (e.C = this.h);
            break;
        case 3:
            e.C = this.h,
            e.w = null
        }
        e.u = !1
    }
    ,
    r.prototype.e = function(e) {
        switch (this.t) {
        case 0:
            for (var t = [], n = 0; n < this.i; n++)
                t.unshift(e.f.pop());
            e.r[3] = e.r[this.s](t[0], t[1]);
            break;
        case 1:
            for (var r = e.f.pop(), i = [], o = 0; o < this.i; o++)
                i.unshift(e.f.pop());
            e.r[3] = e.r[this.s][r](i[0], i[1]);
            break;
        case 2:
            for (var a = [], c = 0; c < this.i; c++)
                a.unshift(e.f.pop());
            e.r[3] = new e.r[this.s](a[0],a[1])
        }
    }
    ;
    var k = function(e) {
        for (var t = 66, n = [], r = 0; r < e.length; r++) {
            var i = 24 ^ e.charCodeAt(r) ^ t;
            n.push(String.fromCharCode(i)),
            t = i
        }
        return n.join("")
    };
    function Q(e) {
        this.t = (4095 & e) >> 10,
        this.s = (1023 & e) >> 8,
        this.i = 1023 & e,
        this.h = 63 & e
    }
    function C(e) {
        this.t = (4095 & e) >> 10,
        this.a = (1023 & e) >> 8,
        this.c = (255 & e) >> 6
    }
    function B(e) {
        this.s = (3072 & e) >> 10,
        this.h = 1023 & e
    }
    function f(e) {
        this.h = 4095 & e
    }
    function g(e) {
        this.s = (3072 & e) >> 10
    }
    function u(e) {
        this.h = 4095 & e
    }
    function w(e) {
        this.t = (3840 & e) >> 8,
        this.s = (192 & e) >> 6,
        this.i = 63 & e
    }
    function G() {
        this.r = [0, 0, 0, 0],
        this.C = 0,
        this.Q = [],
        this.k = [],
        this.B = [],
        this.f = [],
        this.g = [],
        this.u = !1,
        this.G = [],
        this.b = [],
        this.o = !1,
        this.w = null,
        this.U = null,
        this.F = [],
        this.R = 0,
        this.J = {
            0: s,
            1: i,
            2: h,
            3: a,
            4: c,
            5: n,
            6: e,
            7: o,
            8: r,
            9: Q,
            10: C,
            11: B,
            12: f,
            13: g,
            14: u,
            15: w
        }
    }
    Q.prototype.e = function(e) {
        switch (this.t) {
        case 0:
            e.f.push(e.r[this.s]);
            break;
        case 1:
            e.f.push(this.i);
            break;
        case 2:
            e.f.push(e.k[this.h]);
            break;
        case 3:
            e.f.push(k(e.b[this.h]))
        }
    }
    ,
    C.prototype.e = function(A) {
        switch (this.t) {
        case 0:
            var t = A.f.pop();
            A.r[this.a] = A.r[this.c][t];
            break;
        case 1:
            var s = A.f.pop()
              , i = A.f.pop();
            A.r[this.c][s] = i;
            break;
        case 2:
            var h = A.f.pop();
            A.r[this.a] = eval(h)
        }
    }
    ,
    B.prototype.e = function(e) {
        e.r[this.s] = k(e.b[this.h])
    }
    ,
    f.prototype.e = function(e) {
        e.w = this.h
    }
    ,
    g.prototype.e = function(e) {
        throw e.r[this.s]
    }
    ,
    u.prototype.e = function(e) {
        var t = this
          , n = [0];
        e.k.forEach((function(e) {
            n.push(e)
        }
        ));
        var r = function(r) {
            var i = new G;
            return i.k = n,
            i.k[0] = r,
            i.v(e.G, t.h, e.b, e.F),
            i.r[3]
        };
        r.toString = function() {
            return "() { [native code] }"
        }
        ,
        e.r[3] = r
    }
    ,
    w.prototype.e = function(e) {
        switch (this.t) {
        case 0:
            for (var t = {}, n = 0; n < this.i; n++) {
                var r = e.f.pop();
                t[e.f.pop()] = r
            }
            e.r[this.s] = t;
            break;
        case 1:
            for (var i = [], o = 0; o < this.i; o++)
                i.unshift(e.f.pop());
            e.r[this.s] = i
        }
    }
    ,
    G.prototype.D = function(e) {
        for (var t = atob(e), n = t.charCodeAt(0) << 8 | t.charCodeAt(1), r = [], i = 2; i < n + 2; i += 2)
            r.push(t.charCodeAt(i) << 8 | t.charCodeAt(i + 1));
        this.G = r;
        for (var o = [], a = n + 2; a < t.length; ) {
            var c = t.charCodeAt(a) << 8 | t.charCodeAt(a + 1)
              , u = t.slice(a + 2, a + 2 + c);
            o.push(u),
            a += c + 2
        }
        this.b = o
    }
    ,
    G.prototype.v = function(e, t, n) {
        for (t = t || 0,
        n = n || [],
        this.C = t,
        "string" == typeof e ? this.D(e) : (this.G = e,
        this.b = n),
        this.o = !0,
        this.R = Date.now(); this.o; ) {
            var r = this.G[this.C++];
            if ("number" != typeof r)
                break;
            var i = Date.now();
            // if (500 < i - this.R)
            //     return;
            this.R = i;
            try {
                this.e(r)
            } catch (e) {
                this.U = e,
                this.w && (this.C = this.w)
            }
        }
    }
    ,
    G.prototype.e = function(e) {
        var t = (61440 & e) >> 12;
        new this.J[t](e).e(this)
    }
    ,
    "undefined" != typeof window && (new G).v("AxjgB5MAnACoAJwBpAAAABAAIAKcAqgAMAq0AzRJZAZwUpwCqACQACACGAKcBKAAIAOcBagAIAQYAjAUGgKcBqFAuAc5hTSHZAZwqrAIGgA0QJEAJAAYAzAUGgOcCaFANRQ0R2QGcOKwChoANECRACQAsAuQABgDnAmgAJwMgAGcDYwFEAAzBmAGcSqwDhoANECRACQAGAKcD6AAGgKcEKFANEcYApwRoAAxB2AGcXKwEhoANECRACQAGAKcE6AAGgKcFKFANEdkBnGqsBUaADRAkQAkABgCnBagAGAGcdKwFxoANECRACQAGAKcGKAAYAZx+rAZGgA0QJEAJAAYA5waoABgBnIisBsaADRAkQAkABgCnBygABoCnB2hQDRHZAZyWrAeGgA0QJEAJAAYBJwfoAAwFGAGcoawIBoANECRACQAGAOQALAJkAAYBJwfgAlsBnK+sCEaADRAkQAkABgDkACwGpAAGAScH4AJbAZy9rAiGgA0QJEAJACwI5AAGAScH6AAkACcJKgAnCWgAJwmoACcJ4AFnA2MBRAAMw5gBnNasCgaADRAkQAkABgBEio0R5EAJAGwKSAFGACcKqAAEgM0RCQGGAYSATRFZAZzshgAtCs0QCQAGAYSAjRFZAZz1hgAtCw0QCQAEAAgB7AtIAgYAJwqoAASATRBJAkYCRIANEZkBnYqEAgaBxQBOYAoBxQEOYQ0giQKGAmQABgAnC6ABRgBGgo0UhD/MQ8zECALEAgaBxQBOYAoBxQEOYQ0gpEAJAoYARoKNFIQ/zEPkAAgChgLGgkUATmBkgAaAJwuhAUaCjdQFAg5kTSTJAsQCBoHFAE5gCgHFAQ5hDSCkQAkChgBGgo0UhD/MQ+QACAKGAsaCRQCOYGSABoAnC6EBRoKN1AUEDmRNJMkCxgFGgsUPzmPkgAaCJwvhAU0wCQFGAUaCxQGOZISPzZPkQAaCJwvhAU0wCQFGAUaCxQMOZISPzZPkQAaCJwvhAU0wCQFGAUaCxQSOZISPzZPkQAaCJwvhAU0wCQFGAkSAzRBJAlz/B4FUAAAAwUYIAAIBSITFQkTERwABi0GHxITAAAJLwMSGRsXHxMZAAk0Fw8HFh4NAwUABhU1EBceDwAENBcUEAAGNBkTGRcBAAFKAAkvHg4PKz4aEwIAAUsACDIVHB0QEQ4YAAsuAzs7AAoPKToKDgAHMx8SGQUvMQABSAALORoVGCQgERcCAxoACAU3ABEXAgMaAAsFGDcAERcCAxoUCgABSQAGOA8LGBsPAAYYLwsYGw8AAU4ABD8QHAUAAU8ABSkbCQ4BAAFMAAktCh8eDgMHCw8AAU0ADT4TGjQsGQMaFA0FHhkAFz4TGjQsGQMaFA0FHhk1NBkCHgUbGBEPAAFCABg9GgkjIAEmOgUHDQ8eFSU5DggJAwEcAwUAAUMAAUAAAUEADQEtFw0FBwtdWxQTGSAACBwrAxUPBR4ZAAkqGgUDAwMVEQ0ACC4DJD8eAx8RAAQ5GhUYAAFGAAAABjYRExELBAACWhgAAVoAQAg/PTw0NxcQPCQ5C3JZEBs9fkcnDRcUAXZia0Q4EhQgXHojMBY3MWVCNT0uDhMXcGQ7AUFPHigkQUwQFkhaAkEACjkTEQspNBMZPC0ABjkTEQsrLQ==");
    var b = function(e) {
        return __g._encrypt(encodeURIComponent(e))
    };
    exports.ENCRYPT_VERSION = A,
    exports.default = b
},
    '163':function(e, t, n) {
    var r;
    !function(i) {
        "use strict";
        function o(e, t) {
            var n = (65535 & e) + (65535 & t);
            return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
        }
        function a(e, t, n, r, i, a) {
            return o((c = o(o(t, e), o(r, a))) << (u = i) | c >>> 32 - u, n);
            var c, u
        }
        function c(e, t, n, r, i, o, c) {
            return a(t & n | ~t & r, e, t, i, o, c)
        }
        function u(e, t, n, r, i, o, c) {
            return a(t & r | n & ~r, e, t, i, o, c)
        }
        function s(e, t, n, r, i, o, c) {
            return a(t ^ n ^ r, e, t, i, o, c)
        }
        function l(e, t, n, r, i, o, c) {
            return a(n ^ (t | ~r), e, t, i, o, c)
        }
        function d(e, t) {
            var n, r, i, a, d;
            e[t >> 5] |= 128 << t % 32,
            e[14 + (t + 64 >>> 9 << 4)] = t;
            var f = 1732584193
              , p = -271733879
              , h = -1732584194
              , b = 271733878;
            for (n = 0; n < e.length; n += 16)
                r = f,
                i = p,
                a = h,
                d = b,
                f = c(f, p, h, b, e[n], 7, -680876936),
                b = c(b, f, p, h, e[n + 1], 12, -389564586),
                h = c(h, b, f, p, e[n + 2], 17, 606105819),
                p = c(p, h, b, f, e[n + 3], 22, -1044525330),
                f = c(f, p, h, b, e[n + 4], 7, -176418897),
                b = c(b, f, p, h, e[n + 5], 12, 1200080426),
                h = c(h, b, f, p, e[n + 6], 17, -1473231341),
                p = c(p, h, b, f, e[n + 7], 22, -45705983),
                f = c(f, p, h, b, e[n + 8], 7, 1770035416),
                b = c(b, f, p, h, e[n + 9], 12, -1958414417),
                h = c(h, b, f, p, e[n + 10], 17, -42063),
                p = c(p, h, b, f, e[n + 11], 22, -1990404162),
                f = c(f, p, h, b, e[n + 12], 7, 1804603682),
                b = c(b, f, p, h, e[n + 13], 12, -40341101),
                h = c(h, b, f, p, e[n + 14], 17, -1502002290),
                f = u(f, p = c(p, h, b, f, e[n + 15], 22, 1236535329), h, b, e[n + 1], 5, -165796510),
                b = u(b, f, p, h, e[n + 6], 9, -1069501632),
                h = u(h, b, f, p, e[n + 11], 14, 643717713),
                p = u(p, h, b, f, e[n], 20, -373897302),
                f = u(f, p, h, b, e[n + 5], 5, -701558691),
                b = u(b, f, p, h, e[n + 10], 9, 38016083),
                h = u(h, b, f, p, e[n + 15], 14, -660478335),
                p = u(p, h, b, f, e[n + 4], 20, -405537848),
                f = u(f, p, h, b, e[n + 9], 5, 568446438),
                b = u(b, f, p, h, e[n + 14], 9, -1019803690),
                h = u(h, b, f, p, e[n + 3], 14, -187363961),
                p = u(p, h, b, f, e[n + 8], 20, 1163531501),
                f = u(f, p, h, b, e[n + 13], 5, -1444681467),
                b = u(b, f, p, h, e[n + 2], 9, -51403784),
                h = u(h, b, f, p, e[n + 7], 14, 1735328473),
                f = s(f, p = u(p, h, b, f, e[n + 12], 20, -1926607734), h, b, e[n + 5], 4, -378558),
                b = s(b, f, p, h, e[n + 8], 11, -2022574463),
                h = s(h, b, f, p, e[n + 11], 16, 1839030562),
                p = s(p, h, b, f, e[n + 14], 23, -35309556),
                f = s(f, p, h, b, e[n + 1], 4, -1530992060),
                b = s(b, f, p, h, e[n + 4], 11, 1272893353),
                h = s(h, b, f, p, e[n + 7], 16, -155497632),
                p = s(p, h, b, f, e[n + 10], 23, -1094730640),
                f = s(f, p, h, b, e[n + 13], 4, 681279174),
                b = s(b, f, p, h, e[n], 11, -358537222),
                h = s(h, b, f, p, e[n + 3], 16, -722521979),
                p = s(p, h, b, f, e[n + 6], 23, 76029189),
                f = s(f, p, h, b, e[n + 9], 4, -640364487),
                b = s(b, f, p, h, e[n + 12], 11, -421815835),
                h = s(h, b, f, p, e[n + 15], 16, 530742520),
                f = l(f, p = s(p, h, b, f, e[n + 2], 23, -995338651), h, b, e[n], 6, -198630844),
                b = l(b, f, p, h, e[n + 7], 10, 1126891415),
                h = l(h, b, f, p, e[n + 14], 15, -1416354905),
                p = l(p, h, b, f, e[n + 5], 21, -57434055),
                f = l(f, p, h, b, e[n + 12], 6, 1700485571),
                b = l(b, f, p, h, e[n + 3], 10, -1894986606),
                h = l(h, b, f, p, e[n + 10], 15, -1051523),
                p = l(p, h, b, f, e[n + 1], 21, -2054922799),
                f = l(f, p, h, b, e[n + 8], 6, 1873313359),
                b = l(b, f, p, h, e[n + 15], 10, -30611744),
                h = l(h, b, f, p, e[n + 6], 15, -1560198380),
                p = l(p, h, b, f, e[n + 13], 21, 1309151649),
                f = l(f, p, h, b, e[n + 4], 6, -145523070),
                b = l(b, f, p, h, e[n + 11], 10, -1120210379),
                h = l(h, b, f, p, e[n + 2], 15, 718787259),
                p = l(p, h, b, f, e[n + 9], 21, -343485551),
                f = o(f, r),
                p = o(p, i),
                h = o(h, a),
                b = o(b, d);
            return [f, p, h, b]
        }
        function f(e) {
            var t, n = "", r = 32 * e.length;
            for (t = 0; t < r; t += 8)
                n += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);
            return n
        }
        function p(e) {
            var t, n = [];
            for (n[(e.length >> 2) - 1] = void 0,
            t = 0; t < n.length; t += 1)
                n[t] = 0;
            var r = 8 * e.length;
            for (t = 0; t < r; t += 8)
                n[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
            return n
        }
        function h(e) {
            var t, n, r = "";
            for (n = 0; n < e.length; n += 1)
                t = e.charCodeAt(n),
                r += "0123456789abcdef".charAt(t >>> 4 & 15) + "0123456789abcdef".charAt(15 & t);
            return r
        }
        function b(e) {
            return unescape(encodeURIComponent(e))
        }
        function v(e) {
            return function(e) {
                return f(d(p(e), 8 * e.length))
            }(b(e))
        }
        function g(e, t) {
            return function(e, t) {
                var n, r, i = p(e), o = [], a = [];
                for (o[15] = a[15] = void 0,
                i.length > 16 && (i = d(i, 8 * e.length)),
                n = 0; n < 16; n += 1)
                    o[n] = 909522486 ^ i[n],
                    a[n] = 1549556828 ^ i[n];
                return r = d(o.concat(p(t)), 512 + 8 * t.length),
                f(d(a.concat(r), 640))
            }(b(e), b(t))
        }
        function m(e, t, n) {
            return t ? n ? g(t, e) : h(g(t, e)) : n ? v(e) : h(v(e))
        }
        void 0 === (r = function() {
            return m
        }
        .call(t, n, t, e)) || (e.exports = r)
    }()
},});
n = globalThis.myexports
var c = n(255)
  , u = n.n(c)
  , d = n(163)
  , f = n.n(d)
var s = "101_3_2.0+/api/v4/search_v3?t=general&q=python&correction=1&offset=0&limit=20&filter_fields=&lc_idx=0&show_all_topics=0&search_source=Normal+\"AGCezAQZGROPTq18CfCqebbXQo1CJEn6S2c=|1620881794\""
var res = u()(f()(s))
console.log(res)
// aTYqk7r8NhtfcTxqyCYyUhuBngFXS728K8O0nveqS82p

// aTYqk7r8NhtfcTxqyCYyUhuBngFXS728K8O0nveqS82p9Tuw
