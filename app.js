//app.js
App({
  cart:[],
  //添加到购物车
  addCart(cartItem) {
    const isInCart = this.cart.some(item => item.id === cartItem.id)
    if (isInCart) {
      this.cart = this.cart.map(item => {
        if (item.id === cartItem.id) {
          item.count+=1
        }
        return item
      })
    } else {
      this.cart = this.cart.concat({
        ...cartItem,
        count: 1,
        isChecked: false
      })
    }
    this.addToLocalStorage()
    if(this.cart !=''){
      this.setBage()
    }
  },
  //购物车数量增加
  numAdd(id){
    this.cart = this.cart.map(item => {
      if (item.id === id) {
        item.count++
      }
      return item
    })
    this.addToLocalStorage()
    if (this.cart != '') {
      this.setBage()
    }
  },
  //购物车数量的减少
  numReduce(id){
    this.cart = this.cart.map(item => {
      if (item.id === id) {
        if(item.count >1){
          item.count--
        } else {
          item.count = 1
        }
      }
      return item
    })
    this.addToLocalStorage()
    if (this.cart != '') {
      this.setBage()
    }
  },
  //购物车商品单选
  singelChecked(id){
   this.cart = this.cart.map(item => {
     if(item.id === id) {
       item.isChecked = !item.isChecked
     }
     return item
   })

    this.addToLocalStorage()
  },
  //购物车商品全选
  isAllChecked() {
    return this.cart.every(item => item.isChecked === true)
  },
  AllProductChecked(select){
      this.cart = this.cart.map(item => {
          item.isChecked = select
          return item
      })
    
    this.addToLocalStorage()
    console.log(this.cart)
  },
  //购物车选中的数量
  isCheckedCount() {
    return this.cart.reduce((result, item) => {
      if(item.isChecked===true) {
        result += item.count
      }
      console.log(result)
      return result
    },0)
  },
  //购物车选中商品的总价
  isCheckedPrice() {
    return this.cart.reduce((result, item) => {
      if(item.isChecked === true) {
        result += item.count * item.price
      }
      console.log(result)
      return result
    },0)
  },
  //购物车商品的删除
  handelDelet(id) {
    this.cart= this.cart.filter(item => item.id != id)
    this.addToLocalStorage()
    this.setBage()
    if (this.cart.length === 0) {
      wx.removeTabBarBadge({
        index: 2
      })
      
    }
  },
  //购物车总数量
  totalCount() {
    return this.cart.reduce((result, item) => {
      result += item.count
      return result
    },0)
  },
  //设置购物车角标显示
  setBage() {
    const text = this.totalCount().toString()
    wx.setTabBarBadge({
      index: 2,
      text,
      success: function(res) {
        wx.showToast({
          title: '加入购物车成功',
        })
      }
    })
  },
  //将信息存入本地locaStorage
  addToLocalStorage() {
     wx.setStorageSync('my-cart', this.cart)
  },
  onLoad: function (options) {
    this.addToLocalStorage()
    if (this.cart != '') {
      this.setBage()
    }
  },
  onLaunch: function () {
    //将storage里的数据取出
    this.cart = wx.getStorageSync('my-cart') || []
    if (this.cart != '') {
      this.setBage()
    }
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  }
})