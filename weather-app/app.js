const geocode = require('./geocode.js');
const yargs = require('yargs');
const request = require('request');
const argv = yargs
  .options({
    a: {
      demand:true,
      alias:'address',
      describe: 'Address',
      string : true
    }
  })
  .help()
  .argv;
  const weather = require("./weather");
  //console.log(argv);
  geocode.geocodeAddress(argv.address,(errorMessage,results) => {
    if(errorMessage) {
      console.log(errorMessage);
    } else {
      console.log(results.address);
      weather.getWeather(results.latitude,results.Longitude, (errorMessage,weatherResults) => {
        if(errorMessage){
          console.log(errorMessage);
        }else {
          console.log(`The weather is ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature}`);
        }
      });

    }
  });
//75538fd78d891e928b25d58d199bf844


//https://api.darksky.net/forecast/75538fd78d891e928b25d58d199bf844/38.9656816,-77.52705089999
