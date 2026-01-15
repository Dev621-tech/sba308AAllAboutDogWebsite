const apiKey = "live_MVGZ1KLNEm7dwh9VsCdArSsMC8j5wy4ekYgQrwRSinvYQXfrOZdCD8jtWiOOhzrT"

export async function getDogImage(breedId) {
    const response = await fetch("https://api.thedogapi.com/v1/images/search?breed_ids=${breedId}&limit=3", {
        headers: {
            "x-api-key": apiKey
        }
    })

    const data = await response.json();
    return data[0];
};