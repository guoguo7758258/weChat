// pages/mall/mall.js
import ajax from '../../../utils/ajax.js'
Page({
  hidePhoneSpices() {
    this.setData({
      isShow: !this.data.isShow
    })
  },
  addTitle(event){
    console.log(event.currentTarget.dataset.id)
    this.setData({
      title:event.currentTarget.dataset.text,
      isShow: !this.data.isShow
    })
    this.getDataPhone(event.currentTarget.dataset.id)
  },
  getDataPhone(id) {
    if(id===''){
      ajax.get('https://m.nubia.com/show/page/searchPhone')
        .then(res => {
          console.log(res.data.data.result)
          wx.setNavigationBarTitle({
            title: '努比亚手机'
          })
          this.setData({
            phoneList: res.data.data.result
          })
        })
        .catch(err => {
          console.log(err)
        })
    }else{
      ajax.get(`https://m.nubia.com/show/page/searchPhone?productId=${id}`)
        .then(res => {
          console.log(res.data.data.result)
          wx.setNavigationBarTitle({
            title: '努比亚手机'
          })
          this.setData({
            phoneList: res.data.data.result
          })
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  getDataAllPhone(id) {
    ajax.get('https://m.nubia.com/show/page/phoneType')
      .then(res => {
        wx.setNavigationBarTitle({
          title: '努比亚手机'
        })
        this.setData({
          allPhone: res.data.data.result
        })
      })
      .catch(err => {
        console.log(err)
      })
  },
  /**
   * 页面的初始数据
   */
  data: {
    phoneList: [],
    allPhone:[],
    isShow: true,
    title:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      title: options.name
    })
    console.log(options.name)
    this.getDataPhone(options.id)
    this.getDataAllPhone()
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