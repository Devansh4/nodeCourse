const p = new Promise((resolve, reject)=>{  //initially, the state of the promise is pending
    //Kick off some async work
    //...
    setTimeout(()=>{
        //resolve(1); //if the async operation is completed successfully  //pending => resolved,fulfilled
        reject(new Error("My Promise Error"));  //if there is an error  //pending => rejected
    },2000);
});
p.then(result => console.log('Result: ',result));
p.catch(error => console.log('Error: ',error.message));