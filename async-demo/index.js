console.log('Before');  //blocking
getUser(1, function(user){
    getRepositories(user.gitHubUsername, (repos)=>{
        getCommits(repos, (commits)=>{
            console.log(commits);   //callback hell
        });
    });
});
console.log('After');   //blocking

//Synchronous
console.log('Before');
const user = getUser(1);
const repos = getRepositories(user.gitHubUsername);
const commits = getCommits(repos[0]);
console.log('After');

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

function getCommits(repo, callback){
    callback('Commit1');
}