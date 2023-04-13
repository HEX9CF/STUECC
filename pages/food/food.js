// pages/food/food.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        title: `
    <br>
      <p style="text-align: center">
        <h2>干饭</h2>
      <p style="font-size: 12px">
人是铁饭是钢，一餐不吃饿得慌
      </p>
      </p>
    `,
    hr: `<br><hr><br>`,
    first: `
      <p style="text-align: center">
        <h3>一号食堂</h3>
      <p style="font-size: 12px">FIRST CANTEEN</p>
      </p>
    `,
    second: `
      <p style="text-align: center">
        <h3>二号食堂</h3>
      <p style="font-size: 12px">SECOND CANTEEN</p>
      </p>
    `,
    third: `
      <p style="text-align: center">
        <h3>三号食堂</h3>
      <p style="font-size: 12px">THIRD CANTEEN</p>
      </p>
    `,
    latitude: 23.413634,
    longitude: 116.837799,
    markers: [
      {
        id: 1,
        latitude:23.411831,
        longitude: 116.842685,
        name: '汕头大学东海岸校区第三食堂'
      },
      {
        id: 2,
        latitude: 23.412423,
        longitude: 116.841025,
        name: '汕头大学东海岸校区第二食堂'
      }
    ],
    },
  onReady: function (e) {
    this.mapCtx = wx.createMapContext('myMap')
  },
  includePoints: function () {
    this.mapCtx.includePoints({
      padding: [10],
      points: [
      {
        latitude:23.411831,
        longitude: 116.842685,
        // name: '汕头大学东海岸校区第三食堂'
      },
      {
        latitude: 23.412423,
        longitude: 116.841025,
        // name: '汕头大学东海岸校区第二食堂'
      }
    ]
    })
  }

})