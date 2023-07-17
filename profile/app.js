// ------------------- wait for all element to load -------------------
$(document).ready(function () {
    console.log("main javascript file is working");
  
    const uploadButton = document.querySelector("div.img-profile div.iconDiv");
  
    uploadButton.addEventListener("click", function () {


    $("input[type=file]").on("change", function () {
        var input = this;
        if (input.files && input.files[0]) {
          var reader = new FileReader();
  
          reader.onload = function (e) {
              $('#image').attr("src", e.target.result);
          };
  
          reader.readAsDataURL(input.files[0]);
        }
      });


    });
  
    $(".submit-update").click(function (e) {
      e.preventDefault();
  
      // ---------------------span  selecting elements from our webpage----------------------------
      let student_name = $("span#name");
      let school = $("span#school_");
      let profile_email = $("span#email_");
      let profile_phone = $("span#contact_");
  
      // $("img").click(function () {
      //   alert("hhhh");
      // });
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
  });
  