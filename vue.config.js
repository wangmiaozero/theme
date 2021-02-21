/*
 * @Description: 
 * @Version: 0.1
 * @Autor: wangmiao
 * @Date: 2020-12-20 00:54:16
 * @LastEditors: wangmiao
 * @LastEditTime: 2021-02-21 19:12:16
 */

module.exports = {
	css: {
		loaderOptions: {
			less: {
			//	globalVars
			}
		}

	},
	devServer:{
		proxy:{
			'/doctorapi': {
			        target: 'https://mplustest.linkingcloud.cn/doctorapi',
			        ws: true,
			        changeOrigin: true,
			        pathRewrite: {
			          '^/doctorapi': ''
			        }
			},
		}
	}
}
