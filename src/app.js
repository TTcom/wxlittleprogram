module.exports = {
  pages: [{
      path: "pages/index",
      config: {
        "navigationBarTitleText": "my-project"
      }
    },
    {
      path: "pages/list",
      config: {
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
  tabBar: {
    color: '#999',
    selectedColor: '#d22222',
    backgroundColor: '#fff',
    borderStyle: 'black',
    list: [
      {
        pagePath: 'pages/index',
        text: '首页',
        iconPath: 'static/assets/news.png',
        selectedIconPath: 'static/assets/news-active.png'
      },
      {
        pagePath: 'pages/counter',
        text: 'vuex',
        iconPath: 'static/assets/quanzi.png',
        selectedIconPath: 'static/assets/quanzi-active.png'
      }
    ]
  },
  usingComponents: {
    "van-tag": "/static/vant/tag/index",
    "van-button": "/static/vant/button/index",
  }
}
