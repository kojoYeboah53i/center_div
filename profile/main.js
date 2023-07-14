
// ------------------- wait for all element to load ------------------- 
 $(document).ready(function() {


console.log("main javascript file is working")

const uploadButton = document.querySelector('div.img-profile div.iconDiv');

uploadButton.addEventListener('click', function() {
   document.querySelector('input[type=file]').click();
   //path to image file
   let filePath = $('input[type=file]').val();
   let fileName = filePath.split('\\').pop().split('/').pop();
   console.log(filePath);
   let img =  $('div.img-profile.img.image');
    img.attr('src', filePath);

});

$('.submit-update').click(function (e) { 
    e.preventDefault();
    
    // ---------------------span  selecting elements from our webpage----------------------------
   let student_name =  $('span#name');
   let school = $('span#school');
   let profile_email = $('span#email');
   let profile_phone = $('span#contact');


// ---------------------- get form data --------------------------
   let first_name = $('input#firstname').val();
   let last_name = $('input#lastname').val();
    let school_name = $('input#school').val();
    let email = $('input#email').val();
    let phone = $('input#contact').val();

    student_name.text('');
    student_name.text(first_name+ " " +last_name);
    school.text('');
    school.text(school_name);
    profile_email.text('');
    profile_email.text(email);
    profile_phone.text('');
    profile_phone.text(phone);


    
});




});

// ------------------- wait for all element to load ends ------------------- 


