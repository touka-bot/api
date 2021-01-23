const jsdom = require("jsdom");
const fs = require('fs');
const got = require('got');
const utils = require("./utils");
const {
    JSDOM
} = jsdom;

module.exports = {
    getSearchResults(url, res) {
        return getSearchResults(url, res)
    },
    getEpisodes(url, res) {
        return getEpisodes(url, res)
    }
}

function getSearchResults(url, res) {
    got(url).then(response => {
        const dom = new JSDOM(response.body);
        const innerHTML = dom.window.document.getElementsByClassName(`container`).item(0).innerHTML;

        const respo = new Array();
        const innerDom = new JSDOM(innerHTML);
        let result = innerDom.window.document.getElementsByTagName(`a`);
        for (let i = 1; i < result.length; i++) {
            respo.push(utils.extractUrls(result.item(i).href)[0]);
        }
        res.send(respo);
    }).catch(err => {
        return err;
    });
}

function getEpisodes(url, res) {
    got(url).then(response => {
        const dom = new JSDOM(response.body);
        const innerHTML = dom.window.document.getElementsByClassName(`container`).item(0).innerHTML;

        const respo = new Array();
        const innerDom = new JSDOM(innerHTML);
        let result = innerDom.window.document.getElementsByTagName(`a`);
        for (let i = 1; i < result.length; i++) {
            respo.push(utils.extractUrls(result.item(i).href)[0]);
        }
        res.send(respo);
    }).catch(err => {
        return err;
    });
}