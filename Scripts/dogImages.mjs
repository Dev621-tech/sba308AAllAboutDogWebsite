const apiKey = "live_MVGZ1KLNEm7dwh9VsCdArSsMC8j5wy4ekYgQrwRSinvYQXfrOZdCD8jtWiOOhzrT"

export async function getDogImage(breedId) {
    const response = await fetch(`https://api.thedogapi.com/v1/images/search?breed_ids=${breedId}&limit=1`, {
        headers: {
            "x-api-key": apiKey
        }
    })

    const data = await response.json();

    if (data && data[0] && data[0].url){
        return data[0];
    } else {
        return null;
    }
    
};