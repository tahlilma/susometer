const Sussies = require('../models/Sus');

const createSusHandler = (req, rep) => {
   const { name, sus } = req.body;
   const payload = {
      sus: sus,
      name: name
   }
   const sussy = new Sussies(payload);
   sussy.save().then(rep.send({ saved: true })).catch(err => rep.send({ error: err }));
}

module.exports = createSusHandler;
