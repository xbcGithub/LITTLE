var app = getApp();
Page({
  data: {
     motto: app.globalData.motto,
    // text:"这是一个页面"
    timeValue: '08:08',
    dateValue: '2017-4-13'
  },
  normalPickerBindchange: function (e) {
    var motto=this.data.motto;
    for(i=1;motto[i].flag=0;i++){}
    motto[i].name=e.detail.value
    this.setData({
      motto:motto,
    })
  },
  timePickerBindchange: function (e) {
    this.setData({
      timeValue: e.detail.value
    })
  },
  datePickerBindchange: function (e) {
    this.setData({
      dateValue: e.detail.value
    })
  },
  btnadd: function (e) {
    this.setData({
      dateValue: e.detail.value
    })

  },


})