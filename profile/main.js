// ------------------- wait for all element to load -------------------
  $(function () {
  console.log("main javascript file is working");
    
  let initEmail = $("span#email");

  const params = new URLSearchParams(window.location.search);

  if (params.has("email")) {
    
    initEmail.text("");
    // -------- set email to span element --------------
    initEmail.text(params.get("email"));
  } else {
    console.log("The param myParam is not present.");
  }

  //logout
  const logout = document.querySelector(".logout");
  logout.addEventListener("click", function (e) {
    e.preventDefault();
    window.location.href = "../index.html";
  });


  const uploadButton = document.querySelector("div.img-profile div.iconDiv");

  uploadButton.addEventListener("click", function () {
    document.querySelector("input[type=file]").click();
    //path to image file
    $("input[type=file]").on("change", function () {
      var input = this;
      if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
          $("#image").attr("src", e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
      }
    });
  });

  setInterval(() => {
    const width = window.innerWidth;

    if (width <= 425) {
      const contactLabel = document.querySelector(
        "div.form-control.contact > label"
      );
      $(contactLabel).text("");
      $(contactLabel).text("Contact");
    }
  }, 4000);

  const changeProfile = document.querySelector(".header span");

  // -------- switch to edit profile---------------
  changeProfile.addEventListener("click", function () {
    const editProfile = document.querySelector(".edit-profile");
    const profileControl = document.querySelector(".profile-control");
    profileControl.classList.remove("d-flex");
    profileControl.classList.add("d-none");

    // -----------  show edit profile --------------
    editProfile.classList.remove("d-none");
    editProfile.classList.add("d-block");

    const editHeader = document.querySelector(".header h3");
    editHeader.style.display = "flex";
  });

  $(".submit-update").click(function  (e) {
    e.preventDefault();

    const editHeader = document.querySelector(".header h3");
    editHeader.style.display = "none";

    // ---------------- get window width ----------------
    const width = window.innerWidth;
    console.log(width);

    if (width <= 425) {
      // alert("Please use a desktop to update your profile");

      const editProfile = document.querySelector(".edit-profile");
      profileInfo = document.querySelector(".profile-control .profile-info");
      // editProfile.style.display = 'none';

      const profileControl = document.querySelector(".profile-control");
      profileControl.style.height = "100vh";
      profileControl.classList.remove("d-none");
      profileControl.classList.add("d-flex");

      // -----------  show edit profile --------------
      editProfile.classList.remove("d-block");
      editProfile.classList.add("d-none");
    }


    //---------------- post data to server -----------------------
 
     (async() =>{
       console.log("self invoking function is working")

      

       //----------- get form data-------------
       const fn = document.querySelector('input#firstname').value
       const ln = document.querySelector('input#lastname').value
       const school_right = document.querySelector("input#school").value;
      const email_right = document.querySelector("input#email").value;
      const phone_right = document.querySelector("input#contact").value;

      if(fn == '' || email == ''){
        alert('please fill all fields')

        return 
      }

      const postData = {
        firstname: fn,
        lastname: ln,
        email: email_right,
        school: school_right,
        contact: phone_right,
      }

      // console.log(postData)

      console.log(fn)

      //------------------ ajax approach ---------------
      // $.ajax({
      //   type: "POST",
      //   url: "http://localhost:8000/api/user",
      //   dataType : "json",
      //   contentType: "application/json; charset=utf-8",
      //   data: JSON.stringify(postData),
      //   success: function (response) {
      //     console.log(response)
      //   }
      // });


    
       try{
          const url ='http://kojoyeboah53i-d962a2da663c.herokuapp.com/api/ordabl'

         const result = await fetch(`${url}/user`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json' // Set the content type to JSON
          },
          body: JSON.stringify(postData) // Convert user data to JSON string

         })//fetch ends here

          let res = await result.json();
          console.log(res)

    } catch(error){
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    }
    
  
     })();

  });

  // ------------------- wait for all element to load ends -------------------
});
