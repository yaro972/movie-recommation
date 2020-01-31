import Router from "koa-router";
import {reforwardRequest} from "../middleware";

const router = new Router;


router.get('/discover/movie', reforwardRequest);

export default router;
