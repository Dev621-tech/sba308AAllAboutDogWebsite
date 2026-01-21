const apiKey = "live_MVGZ1KLNEm7dwh9VsCdArSsMC8j5wy4ekYgQrwRSinvYQXfrOZdCD8jtWiOOhzrT"
const select = document.getElementById("breedSelection");

import { getDogImage } from "./dogImages.mjs";

const breedImage = {};

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


            if (breed.reference_image_id) {
                breedImage[breed.id] = breed.reference_image_id;
            };

        });





    } catch (error) {
        console.log(`❌ Error: ${error.message}`);
    }
}

breedLoad();

const img1 = document.getElementById("dogImage1");

select.addEventListener("change", async () => {
    const breedId = select.value;
    if (!breedId) return;


    let image = await getDogImage(breedId);

    if (!image || !image.url) {
        const refId = breedImage[breedId];
        if (refId) {
            image = { url: `https://cdn2.thedogapi.com/images/${refId}.jpg` }
        } else {
            image = null
        }
    }

    if (image) {
        img1.src = image.url
    } else {
        return
    }
});