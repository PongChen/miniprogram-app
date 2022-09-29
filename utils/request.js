/* request 封装 */
const baseUrl = 'http://47.108.192.152:3000' //app.globalData.baseURL
const request = (options) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseUrl + options.url, //仅为示例，并非真实的接口地址
      data: options.data,
      method: options.method,
      enableCache: true,
      // responseType: responseType,// 响应的数据类型
      timeout: 10000, // 默认值为 60000
      header: {
        "content-type": "application/json", // 默认值
        openid: wx.getStorageSync('wxOpenId')
      },
      success: function success(res) {
        resolve(res.data);
        // if (res.data.code == 255) {
        //    wx.showModal({
        //       content: "需要登录",
        //       success(res) {
        //          if (res.confirm) {
        //             wx.navigateTo({
        //                url: "../../loginInfo/login/login",
        //             });
        //          } else if (res.cancel) {
        //             wx.navigateBack();
        //          }
        //       },
        //    });
        // } else {
        //    callback(res.data);
        // }
      },
      fail: (res) => {
        reject(res)
      },
      complete: (res) => {},
    })
  })
}
export default request