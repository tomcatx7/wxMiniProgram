// pages/login/login.js
const validate = require('../../utils/validate.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName: '13881078465 ',
    password: 'admin123',
    disabled: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    console.log("login show")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {
    console.log("login hidden")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  getUserName: function(e) {
    var name = e.detail.value.trim().replace(" ", "");
    if (validate.validatePhone(name)) {
      return this.setData({
        userName: name
      })
    }
    wx.showToast({
      title: '输入账号必须为手机号',
      icon: 'none',
      duration: 1000
    })

  },
  getPassword: function(e) {
    var pass = e.detail.value.trim().replace(" ", "");
    if (validate.validatePass(pass)) {
      return this.setData({
        password: pass
      })
      wx.showToast({
        title: '密码不能为空或格式错误',
        icon: 'none',
        duration: 1000
      })
    }
  },
  doLogin() {
    if (!validate.isNull(this.data.userName) && !validate.isNull(this.data.password)) {
      console.log("userInfo " + this.data.userName + ":" + this.data.password)
      this.setData({
        disabled: true
      })
      wx.showLoading({
        title: '登录中...',
      })
      setTimeout(() => {
        wx.showToast({
          title: '登录成功',
          icon: "success"
        })
        wx.redirectTo({
          url: '../logs/logs',
        })
      }, 1000, null)
      // wx.login({
      //   success(res) {
      //     if (res.code) {
      //       //发起网络请求
      //       console.log(res)
      //       wx.request({
      //         url: 'http://127.0.0.1:8088/doWxlogin?code='+res.code,
      //         method: "GET"
      //       })
      //     } else {
      //       console.log('登录失败！' + res.errMsg)
      //     }
      //   },
      //   timeout:5000
      // })
    } else {
      wx.showToast({
        title: '输入账号密码错误',
        icon: 'none',
        duration: 1000
      })
    }
  }
})