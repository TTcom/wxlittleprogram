module.exports = {
  pages: [
    {
      path: "pages/index",
      config: {
        "navigationBarTitleText": "my-project"
      }
    },
    {
      path: "pages/list",
      config:{
        enablePullDownRefresh: true
      }
    },
    {
      path: "pages/counter"
    },
    {
      path: "packageA/logs",
      subPackage: true,
    }
  ],
  window: {
    backgroundTextStyle: 'dark',
    backgroundColor: '#fff',
    navigationBarBackgroundColor: '#F2F2F2',
    navigationBarTitleText: 'chat',
    navigationBarTextStyle: 'black'
  },
  usingComponents: {
    "van-tag": "/static/vant-weapp/lib/tag/index",
    "van-button": "/static/vant-weapp/lib/button/index"
  }
}
