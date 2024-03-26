import dotenv from "dotenv";

dotenv.config({
});
/* eslint no-process-env:0 */
export default environment = {
    env: process.env.env,
    url: process.env.url,
    apiUrl: process.env.apiUrl,
    logLevel: process.env.logLevel,

    db: {
        host: process.env.MONGO_URI,
        port: process.env.db_port
    }
};