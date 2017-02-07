var obj1 = require('../../data/detailSc001.js');
var obj2 = require('../../data/detailSc002.js');

Page({
  data:{
    list:[{
      lectureId: '001',
      allSite: 60,
      people: 32,
      title: '大数据科学与应用系列讲座',
      imgUrl: '../../images/pic_02.jpg',
      text: '本次讲座以一系列大数据讲座为主线，突出实战性，激发学生学习兴趣和动力，促进学生理论与实践相结合，启发学生技术创新。' 
    },{
      lectureId: '002',
      allSite: 80,
      people: 10,
      title: '界面设计导论',
      imgUrl: '../../images/pic_03.jpg',
      text: '本讲座是界面设计的入门课，面向初学者，通过全面介绍界面设计领域的发展现状、应用领域和趋势' 
    }]
  },
  onLoad:function(){
    var p1 = obj1.data.people;
    var p2 = obj2.data.people;
    var l = this.data.list;
    l[0].people = p1;
    l[1].people = p2;
    this.setData({
      list: l
    });
  },
  toDetailSc: function(e){
    console.log(e.target);
    wx.navigateTo({
      url: '../details/schedule/schedule?lid='+e.target.dataset.lectureid,
     
    })
   

  }

})