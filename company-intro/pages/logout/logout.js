// pages/logout/logout.js
Page({
  data:{},
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  logout: function(){
    wx.switchTab({
        url: '../index/index'
    })
  }
})