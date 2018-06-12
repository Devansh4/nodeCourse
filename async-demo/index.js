console.log('Before');
getUser(1, (user) => {
  getRepositories(user.gitHubUsername, (repos) => {
    getCommits(repos[0], (commits) => {
      console.log(commits);
    })
  })
});
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

function getCommits(repo, callback) {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log('Calling GitHub API...');
            callback(['commit']);
          }, 2000);
    });
}