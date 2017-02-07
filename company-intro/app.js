//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  getUserId: function(){
    return this.globalData.userId;
  },

  globalData:{
    userInfo: null,
    userId: null,
    userName: null,
    messageList: [{
          time: '2017/01/14 14:21:32',
          latitude: 31.230416, 
          longitude: 121.473701
        },
        {
          time: '2017/01/13 14:21:32',
          latitude: 31.230416, 
          longitude: 121.473701
        }]
  }
})