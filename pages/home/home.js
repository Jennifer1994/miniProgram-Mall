import {
  getMultiData
} from '../../service/home.js'
Page({
  data: {
    banners: [],
    recommends: [],
    titles: ['流行','新款','精选']
  },
  onLoad: function () {
    //获取数据
    getMultiData().then(res => {
      // console.log(res);
      const banners = res.data.data.banner.list
      const recommends = res.data.data.recommend.list
      this.setData({
        banners,
        recommends
      })
    })
  }
})