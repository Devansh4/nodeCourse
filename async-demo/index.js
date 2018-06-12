console.log('Before');  //blocking
const user = getUser(1);
console.log(user);
console.log('After');   //blocking

function getUser(id)
{
    setTimeout(()=>{        //non-blocking asynchronous
        console.log('Reading a user from a database...');
        return {                    //what we are returning will be available to the function call after 2 seconds, so is undefined
            id: id,
            gitHubUsername: 'dc'
        }
    },2000);
}