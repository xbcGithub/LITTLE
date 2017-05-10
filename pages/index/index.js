var app = getApp()
var util = require('../../utils/util.js');
Page({
  data: {
    todos: [],
    newmotto: 0,
    hasEmptyGrid: false,
    datex: app.globalData.datex,
    motto: app.globalData.motto,
    abc: 'xie',
  },
  getSystemInfo() {
    try {
      const res = wx.getSystemInfoSync();
      this.setData({
        scrollViewHeight: res.windowHeight * res.pixelRatio || 667
      });
    } catch (e) {
      console.log(e);
    }
  },
  getThisMonthDays(year, month) {
    return new Date(year, month, 0).getDate();
  },
  getFirstDayOfWeek(year, month) {
    return new Date(Date.UTC(year, month - 1, 1)).getDay();
  },
  calculateEmptyGrids(year, month) {
    const firstDayOfWeek = this.getFirstDayOfWeek(year, month);
    let empytGrids = [];
    if (firstDayOfWeek > 0) {
      for (let i = 0; i < firstDayOfWeek; i++) {
        empytGrids.push(i);
      }
      this.setData({
        hasEmptyGrid: true,
        empytGrids
      });
    } else {
      this.setData({
        hasEmptyGrid: false,
        empytGrids: []
      });
    }
  },
  calculateDays(year, month) {
    let days = [];

    const thisMonthDays = this.getThisMonthDays(year, month);

    for (let i = 1; i <= thisMonthDays; i++) {
      days.push(i);
    }

    this.setData({
      days
    });
  },
  onReady: function () {
    // Do something when page ready.
    var datax = util.formatTime(new Date());
    this.setData({
      datex: datax[2],
    });
  },
  onLoad(options) {
    const date = new Date();
    const cur_year = date.getFullYear();
    const cur_month = date.getMonth() + 1;
    const weeks_ch = ['日', '一', '二', '三', '四', '五', '六'];
    this.calculateEmptyGrids(cur_year, cur_month);
    this.calculateDays(cur_year, cur_month);
    this.getSystemInfo();
    this.setData({
      cur_year,
      cur_month,
      weeks_ch
    })
    var socketOpen = false
    var socketMsgQueue = []
  },
  btncode: function () {
    wx.scanCode({
      success: (res) => {

        wx.navigateTo({
          url: '/pages/rcxx1/rcxx1'
        })
      }
    })
  },
  btnday: function (data) {
    this.setData({
      datex: data.currentTarget.dataset.idx + 1,
    });

    console.log(data.currentTarget.dataset);
  },
  btnadd: function () {
    wx.navigateTo({
      url: '/pages/newTask/newTask'
    })
  },
  fundelete(e) {
    var newmotto = this.data.motto;
    newmotto[e.currentTarget.dataset.idx] = newmotto[0];
    this.setData({
      motto: newmotto,
    })
  },
  btn1: function (res) {
    var motto = this.data.motto;
    var that = this;
    wx.showModal({
      title: '确定要删除日程吗？',
      content: '日程将被清除',
      success: function (c) {
        if (c.confirm) {

          motto[res.currentTarget.dataset.idx] = motto[0];
          that.setData({
            motto: motto,
          })
          console.log('用户点击确定');
        } else if (c.cancel) {
          console.log('用户点击取消')
        }
      }
    })

  },
  btncc: function (res1) {
    var motto = this.data.motto;
    var that = this;
    wx.request({
      url: 'http://127.0.0.1:8888', //仅为示例，并非真实的接口地址
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res1) {
        console.log(res1);
        motto[1].name = res1.data;
        that.setData({
          motto: motto,
        })
      }
    })
  },


  handleCalendar(e) {
    const handle = e.currentTarget.dataset.handle;
    const cur_year = this.data.cur_year;
    const cur_month = this.data.cur_month;
    if (handle === 'prev') {
      let newMonth = cur_month - 1;
      let newYear = cur_year;
      if (newMonth < 1) {
        newYear = cur_year - 1;
        newMonth = 12;
      }

      this.calculateDays(newYear, newMonth);
      this.calculateEmptyGrids(newYear, newMonth);

      this.setData({
        cur_year: newYear,
        cur_month: newMonth
      })

    } else {
      let newMonth = cur_month + 1;
      let newYear = cur_year;
      if (newMonth > 12) {
        newYear = cur_year + 1;
        newMonth = 1;
      }

      this.calculateDays(newYear, newMonth);
      this.calculateEmptyGrids(newYear, newMonth);

      this.setData({
        cur_year: newYear,
        cur_month: newMonth
      })
    }
  },
  btn2: function (res) {
    wx.navigateTo({
      url: '/pages/rcxx1/rcxx1?key=' + res.currentTarget.dataset.idx
    })
  },


  onShareAppMessage() {
    return {
      title: '小程序日历',
      desc: '还是新鲜的日历哟',
      path: 'pages/index/index'
    }
  }

})
