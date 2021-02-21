/*
 * @Description: 请求配置
 * @Version: 2.0
 * @Autor: wangmiao
 * @Date: 2020-12-04 09:26:32
 * @LastEditors: wangmiao
 * @LastEditTime: 2021-02-21 18:50:53
 */
import API from './routerConfig.js';

const accessToken = (function(that){
	let accessToken = uni.getStorageSync("accessToken") || JSON.stringify({});
	accessToken = JSON.parse(accessToken)
	if (!accessToken) {
		accessToken.token = "";
		uni.setStorageSync("accessToken",JSON.stringify(accessToken));
	}
	return accessToken;
})(this)

export const logout= (type) => {
	let accessToken = uni.getStorageSync("accessToken") || JSON.stringify({});
	if (accessToken) {
		accessToken = JSON.parse(accessToken)
		accessToken.token = "";
		uni.setStorageSync("accessToken",JSON.stringify(accessToken));
	}
	if (process.env.NODE_ENV === "production") {
		if (type) {
			window.location.href = window["API_URL_AUTH"] + "/" + accessToken.customerId;
		} else {
			window.location.href = window["API_URL_AUTH"] + "/connect/logout";
		}
	}
};
const $RequestHttp = {};
API.forEach(({ method, alias, url, type,hideToast })=>{
	$RequestHttp[alias] = (data)=>{
		let header = {
			 "Content-Type": "application/json",
			 "Authorization":`bearer ${accessToken.token}`
		};
		if(type && type === "formdata") {
		    header = {
		    	"Content-Type": "application/x-www-form-urlencoded" ,
		        "Authorization":`bearer ${accessToken.token}` ,
		    };
		}
		let httpDefaultOpts = {
			url,
			method,
			timeout:15000,
			header,
			data,
		};
		return new Promise((resolve, reject) => {
			 uni.request({
			        ...httpDefaultOpts,
					success:(res) => {//data为一个数组，数组第一项为错误信息，第二项为返回数据
						if (res.statusCode && res.statusCode != 200) {//api错误
							  if(res.data.code!=1){
								uni.showToast({
									title: res.data.message,
									icon:'none',
									duration: 2000
								});
							  }
						    return resolve({ok:false,statusCode:res.statusCode,data:res.data});;
						}else{
							if(res.data.code!=1){
								if(hideToast) return
								uni.showToast({
								    title: res.data.message,
									icon:'none',
								    duration: 3000
								});
							};
							return resolve({ok:true,statusCode:res.statusCode,data:res.data});
						}
					 },
					 fail: (error) => {
						console.log("网络请求fail:" + JSON.stringify(error));
						return reject(error);
					},
					 complete: (res) => {
					 	if (res.statusCode === 401 || res.statusCode === 302) {
							let text = process.env.NODE_ENV === "production"
							              ? "登录过期，即将前往登录页面"
							              : "dev:token过期";
							uni.showToast({
								title:text,
								icon:'none',
								duration: 2000
							});
					 		logout('auto');
							
					 	}
						resolve(res);
					}
			     })
			     
			
		 })
	}
			
})
		
export default $RequestHttp