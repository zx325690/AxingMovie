// pages/courseVideoPlayer/courseVideoPlayer.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  onLoad() {
    
  }
  
})
wx.getStorage({
  
  key: 'cloud://axingmovie-test.6178-axingmovie-test-1301033618/fuchouzhe4.mp4',
  //对应存储的key名
  success: function (res) {
    //成功之后的操作，建议还是先打印res找到需要的东西
    console.info(res);
  }
})
