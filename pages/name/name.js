var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  btn1: function () {
    wx.showActionSheet({
      itemList: ['日程', '日程组', 'SOP'],
      success: function (res) {
        console.log(res);
        if(res){
        wx.navigateTo({
          url: '/pages/rcxx1/rcxx1?key='+res.tapIndex
        })}
      },
    })
  },


  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  }
})