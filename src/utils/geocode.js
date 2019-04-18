const request = require("request");

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiY2Vkcmlja2NoYW1wYWduZSIsImEiOiJjanRvdjVrcjQwMzg0NDNwYnI4NHFxMGp5In0.SYvcn0m9_WNGT64RPdN8vA&limit=1`;
  request({
    url,
    json: true
  }, (error, response) => {
    if (error) {
      return callback('Unable to connect to location services', undefined);
    }else if (response.body.features.length === 0) {
      return callback(undefined, "Unable to find location.");
    }
    const {place_name, center} = response.body.features[0];
    const latitude = center[1];
    const longitude = center[0];
      return callback(undefined, {
        latitude,
        longitude,
        location : place_name
      });
    
  });
}

module.exports = geocode