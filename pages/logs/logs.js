//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
    userInfo: {}
  },
  onLoad: function(option) {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
    var page = getCurrentPages();
  },
  toIndex:function(e){
    wx.navigateTo({
      url: '../index/index',
    })
  }
})