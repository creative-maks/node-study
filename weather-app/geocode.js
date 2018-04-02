
const request = require('request');

var geocodeAddress = (address,callback) => {
  var encodedAddress = encodeURIComponent(address);
  request({
    uri : `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json:true
  }, (error,response,body) => {
    //console.log(body);
    if(error) {
      callback('unable to connect to google servers');
    }
    else if(body.status === 'ZERO_RESULTS'){
      callback('invalid address');
    }
    else if(body.status === 'OK') {
      callback(undefined,{
        address : body.results[0].formatted_address,
        latitude: body.results[0].geometry.location.lat,
        Longitude: body.results[0].geometry.location.lng
      });
    }
    else {
      callback(`Some error occured: ${body.status}`);
    }
  });

}

module.exports = {
  geocodeAddress:geocodeAddress
}
