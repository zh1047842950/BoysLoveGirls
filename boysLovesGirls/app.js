//app.js

App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo: function (cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
               console.log(123, res)
              that.globalData.respone = res
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData: {
    respone: null,
    userInfo: null,
    seachTypeResult:{},
   
    // img字段返回的是不完整的图片路径src，
    // 需要在前面添加【http://tnfs.tngou.net/image】或者【http://tnfs.tngou.net/img】
    // 前者可以再图片后面添加宽度和高度，如：
    imgBaseUrl: "http://tnfs.tngou.net/img",
    
    serverBaseUrl: "http://192.168.56.1:8888/",
    // serverBaseUrl: "http://www.tngou.net/tnfs/api/list"
    
  },
  
  getMore: function (girlType) {
    console.log(123, girlType);
  }
})