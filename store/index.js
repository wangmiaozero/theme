/*
 * @Description: 
 * @Version: 0.1
 * @Autor: wangmiao
 * @Date: 2020-12-20 00:54:16
 * @LastEditors: wangmiao
 * @LastEditTime: 2021-02-21 20:13:00
 */
import Vue from "vue";
import Vuex from "vuex";
// import createPersistedState from "vuex-persistedstate";
import CreateModules from './modules/createModules.js'
Vue.use(Vuex)
export default new Vuex.Store({
	state: {
		loginInfo: {},
		SearchDrugItem: null, // 获取药品item
	},
	getters: {
		loginInfo: state => state.loginInfo,
		SearchDrugItem: state => state.SearchDrugItem
	},
	mutations: {
		LOGIN_INFO(state, val) {
			state.loginInfo = { ...val }
			
		},
		SetSearchDrugItem(state, val) {
			state.SearchDrugItem = val
		}
	},
	modules: {
		CreateModules
	},
	// plugins: [createPersistedState({
	// 	key: "__doctor_m_store",
	// })]
})
