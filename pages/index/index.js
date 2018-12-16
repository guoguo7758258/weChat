// pages/index/index.js
import ajax from '../../utils/ajax.js'
Page({
  seeMore() {
    wx.switchTab({
     url: '../list/list',
     success: function (res) {
       wx.showLoading({
         title: '加载中...'
       })
     },
     fail: function (res) {
       wx.showLoading({
         title: '加载失败请重试'
       })
     },
     complete: function (res) {
       wx.hideLoading()
     },
   })
  },
  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    imgUrls: [],
    banner_bottom_one: [],
    banner_bottom_two: [],
    banner_bottom_three: [],
    hot_products_one: [],
    hot_products_two: [],
    peijian_products_one: [],
    peijian_products_two: [],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    circular: true,
    interval: 3000,
    duration: 500,
    previousMargin: 0,
    nextMargin: 0
  },
  getData(){
    ajax.get('http://m.nubia.com/show/page/block?pageType=5')
      .then(res => {
        console.log(res.data.data[501])
        // this.setData ({
        //   list: res.data.data[0].article
        // })
        this.setData ({
          imgUrls: res.data.data[501],
          banner_bottom_one: res.data.data[502],
          banner_bottom_two: res.data.data[503],
          banner_bottom_three: res.data.data[504],
          hot_products_one: res.data.data[507],
          hot_products_two: res.data.data[506],
          peijian_products_one:res.data.data[508],
          peijian_products_two: res.data.data[505]
        })
      })
      .catch(err => {
        console.log(err)
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})