
const getCountry = (data) => {

    let country_set2 = Array.from(new Set(data.map((item) => {
        // console.log(item);
        const country = item.country;

        return country
    })))



    country_set2 = country_set2.map((country) => {


        // console.log('hh');
        return { name: country, value: 0 };


    })

    country_set2.forEach((country) => {

        data.map((item) => {

            if (item.country === country.name) {
                country.value = country.value + 1;
            }

            return item;

        })

    })

    country_set2 = country_set2.filter((item) => item.value > 9)

    return country_set2;

    // console.log(country_set2);



}


const getRegion = (data) => {

    let region_set2 = Array.from(new Set(data.map((item) => {
        // console.log(item);
        const region = item.region;

        return region
    })))



    region_set2 = region_set2.map((region) => {


        // console.log('hh');
        return { name: region, value: 0 };


    })

    region_set2.forEach((region) => {

        data.map((item) => {

            if (item.region === region.name) {
                region.value = region.value + 1;
            }

            return item;

        })

    })

    // console.log(region_set2);

    region_set2 = region_set2.filter((item) => item.value > 9);

    return region_set2;

}

export { getCountry, getRegion }