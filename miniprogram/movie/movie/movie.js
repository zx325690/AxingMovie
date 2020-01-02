var API_URL = 'https://movie.douban.com/explore'

Page({


  data: {
    movie: {}
  },
  onLoad: function (params) {
     console.log(params);
    var that = this;
    wx.request({
      url: API_URL + params.id,
      data: {},
      header: {
        'content-type': 'json' // 默认值
      },
      success: function (res) {
        // console.log(res.data)
        that.setData({
          movie: res.data
        });
      }
    })
  },



})