// 刷新页面数据

export default function (_this) {
    let params = { corrent: 999, skip: 0, type: "测试" };
    _this.$store.dispatch("refreshdata", {
      http: _this.axios.post(
        "http://" + _this.$store.state.defaulthttp + "/read",
        params
      ),
    });
}