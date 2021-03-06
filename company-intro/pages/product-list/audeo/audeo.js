
Page({
  data:{
      poster: 'http://222.73.218.186:8206/UpLoad/After/Album/SHANGYEKEJITESEZIYUANZENGGEKU/Icon/Org/2016-11-01/201611010936202406.jpg',
      name: '古董局中局',
      author: '马伯庸',
      src: 'http://222.73.218.186:8206/UpLoad/After/AlbumFile/SHANGYEKEJITESEZIYUANZENGGEKU/mp3/Org/2016-11-01/201611010938279329.mp3',  
      text: '这是一部关于古董鉴定、收藏、造假、设局的百科全书式小说。字画、青铜、金石、瓷器……每一件古董背后，都是深厚的历史积淀和文化传承；而每一件仿冒品背后，都是机关算尽的机巧和匪夷所思的圈套。古董造假、字画仿冒，古已有之。东晋时，康昕仿冒王羲之的书法真迹，连他儿子王献之也辨认不出来；宋朝皇帝宋徽宗喜欢造假，仿制了一大批商代的青铜兵器，摆在宫廷里，乐此不疲。在古董斑驳的纹理中，承载着一个民族的文化，一个时代的风貌，它的价值，不是金钱可以衡量的，但可怜的人类却只会用金钱去衡量它。而本来一文不值的东西，精心涂抹一番，就可以价值连城；巨大的利益，令无数人铤而走险，更有一些家族，父传子，子传孙，世世代代在这个晦暗不明、凶险万状的江湖上营生。许愿就是这样一个家族的传人，北京城琉璃厂一家古董店的店主，30岁，平时靠家传的半本鉴宝书混饭吃，青铜玉器、字画金石，一眼就断得出真伪，说得出渊源传承，靠这点儿绝活，过着平静而滋润的日子。但有一天，一个突然到来的访客，把他带进了一个做梦都想不到的阴谋中，一件坊间传说的稀世珍宝，竟然和自己有着千丝万缕的联系，一个几十年前做的局，竟然已经编排进自己的命运。许愿将使出浑身解数，置身生死之间，和蛰伏了几十年的各方神圣斗智斗勇，和古董江湖里造假做局的各种奇技淫巧一一遭遇……翻开本书，了解古董行当里的文化传承与江湖险恶。',
    list: [{
        id: '0',
        src: 'http://222.73.218.186:8206/UpLoad/After/AlbumFile/SHANGYEKEJITESEZIYUANZENGGEKU/mp3/Org/2016-11-01/201611010938279329.mp3'
        
      },
      {
        id: '1',
        src: 'http://222.73.218.186:8206/UpLoad/After/AlbumFile/SHANGYEKEJITESEZIYUANZENGGEKU/mp3/Org/2016-11-01/201611010938317052.mp3'
      },
      {
        id: '2',
        src: 'http://222.73.218.186:8206/UpLoad/After/AlbumFile/SHANGYEKEJITESEZIYUANZENGGEKU/mp3/Org/2016-11-01/201611010938363580.mp3'
      }]
  },
  onLoad:function(){   
    this.audioCtx = wx.createAudioContext('myAudio');
  },
  play: function(e){
    var id = e.target.dataset.id;
    console.log(this.data.list[id].src);
    this.audioCtx.setSrc(this.data.list[id].src)
    this.audioCtx.play()
  }
  
})