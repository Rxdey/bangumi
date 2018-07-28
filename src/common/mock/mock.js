import Mock from 'mockjs';
let Random = Mock.Random
Mock.setup({
  timeout: '800' // 表示响应时间介于 200 和 600 毫秒之间，默认值是'10-100'。
})
// 登录
Mock.mock('/login', (req, res) => {
  return {
    data: {token:Random.string(32),userId:123},
    code: '0000',
    message:'登录',
    state:1
  }
})
// 获取验证码
Mock.mock('/getVerificationCode', (req, res) => {
  return {
    data: 1,
    code: '0000',
    message:'获取成功'
  }
})
// 手机号唯一
Mock.mock('/isSigle', (req, res) => {
  return {
    data: 1,
    code: '0000',
    message:'获取成功',
    state:1
  }
})
// 是否老代理
Mock.mock('/isOld', (req, res) => {
  return {
    data:{token:Random.string(32)},
    code: '0000',
    message:'已存在',
    state:0   //0不存在 1 存在 2不匹配
  }
})
// 提交注册or激活信息
Mock.mock('/subUserInfo', (req, res) => {
  return {
    data:{token:Random.string(32)},
    code: '0000',
    message:'注册成功',
    state:1
  }
})
// 重置手机or密码
Mock.mock('/resetPasswd', (req, res) => {
  return {
    data: Random.string(10),
    code: '0000',
    message:'已重置'
  }
})
//getHome
Mock.mock('/getHome',{
  data: {
    "slideList|4":[
      {"order|+1":1,url:()=>Random.dataImage(),forwardUrl:'/'}
    ], // 轮播图
    "hotProdList|3":[
      {
        "prodCode|+1":1,
        prodName:() => Random.csentence(5, 8),
        prodPrice:200,
        prodUrl:()=>Random.dataImage(), // 产品图片地址
        prodVAL:123, // 产品销量
        prodPropaganda:() => Random.csentence(5, 8), // 产品宣传语
        
      }
    ] // 热销产品列表
  },
  code: '0000',
  message:'获取成功',
  state:1
})


// 订单列表
Mock.mock('/orderList', {
  code: '0000',
  // "data|5": [{
  //   "orderId|+1": 1,
  //   name: () => Random.csentence(5, 8),
  //   createDate: () => Random.date('yyyy-MM-dd H:m:s'),
  //   startDate: () => Random.date('yyyy/MM/dd'),
  //   endDate: () => Random.date('yyyy/MM/dd'),
  //   userName: () => Random.cname(),
  //   'prize|1-100.2': 1
  // }]
  data:{
    "orderList|6":[
     {
      'orderCode|+1':1001,
      prodName:() => Random.csentence(5, 8),
      'premium|50-500.2':1,
      policyHolder:() => Random.cname(),
      orderTime:() => Random.date('yyyy-MM-dd H:m:s'),
      startDate:() => Random.date('yyyy/MM/dd'),
      endDate:() => Random.date('yyyy/MM/dd'),
      payStatus:0, // 订单状态
      payEndTime:() => Random.date('yyyy/MM/dd'),
     }
    ]
  },
  code: '0000',
  message:'获取成功',
  state:1
})
Mock.mock('/removeOrder',{
  code: '0000',
  message:'取消成功',
  state:1,
  data:{}
})
Mock.mock('/clientOrderList', {
  code: '0000',
  "data|5": [{
    "orderId|+1": 1,
    name: () => Random.csentence(5, 8),
    createDate: () => Random.date('yyyy-MM-dd H:m:s'),
    startDate: () => Random.date('yyyy/MM/dd'),
    endDate: () => Random.date('yyyy/MM/dd'),
    userName: () => Random.cname(),
    'prize|1-100.2': 1
  }]
})
// 我的团队列表 or 详情
Mock.mock('/groupList', {
  code: '0000',
  data: {
    "teamList|5":[{
      phone: 13588888888,
      "userId|+1":1,
      userName: () => Random.cname(5, 8),
      sex: () => Random.boolean(),
      age: () => 21,
      status: () => Random.boolean(),
      joinTime: () => Random.date('yyyy-MM-dd'),
      email:()=>Random.email(),
      headImg:()=>Random.dataImage(),
      dateBirth:()=>Random.date('yyyy/MM/dd'),
      IDCard:"5118888888888888",
      city:"北京市朝阳区",
      address:"北京市朝阳区北京市朝阳区北京市朝阳区北京市朝阳区",
      email:'emai@qq.com'
    }]
  }
})
//  我的客户列表 or 详情
Mock.mock('/clientList', {
  code: '0000',
  message:'success',
  "data|3": [{
    "customerId|+1": 1,
    userName: () => Random.cname(5, 8),
    createDate: () => Random.date('yyyy-MM-dd'),
    birthday: () => Random.date('yyyy-MM-dd'),
    sex: () => Random.boolean(),
    age: () => 21,
    phone: 13566666666,
    address: '四川省成都市',
    orderCity: '四川省xx市',
    email: '13245@qq.com',
    docType: '身份证',
    docNo: '155448545445545455',
  }]
})
// 个人中心
Mock.mock('/userCenter', {
  code: '0000',
  data: {
    // id: 1,
    userName: Random.csentence(5, 8),
    phone: '13800138000',
    headimage: Random.dataImage(), // 头像
    userCode: 88559, // id
    isPro: Random.boolean(), // 是否认证
    ydayPremium:200, // 昨日保费
    customerNum:5, // 我的客户
    teamNum:10,  // 我的团队
  }
})
// 业务员信息
Mock.mock('/salesmanInfo', {
  code: '0000',
  data: {
    userCode: 1,
    userName: Random.csentence(5, 8),
    phone: '13800138000',
    deptCName: Random.csentence(5, 8), // 机构
    addressCName: '四川投资大厦1楼' // 网点
  }
})
// 个人代理信息
Mock.mock('/getUserInfo', {
  code: '0000',
  data: {
    phone: '13800138000',
    userName: Random.csentence(5, 8),
    IDCard:'511022222222222222',
    bankName: '中国银行',
    bankCardNo: '62222522525525555552',
    email: '125848@qq.com',
    city: ['四川省','成都市','--'],
    address: '四川省成都市高新区',
    occupation: ['医生'],
    education: ['本科'],
  }
})
// 个人代理信息
Mock.mock('/updateUserInfo', {
  code: '0000',
  data: {},
  message:'保存成功'
})

