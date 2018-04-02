var getUser = (id,callback) => {
  var user = {
    id : id,
    name:"nimmy"
  };
  setTimeout(()=> {
    callback(user);
  },2000);
}

getUser(234,(user) => {
  console.log(user);
})
