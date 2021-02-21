<script>
	import CreateModules from "@/store/modules/createModules";
	export default {
			onLaunch: function() {
				// 动态创建一个module
				let name;
				if (this.$route.query.talkID) {
					name = "createModulesName_" + this.$route.query.talkID;
				}
				const __doctor_m_store =  uni.getStorageSync('__doctor_m_store')||'';
				if(name!=undefined&&name!='undefined'){
					// 判断是否包含
					if(__doctor_m_store.search(name)!=-1&&__doctor_m_store.search(name)!=0){
						 this.$store.registerModule(name, CreateModules,{preserveState:true});
					}else{
						this.$store.registerModule(name, CreateModules,{preserveState:false});
					}
				}
			},
    }
</script>

<style>
	/*每个页面公共css */
	@import "./common/style/common.css";
	@import url("./static/font/iconfont.css");
</style>
