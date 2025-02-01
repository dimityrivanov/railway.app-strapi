
const crontTasks = require("./cron");

export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  cron: {
    enabled: env.bool("CRON_ENABLED", true),
    tasks: crontTasks,
  },
  app: {
    keys: env.array('APP_KEYS'),
  },
  url: env('URL'),
  proxy: true
});
