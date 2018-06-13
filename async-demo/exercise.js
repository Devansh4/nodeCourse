async function myExercise(){
  const customer = await getCustomer(1);
  console.log(customer);
  if(customer.isGold)
  {
      const movies = await getTopMovies();
      console.log(movies);
      await sendEmail(customer.email);
      console.log('Email sent');
  }
}
myExercise();
  
  function getCustomer(id) {
      return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve({ 
              id: 1, 
              name: 'Mosh Hamedani', 
              isGold: true, 
              email: 'email' 
            });
          }, 4000); 
      });
  }
  
  function getTopMovies() {
      return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(['movie1', 'movie2']);
          }, 4000);
      });
  }
  
  function sendEmail(email, movies, callback) {
      return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve();
          }, 4000);
      });
  }