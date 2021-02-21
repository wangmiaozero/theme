/*
 * @Description: 处方
 * @Version: 2.0
 * @Autor: wangmiao
 * @Date: 2020-12-04 09:27:04
 * @LastEditors: wangmiao
 * @LastEditTime: 2020-12-10 15:51:41
 */
export default {
	namespaced: true,
	state: ()=>({
		saveDrugList:null, //所有选中药品
		prescriptionLength:0,// 处方长度
		editDrugList:null
	}),
	getters: {
		saveDrugList: state => state.saveDrugList,
		prescriptionLength: state => state.prescriptionLength,
		editDrugList: state => state.editDrugList,
	},
	mutations: {
		// 药品
		init_save_drug_list(state,val) {
			state.saveDrugList = val
		},
		chang_save_drug_list(state, val) {
			state.saveDrugList.drugList = [...state.saveDrugList.drugList,val]
		},
		delete_save_drug_list_item(state,val){
			let index = state.saveDrugList.drugList.findIndex(r=>r.uniqueCode === val.uniqueCode)
			if(index!=-1) {
				state.saveDrugList.drugList.splice(index,1)
			}
		},
		update_save_drug_list_item(state,val){
			let index = state.saveDrugList.drugList.findIndex(r=>r.uniqueCode === val.uniqueCode)
			if(index!=-1) {
				state.saveDrugList.drugList[index] = val
			}
		},
		delete_all_save_drug_list_item(state) {
			state.saveDrugList = null
		},
		init_prescription_length(state,val){
			state.prescriptionLength = val
		},
		// 处方
		init_edit_drug_list(state,val) {
			state.editDrugList = val
		},
		chang_edit_drug_list(state, val) {
			state.editDrugList.drugList = [...state.editDrugList.drugList,val]
		},
		update_edit_drug_list_item(state,val) {
			let index = state.editDrugList.drugList.findIndex(r=>r.uniqueCode === val.uniqueCode)
			if(index!=-1) {
				state.editDrugList.drugList[index] = val
			}
		},
		delete_edit_drug_list_item(state,val){
			let index = state.editDrugList.drugList.findIndex(r=>r.uniqueCode === val.uniqueCode)
			if(index!=-1) {
				state.editDrugList.drugList.splice(index,1)
			}
		},
		delete_all_edit_drug_list_item(state) {
			state.editDrugList = null
		},
	},
	actions: {}
};
