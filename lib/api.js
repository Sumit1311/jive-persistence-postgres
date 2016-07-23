var uuid = require('node-uuid');
var logger = require("log4js").getLogger("postgres-persistence");
logger.setLevel(process.env['logging_level'] || 'INFO');


exports.guid = function () {
    return uuid.v4();
}

exports.logger = logger;