console.log('Before');
/*getUser(1, (user) => {
  getRepositories(user.gitHubUsername, (repos) => {
    getCommits(repos[0], (commits) => {
      console.log(commits);
    })
  })
});*/
/*getUser(1)  //returns a promise
.then(user => getRepositories(user.gitHubUsername))
.then(repos => getCommits(repos[0]))
.then(commits => console.log("Commits: ",commits))
.catch(err => console.log('Error: ',err.message));  //best practise to catch*/

//Async and Await approach
async function displayCommits() {   //every await should be enclosed in an async function
const user = await getUser(1);  //whenever we are getting back a promise, we can use await
const repos = await getRepositories(user.gitHubUsername);   //it will not block and wait, our code still runs synchronously
const commits = await getCommits(repos[0]);
console.log("Commits: ",commits);
}
displayCommits();   //returns a promise that is void (once fulfilled does not resolve in a value)

console.log('After');

function getUser(id) {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log('Reading a user from a database...');
            resolve({ id: id, gitHubUsername: 'mosh' });
          }, 2000);
    });
}

function getRepositories(username) {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log('Calling GitHub API...');
            resolve(['repo1', 'repo2', 'repo3']);
          }, 2000);
    });
}

function getCommits(repo) {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log('Calling GitHub API....');
            resolve(['commit']);
          }, 2000);
    });
}