// pages/cart/cart.js
import ajax from '../../utils/ajax.js'
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  // 空购物车时跳转
  goBuy(){
     wx.switchTab({
       url: '../index/index',
       success: function (res) {
         wx.showLoading({
           title: '加载中...',
         })
       },
       fail: function (res) {
         wx.showLoading({
           title: '加载失败',
         })
       },
       complete: function (res) {
         wx.hideLoading()
       },
     })
  },
  //购物车数量的增加
  numAdd(e) {
    app.numAdd(e.currentTarget.dataset.id)
    this.setData({
      cartList: app.cart,
      isCheckedCount: app.isCheckedCount(),
      isCheckedPrice: app.isCheckedPrice()
    })
  },
  //购物车数量的减少
  numReduce(e) {
    app.numReduce(e.currentTarget.dataset.id)
    this.setData({
      cartList: app.cart,
      isCheckedCount: app.isCheckedCount(),
      isCheckedPrice: app.isCheckedPrice()
    })
  },
  //购物车商品选中
  singelChecked(e) {
    app.singelChecked(e.currentTarget.dataset.id)
    this.setData({
      cartList: app.cart,
      isAllChecked: app.isAllChecked(),
      isCheckedCount: app.isCheckedCount(),
      isCheckedPrice: app.isCheckedPrice()
    })
  },
  //购物车商品全选
  handelAllChecked() {
    this.setData({
      isAllChecked: !this.data.isAllChecked,
      //这里调用的时候,是同步的,要先等isAllChecked改变以后,才能更改到下一步的状态,因此需要在回调函数里面进行全选按钮的状态框的改变
    },() => {
      const select = this.data.isAllChecked
      app.AllProductChecked(select)
      this.setData({
        cartList: app.cart,
        isCheckedCount: app.isCheckedCount(),
        isCheckedPrice: app.isCheckedPrice()
      })
    })
  },
  //购物车商品滑动效果
  x: 0,
  onTouchStart(e) {
    this.x = e.touches[0].pageX;
    console.log(e.touches[0])
    this.setData({
      currentId: e.currentTarget.dataset.id
    })
  },
  onTouchMove(e) {
    const currentX = e.changedTouches[0].pageX;
    console.log(e)
    let distance = currentX-this.x
    console.log(distance)
    if (distance < -252) {
      distance = -252
    }
    if (distance > 0) {
      distance = 0
    }
    this.setData({
      left: distance
    })
  },
  //购物车的删除
  handelDelet(e) {
    wx.showModal({
      title: '确认删除该商品么？',
      content: '不要抛弃人家啦',
      showCancel: true,
      cancelText: '再想一想',
      cancelColor: '',
      confirmText: '狠心抛弃',
      confirmColor: '#ff4d4d',
      success: (res) =>{
        console.log(res)
        if(res.cancel===true){
          this.setData({
            left: 0
          })
        }
        if(res.confirm===true){
          app.handelDelet(e.currentTarget.dataset.id)
          this.setData({
            cartList: app.cart
          })
        }
      },
      complete:(res) => {
        this.setData({
          left: 0
        }) 
      },
    })
  },
  data: {
    cartList: [],
    isAllChecked: false,
    isCheckedCount: 0,
    isCheckedPrice: 0,
    currentId: 0,
    left:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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
      cartList: app.cart,
      isCheckedCount: app.isCheckedCount(),
      isCheckedPrice:app.isCheckedPrice()
    })
    if(app.cart!=''){
      app.setBage()
    }
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