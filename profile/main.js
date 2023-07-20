// ------------------- wait for all element to load -------------------
  $(function () {
    
  let initEmail = $("span#email");

  const params = new URLSearchParams(window.location.search); 

  // Check if we have the param bodmas
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

  console.log("main javascript file is working");

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

  $(".submit-update").click(function (e) {
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

    // ---------------------span  selecting elements from our webpage----------------------------
    let student_name = $("span#name");
    let school = $("span#school");
    let profile_email = $("span#email");
    let profile_phone = $("span#contact");

    // ---------------------- get form data --------------------------
    let first_name = $("input#firstname").val();
    let last_name = $("input#lastname").val();
    let school_name = $("input#school").val();
    let email = $("input#email").val();
    let phone = $("input#contact").val();

    student_name.text("");
    student_name.text(first_name + " " + last_name);
    school.text("");
    school.text(school_name);
    profile_email.text("");
    profile_email.text(email);
    profile_phone.text("");
    profile_phone.text(phone);
  });

  // ------------------- wait for all element to load ends -------------------
});
