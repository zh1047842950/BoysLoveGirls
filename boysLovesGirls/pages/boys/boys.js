// boys.js
var util = require('../../utils/util.js'),
queryDB = util.queryDB,
queryTop = util.queryTop;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    coverImgShow: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
    var _this = this, i = 0;

    
    wx.showModal({
      title: '游客段位确认',
      content: '恳请青铜段位的小学生及B cup女司机离开！！！',
      showCancel: true,
      cancelText: '乳臭未干',
      cancelColor: 'green',
      confirmText: '干柴烈火',
      confirmColor: 'red',
      success: function (res) {
        if (res.confirm) {
          _this.setData({ coverImgShow: true })
        } else {

          wx.redirectTo({
            url: '../children/children',
            success: function (res) { },
            fail: function (res) { },
            complete: function (res) { },
          })
        }

      },
      fail: function (res) {
      
      },
      complete: function (res) { },
    });

    queryDB(_this, "identities/boy");
    setTimeout(function(){
      queryTop(_this, "identities/boy/", { limitNum: 6 });
    },1000);

    setTimeout(function(){
      _this.setData({  identityResult: _this.data.identityResult });
    },3000);

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
  
    wx.navigateTo({
      url: '../more/more',
      success: function(res) {
        queryDB(this, "identities/boy/" + e.currentTarget.dataset.type)
        getApp().globalData.gilrTypeName = e.currentTarget.dataset.name
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  }

})
