const Koa = require('koa');
const path = require('path')
const bodyParser = require('koa-bodyparser')
const router = require('./app/router/index.js')
const cors = require('koa2-cors')
const static = require('koa-static')
const session = require('koa-session-minimal')
const views = require('koa-views')
const multer = require('koa-multer')

const colors = require('colors')

const app = new Koa();

// 静态资源
const staticPath = './app/static'

const upload = multer({ dest: path.join(__dirname,'./app/static/upload/') })
app
  .use(bodyParser())
  .use(views(path.join(__dirname, './app/view/page'), {
    extension: 'ejs'
  }))  
  .use(cors(
    {
 origin: function (ctx) {
         if (ctx.url === '/test') {
             return "*"; // 允许来自所有域名请求
         }
         return 'http://localhost:8081';// 这样就能只允许 http://localhost:8080 这个域名的请求了
     },
     exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
     maxAge: 5,
     credentials: true,
     allowMethods: ['GET', 'POST', 'DELETE','OPTIONS'],
     allowHeaders: ['Content-Type', 'Authorization', 'Accept','token'],
 }
   ))
  .use(static(path.join(__dirname, staticPath)))
  .use(session({
    key: 'SESSION-ID', // cookie 中存储 session-id 时的键名, 默认为 koa:sess
    cookie: { // 与 cookie 相关的配置
      maxAge: '', // cookie有效时长
      expires: '', // cookie失效时间
      path: '', // 写cookie所在的路径
      domain: '', // 写cookie所在的域名
      httpOnly: '', // 是否只用于http请求中获取
      overwrite: '', // 是否允许重写
      secure: '',
      sameSite: '',
      signed: '',
    }
  }))
  .use(router.routes())
  .use(router.allowedMethods())


console.log(`server start at http://localhost:3000/`.green)
app.listen(3000);