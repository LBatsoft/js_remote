let fs = require("fs")

function ReadCode(name){
    return fs.readFileSync(`${__dirname}/${name}`) + "\r\n"
}

function GetCode(){
    let code = ""
    code += ReadCode("Navigator.js")


    code += ReadCode("Window.js")
    code += ReadCode("ProxyObject.js")
    code += "debugger; \r\n"
    return code
}

module.exports = {
    GetCode
}