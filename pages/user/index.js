// index.js
// 获取应用实例
const app = getApp()
import { loginByAccount } from '../../apis/login'

Page({
  data: {
    motto: 'Hello',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    console.log('进入个人中心', wx.getUserProfile)
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  onShow() {
    console.log('生命周期: onShow')
    loginByAccount('pong', '123').then(res => {

    }).catch(err => {
      console.log(err)
    })

  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    console.log('申请获取用户信息')
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        // 给全局变量赋值
        getApp().globalData.userInfo = res.userInfo
        // 更新页面数据，双向绑定重要函数
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      },
      fail(res) {
        console.log('fail:', res)
        wx.showToast({
          title: '你敢拒绝我？',
          icon: 'error',
          duration: 2000
        })
      },
      // 不管失败或成功都会调用
      complete(res) {

      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
