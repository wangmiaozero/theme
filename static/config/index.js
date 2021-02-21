/*
 * @Description: 
 * @Version: 0.1
 * @Autor: wangmiao
 * @Date: 2021-01-30 16:16:30
 * @LastEditors: wangmiao
 * @LastEditTime: 2021-02-21 21:32:52
 */
(function(that) {
	let path =  uni.getStorageSync("unitpath") 
	if(!path) {
		that['doctortoolapi'] = "/doctortoolapi/" 
	} else {
		that['doctortoolapi'] = "/doctortoolapi/"
	}
	  that["API_URL_AUTH"] = "/auth"
})(this)
