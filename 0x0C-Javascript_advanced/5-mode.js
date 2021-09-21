function changeMode(size, weight, transform, background, color) {
    return function () {
        document.documentElement.style.fontSize = size;
        document.documentElement.style.fontWeight = weight;
        document.documentElement.style.textTransform = transform;
        document.documentElement.style.backgroundColor = background;
        document.documentElement.style.color = color;
    };
}

function main() {
    let spooky = changeMode(9, "bold", "uppercase", "pink", "green");
    let darkMode = changeMode(12, "bold", "capitalize", "black", "white");
    let screamMode = changeMode(12, "normal", "lowercase", "white", "black");

    let p = document.createElement("p");
    p.innerText = "Welcome Holberton!";
    document.body.appendChild(p);

    const spookyBtn = document.createElement("button");
    spookyBtn.innerText = "Spooky";
    spookyBtn.setAttribute("id", "spooky");
    document.body.appendChild(spookyBtn);
    document.getElementById("spooky").addEventListener("click", spooky);

    const dmBtn = document.createElement("button");
    dmBtn.innerText = "Dark Mode";
    dmBtn.setAttribute("id", "darkmode");
    document.body.appendChild(dmBtn);
    document.getElementById("darkmode").addEventListener("click", darkMode);

    const smBtn = document.createElement("button");
    smBtn.innerText = "Scream Mode";
    smBtn.setAttribute("id", "screammode");
    document.body.appendChild(smBtn);
    document.getElementById("screammode").addEventListener("click", screamMode);
}

main();
