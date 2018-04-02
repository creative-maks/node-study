var test =  new Promise((resolve,reject)=> {
  setTimeout(()=> {
    reject("It did not worked");
  },2500);
})

test.then((message) => {
  console.log("success : "+message);
}, (errorMessage) => {
  console.log("error :" + errorMessage);
})
