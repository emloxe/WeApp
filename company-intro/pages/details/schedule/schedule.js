var obj;
var app = getApp();
Page({
  data:{
    userInfo: {},
    userId: '',
    userName: ''
  },
  onLoad: function(o){
    var that = this;
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
     obj = require('../../../data/detailSc' + o.lid + '.js');
     console.log(obj.data);
     this.setData(obj.data);
  },
  join: function(){
    if(!this.data.userId){
      console.log(123)
      wx.switchTab({
        url: '../../user/user'
      })
    }else{
      var b = obj.data.join;
    
      if(!b){
        obj.data.join = true;
        var people = ++obj.data.people;
        this.setData({
          people: people
        });
        wx.showToast({
          title: '成功报名',
          icon: 'info_circle',
          duration: 1000
        });
        setTimeout(function(){
          wx.hideToast()
        },4000)
      }else{
        wx.showToast({
          title: '你已参加了',
          icon: 'info_circle',
          duration: 1000
        });
        setTimeout(function(){
          wx.hideToast()
        },4000)
      }
    }
   
  },
  quit: function(){
    var b = obj.data.join;
    if(b){
        obj.data.join = false;
        var people = --obj.data.people;
        this.setData({
          people: people
        });
        wx.showToast({
          title: '已经退出',
          icon: 'info_circle',
          duration: 1000
        });
        setTimeout(function(){
          wx.hideToast()
        },4000)
      }else{
        wx.showToast({
          title: '你已退出了',
          icon: 'info_circle',
          duration: 1000
        });
        setTimeout(function(){
          wx.hideToast()
        },4000)
      }
  }

})