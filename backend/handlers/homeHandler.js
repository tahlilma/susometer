const homeHandler = (_, rep) => {
    rep.send('Routes: /getSus, /createSus');
}

module.exports = homeHandler;
