// pages/misc/misc.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        title: `
    <br>
      <p style="text-align: center">
        <h2>其他</h2>
        <p style="font-size: 12px">
        生活就像海洋，只有意志坚强的人才能到达彼岸
        </p>
      </p>
    `,
        hr: `<br><hr><br>`,
        express: `
      <p style="text-align: center">
        <h3>快递</h3>
      </p>
      <p style="text-align: center">
邮政快递点：学生宿舍J座1楼<br>
收件地址：<br>广东省汕头市澄海区翠峰路汕头大学东海岸校区<br>
        </p>
    `,
        hospital: `
      <p style="text-align: center">
        <h3>校医院</h3>
      </p>
      <p style="text-align: center">
东海岸校区校医院：学生宿舍B座2楼<br>
急诊电话：0754-86500120
      </p>
    `,
    facility: `
      <p style="text-align: center">
        <h3>生活配套设施</h3>
      </p>
      <p style="text-align: center">
超市：第二食堂一楼西北侧<br>
理发店：第二食堂旁<br>
ATM自助存取款一体机：第二食堂旁<br>
自助洗衣机与烘干机：学生宿舍一楼<br>
自助打印机：学生宿舍一楼<br>
        </p>
    `,
    website: `
      <p style="text-align: center">
        <h3>智慧校园 常用网址</h3>
      <p style="font-size: 12px">需接入校园网</p>
      </p>
      <p style="text-align: center">
汕头大学主页<br>http://www.stu.edu.cn<br>宿舍管理系统<br>http://xg.stu.edu.cn<br>校内办公信息网<br>http://oa.stu.edu.cn<br>水电管理系统<br>http://power.stu.edu.cn<br>数字化教学平台<br>http://my.stu.edu.cn<br>宿舍报修系统<br>http://repair.stu.edu.cn<br>教务系统<br>http://jw.stu.edu.cn<br>预约中心<br>http://booking.stu.edu.cn<br>学生事务系统<br>http://xg.stu.edu.cn<br>互助学习中心<br>http://slc.stu.edu.cn<br>研究生事务系统<br>http://gs.stu.edu.cn<br>网络和一卡通服务<br>http://uptime.stu.edu.cn<br>图书馆资源<br>http://www.lib.stu.edu.cn<br>学校邮箱WEB版<br>http://m.stu.edu.cn<br>
      </p>
    `,
        tel: `
      <p style="text-align: center">
        <h3>东海岸校区常用办公电话一览表</h3>
      <p style="font-size: 8px">
来源：http://oa.stu.edu.cn/page/maint/template/news/newstemplateprotal.jsp?templatetype=1&templateid=3&docid=29873
      </p>
      </p>
