// pages/traffic/traffic.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: `
    <br>
      <p style="text-align: center">
        <h2>交通</h2>
      <p style="font-size: 12px">
错过了眼前的这辆公交车，需要花更多时间再等下一班了
      </p>
      </p>
    `,
    hr: `<br><hr><br>`,
    latitude: 23.411472,
    longitude: 116.837035,
    markers: [
      {
        id: 1,
        latitude: 23.411472,
        longitude: 116.837035,
        name: '汕头大学东海岸校区公交站'
      },
    ],
    bus: `
      <p style="text-align: center">
        <h3>公交路线</h3>
      </p>
      <!--
      <p style="font-size: 12px; text-align: center">来源：http://stuecc.stu.edu.cn/zhfw/jtzy.htm </p>
      <p>    目前，途径汕头大学东海岸校区有K9路公交车，K9路公交车起于人民广场西，途经利安路-跃进路-新兴路-海滨路-金环路-中山路-衡山路-珠城路-海兴路-海滨路-泰星路-阿里山路-东海岸大道-五洲大道-翠峰路，止于汕头大学东海岸校区，票价为一票制2元。汕头公交K9路发车时间为06:00-18:30，从人民广场西单向发班，到达汕头大学东海岸校区上下客后折返。
      -->
      </p>
    `
  },
  onReady: function (e) {
    this.mapCtx = wx.createMapContext('myMap')
  },
  includePoints: function () {
    this.mapCtx.includePoints({
      padding: [10],
      points: [
      {
        latitude: 23.411472,
        longitude: 116.837035,
        // name: '汕头大学东海岸校区公交站'
      },
    ]
    })
  }
})