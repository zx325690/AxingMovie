
//初始化数据源
const db = wx.cloud.database();
const test = db.collection('MovieH');
Page({
    data: {
    title: "加载中...",
    movies: [],
    _id:{}
  },
  onLoad() {
    var that = this;
    //请求数据集合
    test.get().then((res) => {
      var data=res.data[0];
      //console.log(data)
          //封装数据
          that.setData({
            _id:data._id,
          title: data.title,
          movies: data.subjects
        });
    })
  }
})