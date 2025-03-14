const puppeteer = require('puppeteer');

const fetchArtistBackground = async (artistLink) => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    await page.goto(artistLink, {
        waitUntil: "networkidle2"
    });

    const element = await page.$('[data-testid="background-image"');

    if(element){
        const backgroundImageLink = await page.evaluate(el => el.style.backgroundImage.slice(5, -2), element);
        console.log(backgroundImageLink);
        return backgroundImageLink;
    } else {
        console.log("Background Image link was not found.")
    }

    await browser.close();
};

fetchArtistBackground("https://open.spotify.com/artist/1XgFuvRd7r5g0h844A5ZUQ");