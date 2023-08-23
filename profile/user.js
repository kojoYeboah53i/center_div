console.log('response.js is working')


async function getAllresponses() {

  const result = await fetch('http://kojoyeboah53i-d962a2da663c.herokuapp.com/api/ordabl/all-users');
  const response = await result.json()
  console.log('response from server ')
  //  console.log(response)
  const cnFluid= document.querySelector('.container-fluid');
  let profile = '';
  
  response.forEach(user => {

      profile += `
      
  

      <div class="user">
      <div class="control">
          <div class="name">
          <h3>${user.firstname} ${user.lastname}</h3>
          </div>
          <div class="edit-delete">
          <span class="material-symbols-outlined"> edit</span>
          <span class="material-symbols-outlined"> delete</span>
        </div>
      
          </div>
          <div class="info">

          <div class="email">
          <h3>${user.email}</h3>
          </div>
          <div class="school ">
              <h3>${user.school}</h3>
          </div>
          <div class="contact">
              <h3>${user.contact}</h3>
          </div>
          </div>
          
          </div>
          `;

})

  cnFluid.innerHTML = profile;

}


getAllresponses();
