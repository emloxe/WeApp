var app = getApp();
Page({
    data: {
        userInfo: {},       
        userName: '访客',
        userId: ''
    },
    onLoad: function () {
       var that = this
       //调用应用实例的方法获取全局数据
       app.getUserInfo(function(userInfo){
       //更新数据
           that.setData({
              userInfo:userInfo
           })
        });

       var id = app.globalData.userId;
       var name = app.globalData.userName;
       if(id && name){
           this.setData({
               userName: name,
               userId: id
           })
       }      
        

    },
    toVideo: function(){
        wx.navigateTo({url: '../product-list/video/video'})
    },
    toAudeo: function(){
        wx.navigateTo({url: '../product-list/audeo/audeo'})
    },
    toArticle: function(){
        wx.navigateTo({url: '../product-list/article/article'})
    },
    toCheckin: function(){
        var id = app.globalData.userId;
        var name = app.globalData.userName;
        if(id&&name){
            wx.navigateTo({url: '../checkin/checkin'})
        }else{            
            wx.switchTab({url: '../user/user'})
        }        
    },
    toSchedule: function(){
        wx.navigateTo({url: '../schedule/schedule'})
    }
   

});