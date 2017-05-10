//app.js
App({
  globalData: {
    datex: 1,
    userInfo: {},
    motto: [
      {
        id: 0,
        name: 0,
        day: 0,
        time: 0,
        place: 0,
        people: 0,
        team:0,
        long: 0,
        flag: 0,
      },
      {
        id: 1,
        name: '专业课视频',
        day: '2017-4-13',
        time: '15:33',
        place: '图书馆一楼报告厅',
        people: 6,
        team:1,
        long: '选择一段音乐大师的作品并为其配上视频。斯特拉文斯基，勋伯格，菲利普格拉斯…',
        flag: 1,
      },
      {
        id: 2,
        name: '毛概课程讨论',
        day: '2017-4-13',
        time: '15:33',
        place: '图书馆一楼报告厅',
        team:2,
        people: 6,
        long: '选择一段音乐大师的作品并为其配上视频。斯特拉文斯基，勋伯格，菲利普格拉斯…',
        flag: 1,
      },
            {
        id: 3,
        name: '设计发展讲座',
        day: '2017-4-13',
        time: '15:33',
        place: '图书馆一楼报告厅',
        people: 6,
        team:1,
        long: '选择一段音乐大师的作品并为其配上视频。斯特拉文斯基，勋伯格，菲利普格拉斯…',
        flag: 1,
      },
            {
        id: 4,
        name: 'TOFEL考试',
        day: '2017-4-13',
        time: '15:33',
        place: '图书馆一楼报告厅',
        people: 6,
        team:0,
        long: '选择一段音乐大师的作品并为其配上视频。斯特拉文斯基，勋伯格，菲利普格拉斯…',
        flag: 1,
      },

    ],
  },

  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || [];
    logs.unshift(Date.now());
    wx.setStorageSync('logs', logs);
  },
  getUserInfo: function (cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  }

})