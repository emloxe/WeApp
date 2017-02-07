//index.js
//获取应用实例
var app = getApp()
Page({
  data: {  
    userInfo: {},
    userId: '',
    userName: ''

  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
    var id = app.getUserId();
    if(id){
      wx.navigateTo({
        url: "../index/index"
      });
    }
  },

  getName: function(e){
    var name = e.detail.value;
    var id = this.getIdfromName(name);
    if (id){
      this.setData({
        userName: name,
        userId: id
      });
      app.globalData.userName = name;
      app.globalData.userId = id;
    }else{
      this.setData({        
        userId: ''
      });
      app.globalData.userName = null;
      app.globalData.userId = null;
    }

  },
  login: function(){
    if(this.data.userId){
      console.log('111');
      wx.switchTab({
        url: '../user/user'
      })
    }
    
  },
  toback: function(){
    wx.switchTab({
        url: '../index/index'
      })
    console.log("返回界面");
  },
  getIdfromName: function(name){
    var obj = {
      '管理员': '8888'
    };

    return obj[name];
  }
  
})
