import axios from "axios";

const API_END_POINT = 'https://api.themoviedb.org/3';

const API_KEY = process.env["API_KEY"];

const reforwardRequest = async (ctx, next) => {
    const {originalUrl} = ctx;
    const url = `${API_END_POINT}${originalUrl}&api_key=${API_KEY}`;

    return await axios.get(url)
        .then(async (response) => {

            ctx.body = response.data;


            await next();
            return ctx;
        });
};

export default reforwardRequest;
