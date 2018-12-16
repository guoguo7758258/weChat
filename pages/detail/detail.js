// pages/detail/detail.js
import ajax from '../../utils/ajax.js'
const app = getApp();
Page({
  addCart(e) {
   app.addCart(e.currentTarget.dataset)
   this.setData({
    product_num: app.totalCount()
   })
  },
  goCart() {
    wx.switchTab({
      url: '../cart/cart',
      success: function(res) {
        wx.showLoading({
          title: '加载中...',
        })
      },
      fail: function(res) {
        wx.showLoading({
          title: '加载失败',
        })
      },
      complete: function(res) {
        wx.hideLoading()
      },
    })
  },
  getDetail(id){
    ajax.get(`https://m.nubia.com/show/product/getRecommendProduct?productId=${id}&source=1`)
      .then(res => {
        console.log(res.data.data.result)
        this.setData({
          recommendList: res.data.data.result
        })
      })
      .catch(err => {
        console.log(err)
      })
  },
  getDetailImg(id){
    if(id>1000){
      ajax.get(`http://www.xiongmaoyouxuan.com/api/detail?id=420${id}&normal=1&sa=`)
        .then(res=> {
          this.setData({
            banner_img: res.data.data.detail.photo,
            detail_img: res.data.data.detail.descContentList,
            detail: res.data.data.detail,
            share: res.data.data.share
          })
          console.log(res.data.data.detail.photo)
        })
    } else {
      ajax.get(`http://www.xiongmaoyouxuan.com/api/detail?id=4206${id}&normal=1&sa=`)
        .then(res => {
          console.log(res.data.data.detail.photo)
          this.setData({
            banner_img: res.data.data.detail.photo,
            detail_img: res.data.data.detail.descContentList,
            detail: res.data.data.detail,
            share: res.data.data.share
          })
        })
    }

  },
  /**
   * 页面的初始数据
   */
  data: {
    recommendList: [],
    banner_img: [],
    detail_img: [],
    detail: [],
    share: [],
    product_num: 0,
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    circular: true,
    interval: 3000,
    duration: 500,
    previousMargin: 0,
    nextMargin: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.getDetail(options.id)
    this.getDetailImg(options.id)
    this.setData({
      product_num: app.totalCount()
    })
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
    this.setData({
      product_num: app.totalCount()
    })
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