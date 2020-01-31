import Koa from 'koa';

import Router from "koa-router";
import cors from "@koa/cors";
import appRoutes from "./routes";

const router = new Router;

const app = new Koa();

app.use(appRoutes());

app.use(cors({"Access-Control-Allow-Origin": "localhost"}));

app.use(router.routes());

app.listen(3200);
