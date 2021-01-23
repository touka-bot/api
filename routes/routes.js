const anime = require(`../tools/anime`);

var appRouter = function (app) {
    app.get("/", function (req, res) {
        res.send("Unofficial 4anime API (v1)");
    });

    app.get("/fluid/api/v1/search/:title", function (req, res) {
        const url = `https://4anime.to/?s=${req.params.title.toLowerCase().replace(" ", "+")}`;
        anime.getSearchResults(url, res);
    });

    app.get("/fluid/api/v1/search/:title/episodes/:episode", function (req, res) {
        const url = `https://4anime.to/?s=${req.params.title.toLowerCase().replace(" ", "+")}`;
        anime.getSearchResults(url, res);
    });
}

module.exports = appRouter;