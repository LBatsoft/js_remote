let fs = require("fs")

function ReadCode(name){
    return fs.readFileSync(`${__dirname}/${name}`) + "\r\n"
}

function GetCode(){
    let code = ""
    code += ReadCode("vm_config.js")
    fs.readdirSync(`${__dirname}`).forEach((filename)=>{
        if(filename !== "vm_config.js" && filename !== "sandbox.node.js"){
            code += ReadCode(filename)
        }
    })
    return code
}

module.exports = {
    GetCode
}