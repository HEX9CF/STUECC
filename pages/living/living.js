// pages/food/food.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        title: `
    <br>
      <p style="text-align: center">
        <h2>校园生活</h2>
      <p style="font-size: 12px">
        生活就像海洋，只有意志坚强的人才能到达彼岸
      </p>
      </p>
    `,
    hr: `<br><hr>`,
    canteen: `
      <div style="margin:5%">
      <p style="text-align: center">
        <h3>食堂</h3>
      </p>
      <p style="text-align: center">
第一食堂<br>
<br><br>
第二食堂<br>
<br><br>
第三食堂<br>
      </p>
      </div>
    `,
    dorm: `
      <div style="margin:5%">
      <p style="text-align: center">
        <h3>宿舍</h3>
        <p style="font-size: 12px; text-align: center">来源：https://stuecc.stu.edu.cn/zhfw/ssgy.htm </p>
      </p>
      <p>
        宿舍区共建有学生宿舍10座，房间数3485间，计划宿位数11394个。<br><br>
        学生宿舍楼均配备电梯，每间宿舍均配备了空调、独立卫生间、独立洗澡房、书柜、衣柜、学习桌椅等。
        </p>
        </div>
<img src="https://stuecc.stu.edu.cn/__local/E/68/95/C30B15D98F16435496E6012068E_CF3D31D2_FE30.jpg" style="width: 100%" mode="widthFix"></img>
    `,
        express: `
      <div style="margin:5%">
      <p style="text-align: center">
        <h3>快递</h3>
      </p>
      <p style="text-align: center">
校园综合服务中心（邮政快递点） <br>
位置：学生宿舍J座1楼<br><br>
收件地址<br>
广东省 汕头市 澄海区 凤翔街道<br>
翠峰路汕头大学东海岸校区<br>
        </p>
        </div>
<img src="https://stuecc.stu.edu.cn/__local/B/3E/94/C6C4E70FEBEB2B6BB58437F244C_B81AAF9A_17EEE.jpg" style="width: 100%" mode="widthFix"></img>
    `,
        hospital: `
      <div style="margin:5%">
      <p style="text-align: center">
        <h3>校医院</h3>
      </p>
      <p style="text-align: center">
东海岸校区校医院：学生宿舍B座2楼<br>
急诊电话：0754-86500120
      </p>
      </div>
    `,
    facility: `
      <div style="margin:5%">
      <p style="text-align: center">
        <h3>生活配套设施</h3>
        <p style="font-size: 12px; text-align: center">来源：https://stuecc.stu.edu.cn/zhfw/shpt.htm </p>
      </p>
      <p style="text-align: center">
超市<br>
第二食堂一楼西北侧<br>
<img src="https://stuecc.stu.edu.cn/__local/8/54/2E/FD05C0517A08B63341CE33EFC91_FE28D918_15EDA.jpg" style="width: 100%" mode="widthFix"></img>
<br><br>
水果店<br>
第二食堂旁，学生宿舍C座后靠近F座一侧<br>
<img src="https://stuecc.stu.edu.cn/__local/C/F5/CE/317C4135639717CB56633867456_59A29F77_14BCA.jpg" style="width: 100%" mode="widthFix"></img>
<br><br>
理发店<br>
第二食堂旁，靠近学海路与美华路交界一侧<br>
<img src="https://stuecc.stu.edu.cn/__local/3/DD/B4/7CD89B78E7D1162130AF28D45DE_89CDD619_2A352.jpg" style="width: 100%" mode="widthFix"></img>
<br><br>
ATM自助存取款一体机<br>
第二食堂旁，理发店对面<br>
<img src="https://stuecc.stu.edu.cn/__local/8/9F/2B/12E86936F526AD8DE138CEA2FDD_F23500BD_32E79.jpg" style="width: 100%" mode="widthFix"></img>
<br><br>
自助洗衣机与烘干机<br>
每个学生宿舍一楼<br>
<img src="https://stuecc.stu.edu.cn/__local/7/6A/4F/CD3732A73A3757CAB3833E30287_4B13C3C9_2062A.jpg" style="width: 100%" mode="widthFix"></img>
<br><br>
文印室<br>
第一食堂旁，靠近学海路与美华路交界一侧<br>
<img src="https://stuecc.stu.edu.cn/__local/2/80/B3/4BAF6AC6F998B50D2149D88BE2C_896D80FA_1C0DB.jpg" style="width: 100%" mode="widthFix"></img>
<br><br>
自助打印机<br>
学生宿舍一楼<br>
<img src="https://stuecc.stu.edu.cn/__local/0/1F/3B/F57D48865D7DF41958BE00064AE_7B6BF856_149CC.jpg" style="width: 100%" mode="widthFix"></img>
<br><br>
        </p>
        </div>
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