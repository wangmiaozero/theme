/*
 * @Description: 接口集合
 * @Version: 2.0
 * @Autor: wangmiao
 * @Date: 2020-12-04 09:26:32
 * @LastEditors: wangmiao
 * @LastEditTime: 2021-02-21 21:25:37
 */
let doctortoolapi = []
try{
	if(window['doctortoolapi']){
		doctortoolapi = window['doctortoolapi']
	}
}catch(err){
	doctortoolapi = []
}
export default [
	{
		method: 'post',
		alias: '$SearchDrugList',
		url: doctortoolapi + '',
		description: '',
		
	},{
	  method: "post",
	  alias: "$GetHistoryDrug",
	  url: doctortoolapi + "",
	  description: "",
	  hideToast:true
	}
]