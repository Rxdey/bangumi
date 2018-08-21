const Router = require('koa-router');
const router = new Router();
const {
  find
} = require('../model/model')
router.get('/', async (ctx, next) => {
  let title = 'api'
  await ctx.render('index', {
    title
  })
});
router.get('/home', async (ctx, next) => {
  ctx.body = ctx.request.query;
});
router.get('/api/getList', async (ctx, next) => {
  let page = ctx.request.query.page;
  let search = ctx.request.query.search;
  let order = ctx.request.query.order;
  let pageSize = parseInt(ctx.request.query.pageSize);
  let type = ctx.request.query.type || 'desc';
  let start = (page - 1) * pageSize
  let list = await find({
    start: start,
    search: search,
    order: order,
    pageSize: pageSize,
    type: type
  })
  ctx.body = list
})

router.all('/api/getRank',async (ctx,next) => {
  let ranks = [
    { id:1, name:'洞洞1', score:1508},
    { id:2, name:'洞洞2', score:158},
    { id:3, name:'洞洞3', score:152},
    { id:4, name:'洞洞4', score:158},
    { id:5, name:'洞洞5', score:122},
    { id:6, name:'洞洞6', score:155},
    { id:7, name:'洞洞7', score:155},
    { id:8, name:'洞洞8', score:155},
    { id:9, name:'洞洞9', score:155},
    { id:10, name:'洞洞10', score:155},
    { id:10, name:'洞洞10', score:155},
    { id:10, name:'洞洞10', score:155},
    { id:10, name:'洞洞10', score:155},
    { id:10, name:'洞洞10', score:155},
    { id:10, name:'洞洞10', score:155},
    { id:10, name:'洞洞10', score:155},
    { id:10, name:'洞洞10', score:155},
    { id:10, name:'洞洞10', score:155},
    { id:10, name:'洞洞10', score:155},
    { id:10, name:'洞洞10', score:155},
    { id:10, name:'洞洞10', score:155},
  ]
  ctx.body = {
    data:ranks
  }
})


module.exports = router