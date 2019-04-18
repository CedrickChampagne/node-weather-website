const request = require("request");

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/1bb50f6f8db26fe1ca6660388ca54c99/${latitude},${longitude}`

    request({
        url,
        json: true
    }, (error, {body}) => {
        if (error) {
            return callback("Unable to connect to weather service.");
        } else if (body.error) {
            return callback("Unable to find the location. Try another search.");
        } 
        const {temperature, precipProbability} = body.currently;
      
            return callback(undefined,`${body.hourly.summary} It's currently ${temperature} degrees and there is a ${precipProbability}% chances of rain.`);
        
    })
};


module.exports = forecast;