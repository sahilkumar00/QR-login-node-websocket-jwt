const { networkInterfaces } = require("os");

const getIp = () =>
    Object.values(networkInterfaces())
        .flat()
        .find((i) => i.family == "IPv4" && !i.internal).address;
console.log("network",networkInterfaces());
module.exports = getIp;
