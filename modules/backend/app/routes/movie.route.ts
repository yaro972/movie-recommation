import Router from "koa-router";
import {reforwardRequest} from "../middleware";

const router = new Router;

router.get('/movie/:id', reforwardRequest);

router.get('/movie/:id/recommandations', reforwardRequest);

export default router;
