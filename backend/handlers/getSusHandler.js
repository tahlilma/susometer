const Sussies = require('../models/Sus');

const getSusHandler = (_, rep) => {
    Sussies.find().then(res => rep.send(res)).catch(console.error);
}

module.exports = getSusHandler;
