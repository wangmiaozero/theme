export default {
  data: () => ({
    currentModule: ""
  }),
  onLoad() {
    let name;
    if (this.$route.query.talkID) {
      name = "createModulesName_" + this.$route.query.talkID;
    }
    this.currentModule = name + '/';
  }
};
