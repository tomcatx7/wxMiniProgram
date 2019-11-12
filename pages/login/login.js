var app = getApp();
var globalData = app.globalData;

Page({
  data: {
    windowHeight: globalData.sysInfo.windowHeight,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad: function() {
    console.log("gloabl", globalData)
    // 查看是否授权
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function(res) {
              console.log(res.userInfo)
            }
          })
        }
      }
    })
  },
  login() {
    if (globalData.loginCode) {
      // wx.request({
      //   url: '',
      // })
      // wx.switchTab({
      //   url: '../index/index',
      // })
      wx.navigateTo({
        url: '../register/register',
      })
      // wx.switchTab({
      //   url: '../register/register',
      // })
    }
  }
})