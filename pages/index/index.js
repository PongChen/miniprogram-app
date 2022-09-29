// index.js
// 获取应用实例
/*小程序中js依賴微信的運行環境
  基于web的能力无法使用，如window，document，也无法动态加载代码
*/
/*小程序中启动流程
  1.先下载代码，检查版本
  2.加载小程序框架
  3.进入首页
*/
/*小程序中不同页面的数据传递
  1.参数传递：页面跳转时候携带参数
  2.全局数据：将数据保存在全局
*/
const app = getApp()
import {
  getDays,
  dateFormat
} from '../../utils/date'
// 注册页面
Page({ 
// 页面数据
  data: {
    motto: 'what are you doing',
    countDay: 0, 
    dayColor: 'red',
    userInfo: {},
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  // 生命周期函数1/5 --监听页面加载
  // 一个页面只调用一次，可以在参数中获得打开当前页面路径的参数
  onLoad(option) {
    console.log('生命周期: onLoad', option)
    if (wx.getUserProfile) {
      // 自带的函数，setData
      const beginDate = '2022-09-25'
      const today = dateFormat(new Date(), 'yyyy-MM-dd')
      console.log('today:', today)
      const days = getDays(beginDate, today)
      this.setData({
        countDay: days
      })
    }
  },
  // 生命周期函数2/5 --监听页面显示
  // 切换页面时重复调用
  onShow() {
    console.log('生命周期: onShow')
    // wx.showLoading({
    //   title: '加载中...',
    // })
    // wx.hideLoading();
  },
  // 生命周期函数3/5 --页面初次渲染完成
  // 一个页面只会调用一次
  onReady() {
    console.log('生命周期: onReady')
  },
  // 生命周期函数4/5 --监听页面隐藏
  // 切换页面时重复调用
  onHide() {
    console.log('生命周期: onHide')
  },
  // 生命周期函数5/5 --监听页面卸载
  // 退出小程序
  onUnload() {
    console.log('生命周期: onUnload')
  },
  // 页面事件处理 --监听用户下拉
  onPullDownRefresh() {
    console.log('下拉刷新事件: onPullDownRefresh')
  },
  // 页面事件处理 --监听用户上拉
  onReachBottom() {
    console.log('触底事件: onReachBottom')
  },
  // 页面事件处理 --点击页面内转发或右上角菜单转发
  onShareAppMessage() {
    console.log('转发事件: onShareAppMessage')
  }
  
})