console.log('response.js is working')


async function getAllUsers() {
  let wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');
                            

  const result = await fetch('https://kojoyeboah53i-d962a2da663c.herokuapp.com/api/ordabl/all-users');
  // const result = await fetch('http://localhost:9090/api/ordabl/all-users');
  const response = await result.json()
  console.log('response from server ')
    
    let cnFluid = document.createElement('div');
    cnFluid.classList.add('container-fluid');

    let profile = '';
  
     response.forEach(user => {

      profile += `
      
  

      <div class="user">
      <div class="control">
          <div class="name">
          <h3>${user.firstname} ${user.lastname}</h3>
          </div>
          <div class="edit-delete">
          <span class="material-symbols-outlined edit" id=${user.id}> edit</span>
          <span class="material-symbols-outlined delete" id=${user.id} > delete</span>
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
    wrapper.appendChild(cnFluid)

  // cnFluid.innerHTML = profile;
  const deleteBtn = wrapper.querySelectorAll('.edit-delete .delete')
  // console.log(deleteBtn)
  deleteBtn.forEach(btn => {
    // btn.addEventListener('click', () => {
    //   alert("deleting user with id  " + btn.id)
    //      fetch(`http://localhost:9090/api/ordabl/profile/${btn.id}`,{
    //     method: "DELETE",
    //     headers: {
    //       "Content-Type": "application/json"
    //     }})//fetch ends here
    //     .then((res )=> {

    //     } )
    //     .catch((err )=> {

    //     })

    // })

    //------------- confirm method ----------
    btn.addEventListener('click', () => {
     let  confirmed = confirm("you about to delete user with id  " + btn.id);

     if(confirmed  === true) {
      fetch(`https://kojoyeboah53i-d962a2da663c.herokuapp.com/api/ordabl/profile/${btn.id}`,{
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }})//fetch ends here
        .then((response )=> {
          if(response.status == 200 || response.status == 201){
            //code comes here
            console.log('deleted successfully')
            return true;
           }
           return false;

        } )
        .catch((err )=> {
            console.log(err)
        })
     }

     })
})
        


document.body.appendChild(wrapper);
}


 getAllUsers();

