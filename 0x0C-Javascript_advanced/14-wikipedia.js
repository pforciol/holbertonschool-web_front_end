function createElement(data) {
    let p = document.createElement("p");
    p.innerHTML = data;
    document.body.appendChild(p);
}

function queryWikipedia(callback) {
    const req = new XMLHttpRequest();
    req.open("GET", "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*", true);
    req.onload = () => {
        const res = JSON.parse(req.responseText);
        const pages = res.query.pages;
        for (let key of Object.keys(pages)) {
            callback(pages[key].extract);
        }
    };
    req.send();
}

queryWikipedia(createElement);
