function inicio(req, res) {
    res.status(200).send({
        message: 'Hello word!',
    });
}

function teste(req, res) {
    res.status(200).send({
        message: 'Testing node server!',
    });
}

module.exports = { inicio, teste };