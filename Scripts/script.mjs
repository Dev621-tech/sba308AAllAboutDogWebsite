const apiKey = "live_MVGZ1KLNEm7dwh9VsCdArSsMC8j5wy4ekYgQrwRSinvYQXfrOZdCD8jtWiOOhzrT"
const select = document.getElementById("breedSelection");

import { getDogImage } from "./dogImages.mjs";

const breedData = {};
const img1 = document.getElementById("dogImage1");


async function breedLoad() {
    try {
        let response = await fetch("https://api.thedogapi.com/v1/breeds", {
            headers: {
                "x-api-key": apiKey
            }
        });

        let breeds = await response.json();
        console.log(breeds);

        breeds.forEach(breed => {
            const option = document.createElement("option");
            option.value = breed.id;
            option.textContent = breed.name;
            select.appendChild(option);

            

            breedData[breed.id] = breed;

        });





    } catch (error) {
        console.log(`❌ Error: ${error.message}`);
    }
}

breedLoad();



select.addEventListener("change", async () => {
    const breedId = select.value;
    img1.src = breedData[select.value].image.url;

    document.getElementById("breedName").textContent = breedData[select.value].name;
    document.getElementById("breedDescription").textContent = breedData[select.value].description;
    document.getElementById("breedHistory").textContent = `History: ${breedData[select.value].history}`;
    document.getElementById("breedLifeSpan").textContent =`Life Span: ${breedData[select.value].life_span} years`;
    document.getElementById("breedOrigin").textContent = `Origin: ${breedData[select.value].origin}`;
    document.getElementById("breedTemperament").textContent = `Temperament: ${breedData[select.value].temperament}`;
    document.getElementById("breedWeight").textContent = `Weight: ${breedData[select.value].weight.imperial} lbs`;


});