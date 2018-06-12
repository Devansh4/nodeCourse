console.log('Before');  //blocking
setTimeout(()=>{        //non-blocking asynchronous
    console.log('Reading a user from a database...');
});
console.log('After');   //blocking