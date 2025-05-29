import Koa from "koa";
import serve from "koa-static";
import path from 'path';
import { fileURLToPath } from 'url';
import router from "./routes/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = new Koa();

// ✅ 정적 파일은 먼저 처리 (index.html 포함)
app.use(serve(path.join(__dirname, 'public')));

// ✅ API 라우팅 (예: /api/hello)
app.use(router.routes()).use(router.allowedMethods());

app.listen(process.env.PORT || 8080);
