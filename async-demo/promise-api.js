/*//creating a promise that has already been resolved, useful for unit testing
const p = Promise.resolve({id: 1});
p.then(result => console.log(result));*/

//creating a rejected promise
const p = Promise.reject(new Error('Reason for error...'));
p.catch(err => console.log(err));