// pages/register/register.js
import WxValidate from '../../utils/WxValidate';
var intervalTask = null;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    realName: '',
    idCard: '',
    phone: '',
    verifyCode: '',
    asyID: '',
    btnDisabled: false,
    refreshTime: null,
    files: []
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
      },
      realName: {
        required: true
      },
      idCard: {
        required: true,
        idcard: true
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
      },
      realName: {
        required: "姓名不能为空"
      },
      idCard: {
        required: "身份证不能为空",
        idcard: "请输入正确身份证"
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
  },
  chooseImage: function(e) {
    var that = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function(res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        that.setData({
          files: that.data.files.concat(res.tempFilePaths)
        });
        //上传服务器
        // wx.uploadFile({
        //   url: 'https://example.weixin.qq.com/upload', //仅为示例，非真实的接口地址
        //   filePath: tempFilePaths[0],
        //   name: 'file',
        //   formData: {
        //     'user': 'test'
        //   },
        //   success(res) {
        //     const data = res.data
        //     //do something
        //   }
        // })
      }
    })
  },
  previewImage: function(e) {
    wx.previewImage({
      current: e.currentTarget.id, // 当前显示图片的http链接
      urls: this.data.files // 需要预览的图片http链接列表
    })
  },
  cancelImage: function(e) {
    let index = e.currentTarget.dataset['index'];
    // console.log(this.data.files)
    this.data.files.splice(index, 1)
    this.setData({
      files: this.data.files
    })
  }
})