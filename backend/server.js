const dotenv = require('dotenv');
const mongoose = require('mongoose');
const fastify = require('fastify')({ logger: true });
fastify.register(require('fastify-cors'), { origin: true, credentials: true });

dotenv.config();

const PORT = process.env.PORT || 3000;
const DB = process.env.DB_URI;

const homeHandler = require('./handlers/homeHandler');
const getSusHandler = require('./handlers/getSusHandler');
const createSusHandler = require('./handlers/createSusHandler');

fastify.get('/', homeHandler);
fastify.get('/getSus', getSusHandler);
fastify.post('/createSus', createSusHandler);

const start = async () => {
    try {
        await fastify.listen(PORT, '0.0.0.0');
    } catch (error) {
        fastify.log.error(error);
        process.exit(1);
    }
}

mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => start())
    .catch(console.error);
