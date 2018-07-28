const HOST = "http://10.255.77.218:3000";
const serviceModule = {
  // 登录
  getList: {
    url: HOST + '/api/getList',
    method: 'get'
  },
}

export default serviceModule;

/**
 * 调用
 *  http(apiSetting.getProjects,{}).then(
 *          res = >{
 *               this.$store.commit("loadProject", res.data.data);
 *           },
 *            error = >{
 *                console.log(error);
 *            })
 */
