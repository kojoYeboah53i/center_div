window.addEventListener('load',async (e) => {
    e.preventDefault();

            //get available items
        const allItems = await fetch('http://localhost:8000/api/ordabl/items')
        const items = await allItems.json();

        //items is an array
        items.forEach(itm => {
            const container = document.querySelector('.to-do-container');
            const item = document.createElement('div')
            item.classList.add('item')
            item.id = itm.id
            item.innerHTML += `
            <h2> ${itm.name}</h2>
            <span class="material-symbols-outlined delete" >delete</span>
            `
            container.appendChild(item)
        })

    const addItem = document.querySelector('.add-item span')

    addItem.addEventListener('click', async (e) => {
        e.preventDefault();




        try{
        const item = document.querySelector('.add-item input').value;
        if(item === "" || item == null){
            alert("please enter to do list item")
            return;
        }
        //code 
        document.querySelector('.add-item input').value = '';

     
        const url = 'http://localhost:8000/api/ordabl/create-item'
        const postData ={
            name: item
        }
        const result = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json' // Set the content type to JSON
            },
            body: JSON.stringify(postData) // Convert user data to JSON string
  
           })
      
        if(result.status == 200 || result.status == 201){
            const response = await result.json();
            console.log(response)
            const item = document.createElement('div')
            item.classList.add('item')
            item.id = response.id
            item.innerHTML += `
            <h2> ${response.name}</h2>
            <span class="material-symbols-outlined delete" >delete</span>
            `
           const itemContainer = document.querySelector('.to-do-container') 
           itemContainer.appendChild(item)
        }

   
        }catch(err){
            console.error(err)
        }
    
     
    
    })
   
   
   
    const all_delete = document.querySelectorAll('.delete');
    all_delete.forEach(btn  =>{
    btn.addEventListener('click', async (e) => {

        //get the item itself not the delete button
     const itemITSELF =   e.target.parentElement;

     //wait for confirmation from user
      let confirmed = confirm("are u sure u want to delete item with id "  +itemITSELF.id)

      if(confirmed){
      let result = await  fetch(`https://kojoyeboah53i-d962a2da663c.herokuapp.com/api/ordabl/item/${itemITSELF.id}`,{
            method: "DELETE",
            headers: {
              "Content-Type": "application/json"
       }})

       if (result.status == 200 || result.status == 201){
        itemITSELF.classList.add('remove-deleted')

        //wait for transition to finish
        itemITSELF.addEventListener('transitionend', () => {
            itemITSELF.remove();
              })


                    }
        }

            })
        })

        
})
