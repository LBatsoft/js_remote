function getOwnPropertyDescriptors(obj, isSelf){
    let obj_keys = Object.getOwnPropertyNames(obj)
    if(obj_keys.length === 0){
        isSelf.flag = false
        return getOwnPropertyDescriptors(Object.getPrototypeOf(obj))
    }else{
        return Object.getOwnPropertyDescriptors(obj)
    }
}
function enum_obj_descriptors(obj, objName, obj_Descriptors){
    let code = ""
    function getcode(obj, objName, objkey){
        var value = obj[objkey]
        switch (typeof value){
            case "string":
                return `dtavm.defineProperty(${objName}, '${objkey}', '${value}', true, true, true)`
            case "function":
                return `dtavm.defineProperty(${objName}, '${objkey}', function ${objkey}(){debugger;}, true, true, true); dtavm.func_set_native(${objName}.${objkey})`
            case "number":
                return `dtavm.defineProperty(${objName}, '${objkey}', ${value}, true, true, true)`
            case "boolean":
                return `dtavm.defineProperty(${objName}, '${objkey}', ${value}, true, true, true)`
            case "undefined":
                return `dtavm.defineProperty(${objName}, '${objkey}', ${value}, true, true, true)`
            case "object":
                if (value instanceof Array){
                    return `dtavm.defineProperty(${objName}, '${objkey}', [], true, true, true)`
                }else if(value === null){
                    return `dtavm.defineProperty(${objName}, '${objkey}', null, true, true, true)`
                }else{
                    return `dtavm.defineProperty(${objName}, '${objkey}', {}, true, true, true)`
                }
            default:
                debugger;

        }
    }
    for (const objkey in obj_Descriptors) {
        code += getcode(obj, objName, objkey) + "\r\n"
    }
    return code

}

function enum_obj_proto_descriptors(obj, objName, obj_Descriptors){
    let code = ""
    function getcode(obj, objName, objkey){
        var value = obj[objkey]
        switch (typeof value){
            case "string":
                return `dtavm.defineProperty(${objName}.prototype, '${objkey}', '${value}', true, true, true)`
            case "function":
                return `dtavm.defineProperty(${objName}.prototype, '${objkey}', function ${objkey}(){debugger;}, true, true, true); dtavm.func_set_native(${objName}.prototype.${objkey})`
            case "number":
                return `dtavm.defineProperty(${objName}.prototype, '${objkey}', ${value}, true, true, true)`
            case "boolean":
                return `dtavm.defineProperty(${objName}.prototype, '${objkey}', ${value}, true, true, true)`
            case "undefined":
                return `dtavm.defineProperty(${objName}.prototype, '${objkey}', ${value}, true, true, true)`
            case "object":
                if (value instanceof Array){
                    return `dtavm.defineProperty(${objName}.prototype, '${objkey}', [], true, true, true)`
                }else if(value === null){
                    return `dtavm.defineProperty(${objName}.prototype, '${objkey}', null, true, true, true)`
                }else{
                    return `dtavm.defineProperty(${objName}.prototype, '${objkey}', {}, true, true, true)`
                }
            default:
                debugger;

        }
    }
    for (const objkey in obj_Descriptors) {
        code += getcode(obj, objName, objkey) + "\r\n"
    }
    return code
}

function dump_main(obj, objName){
    let code = ""
    var isSelf = {
        "flag": true
    }
    let obj_Descriptors = getOwnPropertyDescriptors(obj, isSelf)
    if(isSelf.flag){
        code += enum_obj_descriptors(obj, objName, obj_Descriptors)
    }else{
        code += enum_obj_proto_descriptors(obj, objName, obj_Descriptors)
    }
    console.log(code)
}

function dump_obj_proto(obj_proto, objName, obj){
    let code = ""
    let obj_Descriptors = getOwnPropertyDescriptors(obj_proto, {})
    code += enum_obj_proto_descriptors(obj, objName, obj_Descriptors)
    console.log(code)
}