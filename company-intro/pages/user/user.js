var app = getApp();
Page({
  data: {
        userInfo: {},
        userId: '',
        userName: '游客'
    },
  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
    var id = app.globalData.userId;
    var name = app.globalData.userName;
    if(id && name){
       this.setData({
            userName: name,
            userId: id
       })
    }
    /*
    wx.request({
      // 模拟了一下请求
  url: 'https://public.dooland.com/zy/magazine/categorys', //仅为示例，并非真实的接口地址
  data: {
    appId : 'ec15fddb8fb453c00fcb2edf5f75faeb'
  },
  header: {
      'content-type': 'application/x-www-form-urlencoded'
  },
  method:'POST',
  success: function(res) {
    console.log(res.data)
  }
}) */     
  },
  login: function(){
    if(!this.data.userId){
      wx.redirectTo({
        url: '../login/login'
      })
    }

  },
  logout: function(){
    app.globalData.userId = null;
    app.globalData.userName = null;
    wx.redirectTo({
        url: '../logout/logout'
    })

  }


    
})