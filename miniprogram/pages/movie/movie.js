//初始化数据源
const db = wx.cloud.database();
const test = db.collection('MovieB');
Page({
  data: {
    movie: {}
  },
  onLoad: function(options) {
    var that = this;
    console.info(options);
    //options为上一页传的值 object形式
    test.doc(options._id).get().then(res => {
      // res.data 包含该记录的数据
      that.setData({
        movie: res.data.movie
      });
    })
  },
  watchMovie: function () {
    wx.redirectTo({
      url: '../courseVideoPlayer/courseVideoPlayer',
    })
    
  }
  
})


