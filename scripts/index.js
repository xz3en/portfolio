const texts = [
    "Building applications.",
    "Programming applications.",
    "Designing applications."
];
const firstText = "Welcome to the Hazardous Pit.";
const speed = 15;
var lastRandomNumber = Math.ceil(Math.random() * texts.length);

let titleElement = null;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function typewriter() {
    const randomIndex = Math.ceil(Math.random() * texts.length);
    if (lastRandomNumber === randomIndex) return await typewriter();
    lastRandomNumber = randomIndex;
    const randomText = texts[randomIndex];
    if (!randomText) return await typewriter();
    for (var i = 0; i <= randomText.length; i++) {
        titleElement.textContent = randomText.substring(0,i);
        await sleep(speed);
    }
    await sleep(5000);
    for (var i = randomText.length; i >= 0; i--) {
        titleElement.textContent = randomText.substring(0,i);
        await sleep(speed);
    }
    return await typewriter();
}

async function init() {
    console.log("loaded");
    titleElement = document.getElementById("homepagetext");

    titleElement.textContent = "";

    for (var i = 0; i <= firstText.length; i++) {
        titleElement.textContent = firstText.substring(0,i);
        await sleep(speed);
    }
    await sleep(5000);
    for (var i = firstText.length; i >= 0; i--) {
        titleElement.textContent = firstText.substring(0,i);
        await sleep(speed);
    }
    typewriter();
}

document.onreadystatechange = () => {
    if (document.readyState === "complete") {
        init();
    }
}