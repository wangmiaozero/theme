
// 是否是一个 json 字符串
export const isJsonString = (string)=>{
	if(!string) return ""
	if(typeof string == 'object') {
		return false
	}
	let val
	try{
		val = JSON.parse(string) 
		if(typeof val == 'object') {
			return true
		}
	}catch(e){
		return false
		//TODO handle the exception
	}
}

//  解析对象 如果解析失败 将返回一个 {key:string}
export const jsonObjParse = (string,key)=>{
	key = key || 'itemName'
	let val
	try{
		if(isJsonString(string)) {
			val = JSON.parse(string) 
			return val
		} else {
			return {[key]:string}
		}
	}catch(e){
		return {[key]:string}
		//TODO handle the exception
	}
}
//  解析数组 如果解析失败 将返回一个 [string]
export const jsonArrParse = (string,key)=>{
	let val
	try{
		if(isJsonString(string)) {
			val = JSON.parse(string) 
			return val
		} else {
			return [string]
		}
	}catch(e){
		return [string]
		//TODO handle the exception
	}
}
