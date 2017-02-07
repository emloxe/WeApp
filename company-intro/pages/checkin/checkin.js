var app = getApp();
var util = require('../../utils/util.js')
Page({
  data: {
        userInfo: {},
        userId: '',
        userName: '',
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
    var messageList = app.globalData.messageList;
    if(id && name){
       this.setData({
            userName: name,
            userId: id
       })
    }
    if(messageList){
      this.setData({
        messageList: messageList
      })
    }
  },  
  login: function(){
    if(!this.data.userId){
      wx.redirectTo({
        url: '../login/login'
      })
    }

  },
  checkin: function(){
    if(this.isSameday()){
      wx.showToast({
        title: '今日已经打卡',
        icon: 'waiting_circle',
        duration: 1000
      })

      setTimeout(function(){
        wx.hideToast()
      },4000)
    }else{
      var that = this;

      wx.getLocation({
      type: 'wgs84',
      success: function(res) {
        var obj = {};
        obj.latitude = res.latitude;
        obj.longitude = res.longitude;
        obj.time = util.formatTime(new Date());
        var messages = that.data.messageList;
        messages.unshift(obj);
        that.setData({
          messageList: messages
        }) 
        app.globalData.messageList = messages;  
      }
      })
      
      
    
    }


  }, 
   isSameday: function(){
     var lastTime = this.data.messageList;

    if(!lastTime[0].time){return true}

     var todayArr = util.formatArr(new Date());    
     var lastTimeArr = lastTime[0].time.split('/');
     var day = lastTimeArr[2].slice(0, 2);

     lastTimeArr.pop();
     lastTimeArr.push(day)
     console.log(lastTimeArr, todayArr);
     for(var i=0; i<3; i++){
       if(lastTimeArr[i] != todayArr[i]){
         return false;
       }
     }
     return true;
  }


    
})