const puppeteer = require('puppeteer');

const fetchArtistBackground = async (artistLink) => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    await page.goto(artistLink, {
        waitUntil: "networkidle2"
    });

    const element = await page.$('div[data-testid="background-image"]');
    const leti = await page.$('mMx2LUixlnN_Fu45JpFB Ii9XdJaXIuKbmR1zC4Rt Yn2Ei5QZn19gria6LjZj');
    let letii = [];

    console.log(element);

    if(leti.length > 1){
        for(i=0; i < leti.length; i++){
            letii.push({i: leti[i].src});
        };
    } else {
        letii = leti;
    }

    console.log(leti);

    if(element){
        const backgroundImageLink = await page.evaluate(el => el.style.backgroundImage.slice(5, -2), element);
        console.log(backgroundImageLink);
        return backgroundImageLink;
    } else {
        console.log("Background Image link was not found.")
    }

    await browser.close();
};

fetchArtistBackground("https://open.spotify.com/artist/0LcJLqbBmaGUft1e9Mm8HV");