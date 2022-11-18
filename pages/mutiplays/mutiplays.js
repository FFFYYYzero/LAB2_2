// pages/index/index.js
const app=getApp();
Page({
  
  data:{
    dice:['','','','','','',],
    GIF:'',
    total:[0,0,0,0,0,0],
    usernum:"",
    mutiresult:[],
    index:0,
    rankresult:"",
    poet:["一轮秋影转金波，飞镜又重磨。———辛弃疾《太常引·建康中秋夜为吕叔潜赋》","暮云收尽溢清寒。银汉无声转玉盘。——苏轼《阳关曲 / 中秋月》","中秋月。月到中秋偏皎洁。———徐有贞《中秋月·中秋月》","人有悲欢离合，月有阴晴圆缺，此事古难全。——苏轼《水调歌头·丙辰中秋》","洞庭青草，近中秋，更无一点风色。——张孝祥《念奴娇·过洞庭》","好时节，愿得年年，常见中秋月。——徐有贞《中秋月·中秋月》","昨风一吹无人会，今夜清光似往年。——白居易《八月十五日夜湓亭望月》","桂花浮玉，正月满天街，夜凉如洗。——文征明《念奴娇·中秋对月》","至今不会天中事，应是嫦娥掷与人。——皮日休《天竺寺八月十五日夜桂子》","尘中见月心亦闲，况是清秋仙府间。——刘禹锡《八月十五夜桃源玩月》"]
  },
  onLoad: function (options) {
    this.setData({
      usernum:app.usernum,
    })
    
  },
muti(){

},

  click() {
    var usernums=app.usernum
    
    this.setData({
      GIF: "/image/Thegif.gif",
      
    })
    var result=[this.random(),this.random(),this.random(),this.random(),this.random(),this.random()]
    setTimeout(() => {
      this.setData({
        'GIF':'',})
        this.display(result[0],'0')
        this.display(result[1],'1')
        this.display(result[2],'2')
        this.display(result[3],'3')
        this.display(result[4],'4')
        this.display(result[5],'5')
    }, 2000)
    var str=this.final(result)
    
    this.setData({
      dice:{}
    })
    
    setTimeout(() => {
    this.handleShowModal(str)},3000)
console.log(this.data.index);
console.log(usernums);
    
 },



 final(arr){
   var rankresults=""
  var mutiresults=this.data.mutiresult
  var indexs=this.data.index;
   var store=[0,0,0,0,0,0];
   var d1=0;
   var d2=0;
   var d3=0;
   var d4=0;
   var d5=0;
   var d6=0;
   var res=""
for( var i=0;i<6;i++){
  
if(arr[i]==1){
  d1++;
}
if(arr[i]==2){
  d2++;
}
if(arr[i]==3){
  d3++;
}
if(arr[i]==4){
  d4++;
}
if(arr[i]==5){
  d5++;
}
if(arr[i]==6){
  d6++;
}

}

if(d4==1){
res="一秀"
}
if(d4==2){
  res="二举"
}
if(d2==4&&d1==4&&d3==4&&d4==4&d5==4&d6==4){
  res="四进"
}
if(d4==3){
  res="三红"
}
if(d1==1&&d2==1&&d3==1&&d4==1&&d5==1&d6==1){
  res="对堂"
}
if(d4==4){
  res="四红"
}
if(d1==5&&d2==5&&d3==5&&d4==5&&d5==5&&d6==5){
  res="五子"
}
if(d4==5){
  res="五红"
}
if(d2==6|d1==6|d3==6|d4==6|d5==6|d6==6){
  res="六勃黑"
}
if(d1==6){
  res="遍地锦"
}
if(d4==6){
  res="六勃红"
}
if(d4==4&&d1==2){
  res="状元插金花"
}
if(res==""){
  res="什么都没摇到"
}
mutiresults[indexs]=res;
this.setData({
  index:this.data.index+1
  })
  indexs=this.data.index;
  mutiresults[indexs]=res;
  this.setData({
    mutiresult:mutiresults
    })
console.log(mutiresults[indexs]);
d1=0;
d2=0;
d3=0;
d4=0;
d5=0;
d6=0;
rankresults=rankresults+"玩家"+indexs+": "+res+"\n";
this.setData({
rankresult:this.data.rankresult+rankresults
})
rankresults=this.data.rankresult;
console.log(rankresults);
return res;

 },

 random(){
  var radd= Math.floor((Math.random()*6) + 1)
  return radd;
 },
display(num,psdd){
  
  var image="/image/dice1.png";
  if(num==1){
    
  }
  if(num==2){
    image="/image/dice2.png";
    
  }
  if(num==3){
    image="/image/dice3.png";
    
  }
  if(num==4){
    image="/image/dice4.png";
    
  }
  if(num==5){
    image="/image/dice5.png";
    
  }
  if(num==6){
    image="/image/dice6.png";
    
    
  }
  var tmp=this.data.dice;
  tmp[psdd]=image;
  
  this.setData({
    dice:tmp
  })
  
  
  
  setTimeout(() => {
    }, 1000)
},

handleShowModal(str) {
  var indexs=this.data.index;
  var usernums=app.usernum;
  var results=this.data.rankresult;
  console.log(indexs)
  console.log(usernums)
  wx.showModal({
    title: "玩家"+this.data.index+": "+str, //提示的标题
    
    content:this.data.poet[Math.floor((Math.random()*9) + 1)],
    success: function(res) {
      if(res.confirm) {
        console.log('用户点击了确定')
        if(indexs==usernums){
          app.globalData.userInfo=results;
          console.log(app.globalData.userInfo);
          wx.navigateTo({        //页面跳转
            url: '/pages/rank/rank',
          })
        }
      }
      if(res.cancel) {
        console.log('用户点击了取消')
      }
    }
  })
},



  
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(_options) {

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