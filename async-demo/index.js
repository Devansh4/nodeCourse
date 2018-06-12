console.log('Before');  //blocking
getUser(1, function(user){
    console.log(`ID: ${user.id}`);
    console.log(`Name: ${user.gitHubUsername}`);
    //getting the repositories
    getRepositories(user.gitHubUsername, (repos)=>{
        console.log(`Repositories: ${repos}`);
    });
});
console.log('After');   //blocking

function getUser(id, callback)
{
    setTimeout(()=>{        //non-blocking asynchronous
        console.log('Reading a user from a database...');
        callback({id: id, gitHubUsername: "DC"});
    },2000);
}

function getRepositories(username, callback){
    setTimeout( ()=>{
    console.log('Calling the GitUHb API...');
    callback(['repo1','repo2','repo3']);}, 2000);
}