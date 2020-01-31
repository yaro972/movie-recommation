import discoverRouter from "./discover.route";
import movieRouter from "./movie.route";
import combineRouters from "koa-combine-routers";


const router = combineRouters(
    discoverRouter,
    movieRouter
);

export default router;
