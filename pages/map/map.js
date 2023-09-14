Page({
  data: {
    title: `
    <br>
      <p style="text-align: center">
        <h2>校区地图</h2>
      <p style="font-size: 12px">
你有地图吗？我在你心里迷路了
      </p>
      </p>
    `,
    hr: `<br><hr>`,
    latitude: 23.413634,
    longitude: 116.837799,
    markers: [
      {
        id: 1,
        latitude: 23.413634,
        longitude: 116.837799,
        name: '汕头大学(东海岸校区)'
      },
      {
        id: 2,
        latitude:23.411831,
        longitude: 116.842685,
        name: '汕头大学东海岸校区第三食堂'
      },
      {
        id: 3,
        latitude: 23.411472,
        longitude: 116.837035,
        name: '汕头大学东海岸校区公交站'
      },
      {
        id: 4,
        latitude: 23.412423,
        longitude: 116.841025,
        name: '汕头大学东海岸校区第二食堂'
      },
      {
        id: 5,
        latitude: 23.411702,
        longitude: 116.837567,
        name: '汕头大学东海岸校区南校门'
      },
      {
        id: 6,
        latitude: 23.412937,
        longitude: 116.838726,
        name: '汕头大学东海岸校区图书馆'
      },
      {
        id: 7,
        latitude: 23.412847,
        longitude: 116.837107,
        name: '汕头大学东海岸校区E栋教学楼'
      },
      {
        id: 8,
        latitude: 23.409524,
        longitude: 116.845117,
        name: '亚青会体育中心'
      },
      {
        id: 9,
        latitude: 23.409430,
        longitude: 116.843323,
        name: '亚青会场馆田径训练场'
      }
    ],
    // covers: [{
    //   latitude: 23.411702,
    //   longitude: 116.837567,
    //   iconPath: '/image/location.png'
    // }]
  },
  onReady: function (e) {
    this.mapCtx = wx.createMapContext('myMap')
  },
  getCenterLocation: function () {
    this.mapCtx.getCenterLocation({
      success: function (res) {
        console.log(res.longitude)
        console.log(res.latitude)
      }
    })
  },
  moveToLocation: function () {
    this.mapCtx.moveToLocation()
  },
  translateMarker: function () {
    this.mapCtx.translateMarker({
      markerId: 1,
      autoRotate: true,
      duration: 1000,
      destination: {
        latitude: 23.413634,
        longitude: 116.837799,
      },
      animationEnd() {
        console.log('animation end')
      }
    })
  },
  includePoints: function () {
    this.mapCtx.includePoints({
      padding: [10],
      points: [
      {
        latitude: 23.413634,
        longitude: 116.837799,
        // name: '汕头大学(东海岸校区)'
      },
      {
        latitude: 23.411472,
        longitude: 116.837035,
        // name: '汕头大学东海岸校区公交站'
      },
      {
        latitude: 23.411702,
        longitude: 116.837567,
        // name: '汕头大学东海岸校区南校门'
      },
      {
        latitude: 23.412937,
        longitude: 116.838726,
        // name: '汕头大学东海岸校区图书馆'
      },
      {
        latitude: 23.412847,
        longitude: 116.837107,
        // name: '汕头大学东海岸校区E栋教学楼'
      }
    ]
    })
  }
})
