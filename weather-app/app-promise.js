const yargs = require('yargs');
const request = require('request');
const axios = require('axios');

var options = {
  demand:true,
  alias:'address',
  describe: 'Address',
  string : true
};
var argv = yargs
  .options({
    a: options
  })
  .help()
  .argv;

  var encodedAddress = encodeURIComponent(argv.address);
  var url = `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

  axios.get(url).then((response) => {
    if(response.data.status === 'OVER_QUERY_LIMIT'){
      throw new Error("Over the query limit")
    }
    var lat = response.data.results[0].geometry.location.lat;
    var long = response.data.results[0].geometry.location.lat;
    console.log(`Formatted address : ${response.data.results[0].formatted_address}`);

    var weatherurl = `https://api.darksky.net/forecast/75538fd78d891e928b25d58d199bf844/${lat},${long}`;
    return axios.get(weatherurl);
  }).then((response) => {
    var temp = response.data.currently.temperature;
    var apparent = response.data.currently.apparentTemperature;
    console.log(`current temperature is ${temp}. But it feels like ${apparent}`);
  }).catch((e) => {
    console.log(e.message);
  })
