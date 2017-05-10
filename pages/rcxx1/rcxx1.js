var app = getApp()
Page({
  data: {
    motto:app.globalData.motto,
    userInfo: {},
  },
   onShareAppMessage: function () {
    return {
      title: '专业课视频',
      path: '/pages/rcxx1/rcxx1'
    }
  },
  
  onLoad: function (options) {
    console.log('onLoad')
    this.setData({
      i:options.key,
    })
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
