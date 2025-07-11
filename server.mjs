import { createServer } from "http";
import { parse } from "url";
import next from "next";

import { start as startXprofiler } from "xprofiler";
import { start as startXtransit } from "xtransit";

startXprofiler();
startXtransit({
  server: process.env.EZM_SERVER,
  appId: process.env.EZM_APP_ID,
  appSecret: process.env.EZM_APP_SECRET,
});

const port = parseInt(process.env.PORT || "3000", 10);
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(port);

  console.log(
    `> Server listening at http://localhost:${port} as ${
      dev ? "development" : process.env.NODE_ENV
    }`,
  );
});
