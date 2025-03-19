const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("success"), 2000);
});
promise.then((result) => console.log("success"));
