const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=32ITzAAa#St4bYzwSRyR2g-B0qmHchwYZdNHhEawy6xXXme8_hjM",
MONGODB: process.env.MONGODB || "mongodb://mongo:MnyPByJfjbrbMxVoNuxqchsTsVWHpTYk@junction.proxy.rlwy.net:56728",//enter mongo db url හදන විදිය පල්ලෙහාබටන් එකක් ඇති
};
