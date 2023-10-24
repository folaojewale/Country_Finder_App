let fetch;

import('node-fetch').then(nodeFetch => {
    fetch = nodeFetch.default;
});

//get country
const getCountry = async (req,res) => {
    const { name } = req.query

    // Check if name is provided 
    if (!name) {
        res.status(400).json({ error: 'Missing name parameter' });
        return // Return early to prevent further execution.
    }

    try {
        //api link
        const apiURL = `https://restcountries.com/v3.1/name/${name}`
        const country = await fetch(apiURL)
    
        //if there's no results
        if(!country.ok){
            res.status(404).json({error: 'No result(s) found!'})
            return // Return early to prevent further execution.
        }
    
    //convert file to json format
    const data = await country.json()

    //query useful information
    const q =  {
        name: await data[0].name.common,
        region: await data[0].region,
        capital: await data[0].capital[0],
        languages: await data[0].languages[Object.keys(data[0].languages)[0]],
        currency: await data[0].currencies[Object.keys(data[0].currencies)[0]].name,
        population: await data[0].population,
        timezone: await data[0].timezones[0],
        flag: await data[0].flags.png,
    }
    
    res.status(200).json(q)
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = {
    getCountry
}
