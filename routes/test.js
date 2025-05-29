import Router from 'koa-router';
const router = new Router();

router.get('/', async ctx => {
    ctx.body = [{ id: 1, name: 'test succuss' }];
});

router.get('/:id', async ctx => {
    ctx.body = { id: ctx.params.id, name: `test ${ctx.params.id} succuss` };
});

export default router;