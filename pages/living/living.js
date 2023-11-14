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
<br/><br/>
<img src="https://stuecc.stu.edu.cn/__local/E/68/95/C30B15D98F16435496E6012068E_CF3D31D2_FE30.jpg" style="width: 100%" />
        </p>
        </div>
    `,
        express: `
      <div style="margin:5%">
      <p style="text-align: center">
        <h3>快递</h3>
      </p>
      <p style="text-align: center">
<h4> 校园综合服务中心（邮政快递点） </h4><br>
位置：学生宿舍J座1楼<br><br>
收件地址<br>
广东省 汕头市 澄海区 凤翔街道<br>
翠峰路汕头大学东海岸校区<br>
<br><br>
<h4>汕头大学东海岸校区菜鸟驿站</h4>
<p style="font-size: 12px; text-align: center">来源：菜鸟APP</p>
<br>
驿站地址<br>
凤翔街道汕头东海岸新城塔岗围片区<br>
汕大东海岸校区生活区学生宿舍10栋<br>
<br>
营业时间：周一至周日 10:00-20:00
        </p>
        </div>
<img src="https://stuecc.stu.edu.cn/__local/B/3E/94/C6C4E70FEBEB2B6BB58437F244C_B81AAF9A_17EEE.jpg" style="width: 100%" />
    `,
        hospital: `
      <div style="margin:5%">
      <p style="text-align: center">
        <h3>校医院</h3>
      </p>
      <p style="text-align: center">
        急诊电话：0754-86500120
      </p>
      </div>
    `,
        stadium: `
        <div style="margin:5%">
        <p style="text-align: center">
            <h3>体育场馆</h3>
            <p style="font-size: 12px; text-align: center">来源：https://stuecc.stu.edu.cn/zhfw/tycg.htm</p>
        </p>
        <p style="text-align: center">
体育场馆（亚青会主场馆）用地面积约 365 亩，建筑面积约 14.60 万平方米，包括1座2.2万座位体育场、一座8000座位体育馆，以及会议中心、训练场、训练馆等配套设施。2022年秋季学期，东海岸校区使用了体育场馆区的室外田径训练场，主要使用于田径、足球、体能训练、健跑等体育课或者体育锻炼，以及学生体能测试等方面。另外，在学生宿舍区设有室外灯光篮球场、网球场和排球场等。 
<br/><br/>
<h4>室外田径训练场</h4>
<p style="font-size: 12px; text-align: center">来源：https://stuecc.stu.edu.cn/info/1027/1332.htm</p>
<br/>
开放时间：每天6:30-21:30
<br/><br/>
优先用于体育课教学、田径队训练、举办体育比赛使用，其余时间供师生课外锻炼。
<br/><br/>
如遇恶劣天气、场地管养需要，及体育中心举办大型活动，室外田径训练场将暂停开放。
<br/><br/>
全体师生使用校园一卡通刷卡方式进出室外田径训练场。
<br/><br/>
<img src="https://stuecc.stu.edu.cn/__local/8/9C/91/3B24E502BA85F57FAAD4DE951C1_5C7638A2_C49BC.png" style="width: 100%" />
<br/><br/>
<h4>室外灯光篮球场</h4>
<p>第三饭堂对面</p>
<img src="https://stuecc.stu.edu.cn/__local/F/B6/0F/92FCD7F56C93098C932C815D2D7_6FBCA03E_19078.jpg" style="width: 100%" />
<br/><br/>
<h4>网球场</h4>
<p>第三饭堂对面</p>
<img src="https://stuecc.stu.edu.cn/__local/7/9B/E8/AE466897E4ECA358CC60E101CA2_FD12F6F1_14B98.jpg" style="width: 100%" />
<br/><br/>
<h4>排球场</h4>
<p>第三饭堂对面</p>
<img src="https://stuecc.stu.edu.cn/__local/F/76/6F/BA41161667F02CA54BB859FE659_0D366632_18EFB.jpg" style="width: 100%" />
        </p>
        </div>
    `,
    facility: `
      <div style="margin:5%">
      <p style="text-align: center">
        <h3>生活配套设施</h3>
        <p style="font-size: 12px; text-align: center">来源：https://stuecc.stu.edu.cn/zhfw/shpt.htm</p>
      </p>
      <p style="text-align: center">
<h4>超市</h4>
第二食堂一楼西北侧<br>
<img src="https://stuecc.stu.edu.cn/__local/8/54/2E/FD05C0517A08B63341CE33EFC91_FE28D918_15EDA.jpg" style="width: 100%" />
<br><br>
<h4>水果店</h4>
第二食堂旁，学生宿舍C座后靠近F座一侧<br>
<img src="https://stuecc.stu.edu.cn/__local/C/F5/CE/317C4135639717CB56633867456_59A29F77_14BCA.jpg" style="width: 100%" />
<br><br>
<h4>理发店</h4>
第二食堂旁，靠近学海路与美华路交界一侧<br>
<img src="https://stuecc.stu.edu.cn/__local/7/6A/4F/CD3732A73A3757CAB3833E30287_4B13C3C9_2062A.jpg" style="width: 100%" />
<br><br>
<h4>ATM自助存取款一体机</h4>
第二食堂旁，理发店对面<br>
<img src="https://stuecc.stu.edu.cn/__local/3/DD/B4/7CD89B78E7D1162130AF28D45DE_89CDD619_2A352.jpg" style="width: 100%" />
<br><br>
<h4>自助洗衣机与烘干机</h4>
每个学生宿舍一楼<br>
<img src="https://stuecc.stu.edu.cn/__local/8/9F/2B/12E86936F526AD8DE138CEA2FDD_F23500BD_32E79.jpg" style="width: 100%" />
<br><br>
<h4>文印室</h4>
第一食堂旁，靠近学海路与美华路交界一侧<br>
<img src="https://stuecc.stu.edu.cn/__local/2/80/B3/4BAF6AC6F998B50D2149D88BE2C_896D80FA_1C0DB.jpg" style="width: 100%" />
<br><br>
<h4>自助打印机</h4>
学生宿舍一楼<br>
<img src="https://stuecc.stu.edu.cn/__local/0/1F/3B/F57D48865D7DF41958BE00064AE_7B6BF856_149CC.jpg" style="width: 100%" />
<br><br>
</p>
</div>
    `,
  }
})