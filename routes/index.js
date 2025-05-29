import Router from 'koa-router';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const router = new Router({
    prefix: '/api', // 모든 하위 라우트를 /api 로 시작
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const files = fs.readdirSync(__dirname).filter(file =>
    file !== 'index.js' && file.endsWith('.js')
);

for (const file of files) {
    const routeModule = await import(`./${file}`);
    const routeName = `/${path.basename(file, '.js')}`;
    router.use(routeName, routeModule.default.routes(), routeModule.default.allowedMethods());
}

export default router;
