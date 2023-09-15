// pages/traffic/traffic.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: `
    <br>
      <p style="text-align: center">
        <h2>交通出行</h2>
      <p style="font-size: 12px">
错过了眼前的这辆公交车，需要花更多时间再等下一班了
      </p>
      </p>
    `,
    hr: `<br><hr>`,
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
      <div style="margin:5%">
      <p style="text-align: center">
        <h3>公交路线</h3>
        <p style="font-size: 12px; text-align: center">来源：http://stuecc.stu.edu.cn/zhfw/jtzy.htm </p>
      </p>
      <p>目前，汕头市K3路公交途经两校区，该公交首末站为叠金工业区-汕头体育中心，票价为一票制2元，营运时间为: 6:00-22:00；另外，K9路公交车起于人民广场西，止于汕头大学东海岸校区，票价为一票制2元，运营时间为06:00-18:30；从人民广场西单向发班，到达汕头大学东海岸校区上下客后折返；203路公交车在东海岸校区设有站点，首末站为汕头市体育中心-澄海汽车客运站，票价为一票制3元，运营时间为7:00-19:00.</p>
      </div>
    `,
    shuttle: `
      <div style="margin:5%">
      <p style="text-align: center">
        <h3>桑浦山校区-东海岸校区<br>教职工班车线路及站点</h3>
        <p style="font-size: 12px; text-align: center">来源：http://stuecc.stu.edu.cn/zhfw/jtzy.htm </p>
      </p>
      <p>
    一、桑浦山校区——东海岸校区
<br>
桑浦山校区（校训碑前公交站）——大学路龙泉园宿舍（上
车点位于中国银行）——红树湾公交站（龙腾、红树湾、安
居教职工）——黄河路转泰山路天桥（泰山路辛厝寮西公交
站）——东海岸校区（初定 E 座教学楼前）
<br><br>
注：除两个校区首末站外，中途停靠点车辆靠站即停即走，请需乘车
教职工提前到站候车，凭校园一卡通乘车。
<br><br>
（中途站点预计到站时间：龙泉园宿舍：校训碑发车时间（T）+3 分
钟；红树湾站：T+10 分钟；辛厝寮西立交站：T+30 分钟。（具体到
达时间根据班次和路况会有所变动。）
<br><br>
二、东海岸校区——桑浦山校区
<br>
东海岸校区（初定 E 座教学楼前）——泰山路转黄河路天桥
（泰山路辛厝寮西公交站）——红树湾公交站（龙腾、红树
湾、安居教职工）——大学路龙泉园宿舍（下车点位于大学
路、X071 县道路口）——桑浦山校区（校训碑前公交站）
<br><br>
注：中途站点是否需要停车可咨询车上教职工，如无需求可不停车。
      </p>
      </div>
    `,
    bike: `
      <div style="margin:5%">
      <p style="text-align: center">
        <h3>自行车停放点</h3>
        <p style="font-size: 12px; text-align: center">来源：https://stuecc.stu.edu.cn/info/1041/1072.htm </p>
      </p>
      <p>
目前已设置自行车停放点：<br>
（1）学生宿舍D座和学生宿舍E座之间。<br>
（2）E座教学楼南楼中庭内（教105阶梯教室后面）。
      </p>
      </div>
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