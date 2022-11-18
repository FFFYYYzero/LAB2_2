// pages/muti/muti.js
const app=getApp(); 
  Page({
    data: {
    //初始化隐藏模态输入框
    hiddenmodalput: true,
    usernum:""
    },
    modalinput: function () {
    this.setData({
      //注意到模态框的取消按钮也是绑定的这个函数，
      //所以这里直接取反hiddenmodalput，也是没有毛病
      hiddenmodalput: !this.data.hiddenmodalput
    })
  },
  
  getInputNum:function(e){
    
    this.setData({
      usernum:e.detail.value
    })
    
    // 获取到input的值
  },
  confirm:function(){ 
    app.usernum=this.data.usernum;
    wx.navigateTo({        //页面跳转
      url: '/pages/mutiplays/mutiplays',
    })
 
  },


  

  /**
   * 页面的初始数据
   */
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})