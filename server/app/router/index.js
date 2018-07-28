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


module.exports = router