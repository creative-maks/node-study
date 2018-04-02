console.log("start");

setTimeout(() => {
  console.log("after 2 s");
},2000);

setTimeout(() => {
  console.log("after 0s");
},0);

console.log("end");
