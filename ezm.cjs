const { start: startXprofiler } = require("xprofiler");
const { start: startXtransit } = require("xtransit");

startXprofiler({
  log_dir: "/tmp/xprofiler",
  log_interval: 1000,
  log_level: 0,
  log_type: 0,
  log_format_alinode: false,
  enable_log_uv_handles: false,
  patch_http: false,
});
startXtransit({
  server: process.env.EZM_SERVER,
  appId: process.env.EZ_APP_ID,
  appSecret: process.env.EZ_APP_SECRET,
});
