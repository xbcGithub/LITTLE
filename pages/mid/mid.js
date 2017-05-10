var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs?key=1'
    })
  },
    btn1:function () {
    
   wx.navigateTo({
      url: '/pages/rcxx1/rcxx1?key=' + 1
    })

  },


  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})