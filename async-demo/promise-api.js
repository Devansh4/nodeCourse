const p1 = new Promise((resolve) => {    //only resolve is needed
    setTimeout(() => {
        console.log("async operation 1...");
        resolve(1);
        //reject(new Error('because something failed'));
    },2000);
});
const p2 = new Promise((resolve) => {
    setTimeout(() => {
        console.log("async operation 2...");
        resolve(2);
    },2000);
});
//running promises in parallel
Promise.all([p1, p2])   //supply an array of promises   //there is no real concurrencies(multi-thread)
.then(result => console.log(result))   //result array will have two values
.catch(err => console.log(err.message));    //if error in any one, this will show the error

//return as soon as one of the promise is completed
Promise.race([p1, p2])  
.then(result => console.log(result))  //result is the value of the first fulfilled promise
.catch(err => console.log(err.message));   