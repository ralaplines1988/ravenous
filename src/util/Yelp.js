const apikey = '8jKUsPrONABdEhNOsUmDQGHuuB-M9tegTD6SoOOEncqb70HQAKM2eeoFC63A92wLHCdDRhPW7wFNqTZ-Hor4y-OQFw-JqrnoxGxlQLgHJDDo4ZEH7oashWosZD1OXnYx';

export const Yelp = {
    async search(term, location, sortBy) {
        const response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apikey}`
            }
        });
        const jsonResponse = await response.json();
        if (jsonResponse.businesses) {
            return jsonResponse.businesses.map(business => {
                return {
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zip_code,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.rating
                };
            });
        }
    }
}

/*export const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apikey}`
            }
        })
        .then(response =>{
            return response.json();
        })
        .then(jsonResponse =>{
            if(jsonResponse.businesses) {
                return jsonResponse.businesses.map(business =>{
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.rating
                    };
                });
            }
        });
    }
}*/