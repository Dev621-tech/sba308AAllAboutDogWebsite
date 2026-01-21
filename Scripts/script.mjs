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
        // console.log(breeds);

        breeds.forEach(breed => {
            const option = document.createElement("option");
            option.value = breed.id;
            option.textContent = breed.name;
            select.appendChild(option);

            // console.log(breed.image.url);

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


    // let image = await getDogImage(breedId);

    // if (!image || !image.url) {
    //     const refId = breedImage[breedId];
    //     if (refId) {
    //         image = { url: `https://cdn2.thedogapi.com/images/${refId}.jpg` }
    //     } else {
    //         image = null
    //     }
    // }

});