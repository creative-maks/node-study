const request = require('request');


var getWeather = (lat,long,callback) => {
  request({
    //uri : `https://api.darksky.net/forecast/75538fd78d891e928b25d58d199bf844/38.9656816,-77.52705089999999`,
    uri : `https://api.darksky.net/forecast/75538fd78d891e928b25d58d199bf844/${lat},${long}`,
    json:true
  }, (error,response,body) => {
    if(!error &&  response.statusCode === 200){
      callback(undefined,{
        temperature : body.currently.temperature,
        apparentTemperature : body.currently.apparentTemperature
        }
      );
    }
    else {
        callback("Unable to fetch weather",undefined);
    }
  });
}

module.exports = {
  getWeather:getWeather
}
