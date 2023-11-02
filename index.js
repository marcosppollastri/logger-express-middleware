// simple-logger.js
export function simpleLogger(req, res, next) {
    const { headers, method, url } = req;
    const host = req.host;
    const queryParams = req.query;
    const body = req.body;

    console.log(`[SimpleLogger] Request to Host: ${host}`);
    console.log(`[SimpleLogger] Method: ${method} URL: ${url}`);
    console.log(`[SimpleLogger] Headers: ${JSON.stringify(headers)}`);
    console.log(`[SimpleLogger] Query Params: ${JSON.stringify(queryParams)}`);
    if (Object.keys(body).length > 0) {
        console.log(`[SimpleLogger] Body: ${JSON.stringify(body)}`);
    }

    next();
}