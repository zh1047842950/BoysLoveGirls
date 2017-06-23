// girls.js
var util = require('../../utils/util.js'),
  queryDB = util.queryDB,
  queryTop = util.queryTop;

Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var _this = this;

    queryDB(_this, "identities/girl");

    setTimeout(function () {
      queryTop(_this, "identities/girl/", { limitNum: 6 });
    }, 1000);

    setTimeout(function () {
      _this.setData({ identityResult: _this.data.identityResult });
    }, 3000);

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  getMore: function (e) {
    console.log(123, e.currentTarget.dataset.type);
    wx.navigateTo({
      url: '../more/more',
      success: function (res) {
        queryDB(this, "identities/girl/" + e.currentTarget.dataset.type)
        getApp().globalData.gilrTypeName = e.currentTarget.dataset.name
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  }
})