Mock.mock('/getProduct', {
  code: '0000',
  data: {
    // tag: '1',
    // "productId|+1": 1,
    // name: () => Random.csentence(5, 8),
    // desc: () => Random.csentence(5, 8),
    // headimage: () => Random.dataImage(), // 
    // 'prize|1-100.2': 1
    userInfo:{
      userName:()=>Random.cname(),
      phone:()=>'15988888888',
      headImg:()=>Random.dataImage('100x100'),
      certificateUrl:'/home',
      certificateNum:'13588855'
    },
    'prodList|3':[
      {
        'prodCode|+1':1000,
         prodName:()=>Random.csentence(5,10),
         'prodPrice|100-200.2':1000,
         prodUrl:()=>Random.dataImage(),
         prodVAL:88,
         prodPropaganda:()=>Random.csentence(5,16)
      }
    ],
  }
})
// 订单详情
Mock.mock('/getOrderDetail', {
  code: '0000',
  data: {
    // orderId: 'T134568875',
    // orderDate: '2018-05-01 21:11:22',
    // BdNum: 'D134568875',
    // name: '交通意外险',
    // user: '张三三',
    // phone: '15988998899',
    // createDate: '2018/04/01',
    // endDate: "2019/05/01",
    // stutas: '承保中',
    // prize: '266.00',
    // payDate: '2018-05-01 12:35:04'
    'orderCode|+1':1001,
     prodName:Random.csentence(5, 8),  // 订单名
     'premium|200-500.2':1,
     policyHolder:1001, // 投保人
     phone:'13522222222',
     orderTime:Random.date('yyyy/MM/dd'), // 订单时间
     startDate:Random.date('yyyy/MM/dd'),
     endDate:Random.date('yyyy/MM/dd'),
     payTime:Random.date('yyyy/MM/dd'), // 支付时间
     policyNo:1001, // 保单号
     PolicyStatus:1, // 保单状态 1未起保 2承保中3已终保4已退保
     payStatus:1,  // 支付状态 // 1可支付  0不可支付
     'orderType|1-5':1, //1待支付，2支付中，3支付失败，4已取消，5已完成
  }
})
Mock.mock('/removeOrder', {
  code: '0000',
  data:{},
  message:'已取消订单',
  state:1
})
Mock.mock('/getQuestion', {
  code: '0000',
  'data|10': [{
    question: () => Random.csentence(5, 20),
    answers: {
      a: () => Random.csentence(5, 10),
      b: () => Random.csentence(5, 10),
      c: () => Random.csentence(5, 10),
      d: () => Random.csentence(5, 10)
    }
  }]
})
Mock.mock('/postAnswer', {
  code: '0000',
  data: '',
  message: 'success'
})
Mock.mock('/getProductDetail', {
  code: '0000',
  data: {
    prodCode:1234,  // 产品代码
    prodName:Random.csentence(5, 10), // 产品名
    'prodPrice|100-200.2':1,  // 价格
    prodUrl:()=>Random.dataImage(), // 图片地址
    prodVAL:1234, // 销量
    prodPropaganda:Random.csentence(5, 10),  // 宣传语
    prodIntroduce:Random.csentence(5, 10),  // 介绍
    prodContent:1234,
    claimService:1234,
    productClauseList:[
      {
        clauseCode:955555,
        clauseName:Random.csentence(5, 10),
        clauseUrl:'#'
      }
    ],
  },
  message: 'success'
})
