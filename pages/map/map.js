Page({
  data: {
    title: `
    <br>
      <p style="text-align: center">
        <h2>东海岸校区 校园地图</h2>
      </p>
    `,
    hr:`<br><hr><br>`,
    latitude: 23.413634,
    longitude: 116.837799,
    markers: [{
      id: 1,
      latitude: 23.413634,
      longitude: 116.837799,
      name: '汕头大学(东海岸校区)'
    }],
    covers: [{
      latitude: 23.411702,
      longitude: 116.837567,
      iconPath: '/image/location.png'
    }]
  },
  onReady: function (e) {
    this.mapCtx = wx.createMapContext('myMap')
  },
  getCenterLocation: function () {
    this.mapCtx.getCenterLocation({
      success: function(res){
        console.log(res.longitude)
        console.log(res.latitude)
      }
    })
  },
  moveToLocation: function () {
    this.mapCtx.moveToLocation()
  },
  translateMarker: function() {
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
  includePoints: function() {
    this.mapCtx.includePoints({
      padding: [10],
      points: [{
        latitude: 23.413634,
        longitude: 116.837799,
      }, {
      latitude: 23.411702,
      longitude: 116.837567,
      }]
    })
  }
})
