Window = function Window(){
    dtavm.throwError("TypeError", "Illegal constructor")
}
dtavm.func_set_native(Window)
dtavm.rename(Window.prototype, "Window")

Window.prototype.PERSISTENT = 1
Window.prototype.TEMPORARY = 0

delete global
delete Buffer
delete VMError
delete GLOBAL


window = globalThis
Object.setPrototypeOf(window, Window.prototype)


window.atob = dtavm.base64.base64decode
window.btoa = dtavm.base64.base64encode
window.name = ""
