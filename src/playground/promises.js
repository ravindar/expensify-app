const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    //resolve({ name: "ravindar", age: 42 });
    reject("something went wrong");
  }, 2000);
});

console.log("before");
promise
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });

console.log("after");
