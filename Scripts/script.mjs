const apiKey = "live_MVGZ1KLNEm7dwh9VsCdArSsMC8j5wy4ekYgQrwRSinvYQXfrOZdCD8jtWiOOhzrT"
const select = document.getElementById("breedSelection");

import { getDogImage } from "./dogImages.mjs";
console.log("Select element:", select)
console.log("Import test:", getDogImage)


async function breedLoad(){
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
        });



    } catch (error) {
        console.log(`❌ Error: ${error.message}`);
    }
}

breedLoad();