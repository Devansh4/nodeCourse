console.log('Before');  //blocking
getUser(1, getRepositories);

console.log('After');   //blocking

function displayCommits(commits){
    console.log(commits);
}

function getCommits(repos){
    getCommits(repos, displayCommits);
}

function getRepositories(user)
{
    getRepositories(user.gitHubUsername, getCommits);
}
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
};

function getCommits(repo, callback){
    callback('Commit1');
}