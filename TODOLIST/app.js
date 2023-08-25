window.addEventListener('load', (e) => {
    e.preventDefault();

    const addItem = document.querySelector('.add-item span')
    console.log(addItem)

    addItem.addEventListener('click', async (e) => {
        e.preventDefault();

        try{
        const item = document.querySelector('.add-item input').value;
        if(item === "" || item == null){
            alert("please enter to do list item")
            return;
        }
        //code 
     
        const url = 'http://localhost:8000/api/create-item'
        const postData ={
            name: item
        }
        console.log(postData)
        const result = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json' // Set the content type to JSON
            },
            body: JSON.stringify(postData) // Convert user data to JSON string
  
           })
           const response = await result.json();
            console.log(response)
        // if(result.status == 200 || result.status == 201){
        //     const response = await result.json();
        //     console.log(response)
        //     const item = document.createElement('div')
        //     item.classList.add('item')
        //     item.id = response.id
        //     item.innerHTML += `
        //     <h2> ${response.name}</h2>
        //     <span class="material-symbols-outlined delete" >delete</span>
        //     `
        //    const itemContainer = document.querySelector('.to-do-container') 
        //    itemContainer.appendChild(item)
        // }


   
        }catch(err){
            console.error(err)
        }
    })
   
   
   
    // const deleteBtn = document.querySelector('span.material-symbols-outlined.delete')
    // deleteBtn.addEventListener('click', () => {
    //     alert("sdfdsf")
    // })




})