<table align="center" border="1" cellpadding="0" cellspacing="0"
style="width:100%">
<tbody>
<tr>
<td style="width:15%;height:38px;">
<p align="center"> <strong><span
style="font-family:仿宋_gb2312;"><span
style="font-size:14.0pt;">单位</span></span></strong>
</p>
</td>
<td style="width:45%;height:38px;">
<p align="center"> <strong><span
style="font-family:仿宋_gb2312;"><span
style="font-size:14.0pt;">科室</span></span></strong>
</p>
</td>
<td style="width:40%;height:38px;">
<p align="center"> <strong><span
style="font-family:仿宋_gb2312;"><span
style="font-size:14.0pt;">电话</span></span></strong>
</p>
</td>
</tr>
<tr>
<td rowspan="12" style="width:203px;height:38px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;">校区服务电话</span></span>
</p>
</td>
<td style="width:201px;height:38px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;">校区报警电话</span></span>
</p>
</td>
<td style="width:206px;height:38px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;">86500110</span></span>
</p>
</td>
</tr>
<tr>
<td style="width:201px;height:38px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;">校区火警电话</span></span>
</p>
</td>
<td style="width:206px;height:38px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;">86500119</span></span>
</p>
</td>
</tr>
<tr>
<td style="width:201px;height:127px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;">校医院诊室、医护办公室、医生值班室、护士值班室</span></span>
</p>
</td>
<td style="width:206px;height:127px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;">86500120</span></span>
</p>
</td>
</tr>
<tr>
<td style="width:201px;height:49px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;">物业报修</span></span>
</p>
</td>
<td style="width:206px;height:49px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;">86500112</span></span>
</p>
</td>
</tr>
<tr>
<td style="width:201px;height:38px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;">资源报修</span></span>
</p>
</td>
<td style="width:206px;height:38px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;">86500113</span></span>
</p>
</td>
</tr>
<tr>
<td style="width:201px;height:38px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;">校园网报修</span></span>
</p>
</td>
<td style="width:206px;height:38px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;">86500115</span></span>
</p>
</td>
</tr>
<tr>
<td style="width:201px;height:38px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;">一卡通报修</span></span>
</p>
</td>
<td style="width:206px;height:38px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;">86500117</span></span>
</p>
</td>
</tr>
<tr>
<td style="width:201px;height:41px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;">多媒体教室管理</span></span>
</p>
</td>
<td style="width:206px;height:41px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;">86500118</span></span>
</p>
</td>
</tr>
<tr>
<td style="width:201px;height:49px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;">校区正门</span></span>
</p>
</td>
<td style="width:206px;height:49px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;">86500130</span></span>
</p>
</td>
</tr>
<tr>
<td style="width:201px;height:46px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;">体育场消防监控室</span></span>
</p>
</td>
<td style="width:206px;height:46px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;">86500131</span></span>
</p>
</td>
</tr>
<tr>
<td style="width:201px;height:50px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;"><span
style="color:black;">宿舍区消防监控室</span></span></span>
</p>
</td>
<td style="width:206px;height:50px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;"><span
style="color:black;">86500132</span></span></span>
</p>
</td>
</tr>
<tr>
<td style="width:201px;height:51px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;"><span
style="color:black;">教学区消防监控室</span></span></span>
</p>
</td>
<td style="width:206px;height:51px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;"><span
style="color:black;">86500133</span></span></span>
</p>
</td>
</tr>
<tr>
<td rowspan="10" style="width:203px;height:52px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;">东海岸校区管理委员会</span></span>
</p>
</td>
<td style="width:201px;height:52px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;"><span
style="color:black;">主任办公室</span></span></span>
</p>
</td>
<td style="width:206px;height:52px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;"><span
style="color:black;">86500108</span></span></span>
</p>
</td>
</tr>
<tr>
<td style="width:201px;height:96px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;"><span
style="color:black;">副主任办公室</span></span></span>
</p>
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;"><span
style="color:black;">（分管教学管理工作）</span></span></span>
</p>
</td>
<td style="width:206px;height:96px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;"><span
style="color:black;">86503180</span></span></span>
</p>
</td>
</tr>
<tr>
<td style="width:201px;height:38px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;"><span
style="color:black;">副主任办公室</span></span></span>
</p>
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;"><span
style="color:black;">（分管学生工作）</span></span></span>
</p>
</td>
<td style="width:206px;height:38px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;"><span
style="color:black;">86502179</span></span></span>
</p>
</td>
</tr>
<tr>
<td style="width:201px;height:38px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;"><span
style="color:black;">副主任办公室</span></span></span>
</p>
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;"><span
style="color:black;">（分管后勤保障工作）</span></span></span>
</p>
</td>
<td style="width:206px;height:38px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;"><span
style="color:black;">86502497</span></span></span>
</p>
</td>
</tr>
<tr>
<td style="width:201px;height:38px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;"><span
style="color:black;">副主任办公室</span></span></span>
</p>
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;"><span
style="color:black;">（分管安全保卫工作）</span></span></span>
</p>
</td>
<td style="width:206px;height:38px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;"><span
style="color:black;">86505835</span></span></span>
</p>
</td>
</tr>
<tr>
<td style="width:201px;height:38px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;">综合办公室</span></span>
</p>
</td>
<td style="width:206px;height:38px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;">86500181、86500182</span></span>
</p>
</td>
</tr>
<tr>
<td style="width:201px;height:38px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;"><span
style="color:black;">安全保卫办公室</span></span></span>
</p>
</td>
<td style="width:206px;height:38px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;"><span
style="color:black;">86500136</span><span
style="color:black;">、86500135</span></span></span>
</p>
</td>
</tr>
<tr>
<td style="width:201px;height:38px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;"><span
style="color:black;">教学管理办公室</span></span></span>
</p>
</td>
<td style="width:206px;height:38px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;"><span
style="color:black;">86500161</span>、86500162</span></span>
</p>
</td>
</tr>
<tr>
<td style="width:201px;height:38px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;"><span
style="color:black;">学生工作办公室</span></span></span>
</p>
</td>
<td style="width:206px;height:38px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;"><span
style="color:black;">86500190</span></span></span>
</p>
</td>
</tr>
<tr>
<td style="width:201px;height:38px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;"><span
style="color:black;">后勤保障办公室</span></span></span>
</p>
</td>
<td style="width:206px;height:38px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;"><span
style="color:black;">86500171、86500172、86500173</span></span></span>
</p>
</td>
</tr>
<tr>
<td rowspan="2" style="width:203px;height:38px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;"><span
style="color:black;">学生处</span></span></span>
</p>
</td>
<td style="width:201px;height:38px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;">F座心理咨询办公室</span></span>
</p>
</td>
<td style="width:206px;height:38px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;">86503944</span></span>
</p>
</td>
</tr>
<tr>
<td style="width:201px;height:38px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;">F座心理咨询咨询室</span></span>
</p>
</td>
<td style="width:206px;height:38px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;">86503380</span></span>
</p>
</td>
</tr>
<tr>
<td style="width:203px;height:38px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;"><span
style="color:black;">文学院</span></span></span>
</p>
</td>
<td style="width:201px;height:38px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;"><span
style="color:black;">F</span><span
style="color:black;">座辅导员办公室</span></span></span>
</p>
</td>
<td style="width:206px;height:38px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;"><span
style="color:black;">86500215</span><span
style="color:black;">、86500216</span></span></span>
</p>
</td>
</tr>
<tr>
<td style="width:203px;height:38px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;"><span
style="color:black;">理学院</span></span></span>
</p>
</td>
<td style="width:201px;height:38px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;"><span
style="color:black;">D</span><span
style="color:black;">座辅导员办公室</span></span></span>
</p>
</td>
<td style="width:206px;height:38px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;"><span
style="color:black;">86500225、86500226、86500228、86502372</span></span></span>
</p>
</td>
</tr>
<tr>
<td style="width:203px;height:38px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;"><span
style="color:black;">工学院</span></span></span>
</p>
</td>
<td style="width:201px;height:38px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;"><span
style="color:black;">C</span><span
style="color:black;">座辅导员办公室</span></span></span>
</p>
</td>
<td style="width:206px;height:38px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;"><span
style="color:black;">86500235、86500236、86500237、86500238</span>、86500239</span></span>
</p>
</td>
</tr>
<tr>
<td style="width:203px;height:38px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;"><span
style="color:black;">商学院</span></span></span>
</p>
</td>
<td style="width:201px;height:38px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;"><span
style="color:black;">D</span><span
style="color:black;">座辅导员办公室</span></span></span>
</p>
</td>
<td style="width:206px;height:38px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;"><span
style="color:black;">86500246、86500247、86502611</span></span></span>
</p>
</td>
</tr>
<tr>
<td style="width:203px;height:38px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;"><span
style="color:black;">法学院/公共卫生学院</span></span></span>
</p>
</td>
<td style="width:201px;height:38px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;"><span
style="color:black;">E</span><span
style="color:black;">座辅导员办公室</span></span></span>
</p>
</td>
<td style="width:206px;height:38px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;"><span
style="color:black;">86500255</span></span></span>
</p>
</td>
</tr>
<tr>
<td style="width:203px;height:38px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;"><span
style="color:black;">法学院</span></span></span>
</p>
</td>
<td style="width:201px;height:38px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;"><span
style="color:black;">E</span><span
style="color:black;">座辅导员办公室</span></span></span>
</p>
</td>
<td style="width:206px;height:38px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;"><span
style="color:black;">86500256</span><span
style="color:black;">、86503922</span></span></span>
</p>
</td>
</tr>
<tr>
<td style="width:203px;height:38px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;"><span
style="color:black;">长江新闻与传播学院</span></span></span>
</p>
</td>
<td style="width:201px;height:38px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;"><span
style="color:black;">F</span><span
style="color:black;">座辅导员办公室</span></span></span>
</p>
</td>
<td style="width:206px;height:38px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;"><span
style="color:black;">86500265</span></span></span>
</p>
</td>
</tr>
<tr>
<td style="width:203px;height:38px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;"><span
style="color:black;">长江艺术与设计学院</span></span></span>
</p>
</td>
<td style="width:201px;height:38px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;"><span
style="color:black;">F</span><span
style="color:black;">座辅导员办公室</span></span></span>
</p>
</td>
<td style="width:206px;height:38px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;"><span
style="color:black;">86500275</span></span></span>
</p>
</td>
</tr>
<tr>
<td style="width:203px;height:38px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;"><span
style="color:black;">公共卫生学院</span></span></span>
</p>
</td>
<td style="width:201px;height:38px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;"><span
style="color:black;">E</span><span
style="color:black;">座辅导员办公室</span></span></span>
</p>
</td>
<td style="width:206px;height:38px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;"><span
style="color:black;">86500285</span></span></span>
</p>
</td>
</tr>
<tr>
<td style="width:203px;height:38px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;"><span
style="color:black;">医学院</span></span></span>
</p>
</td>
<td style="width:201px;height:38px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;"><span
style="color:black;">E</span><span
style="color:black;">座辅导员办公室</span></span></span>
</p>
</td>
<td style="width:206px;height:38px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;"><span
style="color:black;">86500295、86500296、86500297、86500298</span></span></span>
</p>
</td>
</tr>
<tr>
<td rowspan="5" style="width:203px;height:38px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;">物业公司</span></span>
</p>
</td>
<td style="width:201px;height:38px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;"><span
style="color:black;">物业办公室</span></span></span>
</p>
</td>
<td style="width:206px;height:38px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;"><span
style="color:black;">86500140</span></span></span>
</p>
</td>
</tr>
<tr>
<td style="width:201px;height:38px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;"><span
style="color:black;">C</span><span
style="color:black;">座物业值班室</span></span></span>
</p>
</td>
<td style="width:206px;height:38px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;"><span
style="color:black;">86500143</span></span></span>
</p>
</td>
</tr>
<tr>
<td style="width:201px;height:38px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;"><span
style="color:black;">D</span><span
style="color:black;">座物业值班室</span></span></span>
</p>
</td>
<td style="width:206px;height:38px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;"><span
style="color:black;">86500144</span></span></span>
</p>
</td>
</tr>
<tr>
<td style="width:201px;height:38px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;"><span
style="color:black;">E</span><span
style="color:black;">座物业值班室</span></span></span>
</p>
</td>
<td style="width:206px;height:38px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;"><span
style="color:black;">86500145</span></span></span>
</p>
</td>
</tr>
<tr>
<td style="width:201px;height:38px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;"><span
style="color:black;">F</span><span
style="color:black;">座物业值班室</span></span></span>
</p>
</td>
<td style="width:206px;height:38px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;"><span
style="color:black;">86500146</span></span></span>
</p>
</td>
</tr>
<tr>
<td rowspan="4" style="width:203px;height:38px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;">校医院</span></span>
</p>
</td>
<td style="width:201px;height:38px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;"><span
style="color:black;">保健科</span></span></span>
</p>
</td>
<td style="width:206px;height:38px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;"><span
style="color:black;">86500124</span></span></span>
</p>
</td>
</tr>
<tr>
<td style="width:201px;height:38px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;"><span
style="color:black;">校医院药房</span></span></span>
</p>
</td>
<td style="width:206px;height:38px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;"><span
style="color:black;">86500125</span></span></span>
</p>
</td>
</tr>
<tr>
<td style="width:201px;height:38px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;"><span
style="color:black;">校医院导诊</span></span></span>
</p>
</td>
<td style="width:206px;height:38px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;"><span
style="color:black;">86500126</span></span></span>
</p>
</td>
</tr>
<tr>
<td style="width:201px;height:38px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;"><span
style="color:black;">校医院行政办公室</span></span></span>
</p>
</td>
<td style="width:206px;height:38px;">
<p align="center"> <span style="font-size:18px;"><span
style="font-family:仿宋_gb2312;"><span
style="color:black;">86500127</span></span></span>
</p>
</td>
</tr>
</tbody>
</table>
`
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})