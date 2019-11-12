// pages/register/register.js
import WxValidate from '../../utils/WxValidate';
var intervalTask = null;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone: '',
    verifyCode: '',
    btnDisabled: false,
    refreshTime: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.initValidate()
    console.log(this.WxValidate)
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

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {
    //离开页面时清除定时器

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

  showModal(error) {
    wx.showModal({
      content: error.msg,
      showCancel: false,
    })
  },
  initValidate() {
    // 验证字段的规则
    const rules = {
      phone: {
        required: true,
        tel: true
      },
      verifyCode: {
        required: true
      }
    }

    // 验证字段的提示信息，若不传则调用默认的信息
    const messages = {
      phone: {
        required: "号码不能为空",
        tel: "请输入正确的电话格式",
      },
      verifyCode: {
        required: "验证码不能为空",
      }
    }
    // 创建实例对象
    this.WxValidate = new WxValidate(rules, messages)
  },

  bindInput: function(e) {
    let name = e.currentTarget.dataset.name;
    let nameMap = {};
    nameMap[name] = e.detail && e.detail.value;
    this.setData(nameMap);
    console.log("data", this.data)
  },
  getCode: function(e) {
    console.info("getCode")
    if (this.data.refreshTime == null) {
      this.setData({
        refreshTime: 60,
        btnDisabled: true
      })
    }
    let that = this;
    intervalTask = setInterval(function() {
      let currentTime = that.data.refreshTime;
      currentTime--;
      that.setData({
        refreshTime: currentTime
      });
      if (currentTime <= 0) {
        clearInterval(intervalTask);
        that.setData({
          refreshTime: null,
          btnDisabled: false
        });
      }
    }, 1000);
  },
  submit: function() {
    // 传入表单数据，调用验证方法
    if (!this.WxValidate.checkForm(this.data)) {
      const error = this.WxValidate.errorList[0]
      this.showModal(error)
      return false
    }

    this.showModal({
      msg: '提交成功',
    })
    wx.switchTab({
      url: '../index/index',
    })
  }

})