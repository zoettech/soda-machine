$(function() {

    
    $("#name_error_message").hide();
    $("#subject_error_message").hide();
    $("#email_error_message").hide();
    $("#message_error_message").hide();
  

    var error_name = false;
  
    var error_subject = false;
    var error_email = false;
    var error_message = false;
    //var error_retype_password = false;

    $("#name").focusout(function(){
       check_name();
    });
    
    $("#subject").focusout(function() {
       check_subject();
    });
    $("#email").focusout(function() {
       check_email();
    });
    $("#message").focusout(function() {
       check_message();
    });
    

    function check_name() {
       var pattern = /^[a-zA-Z]*$/;
       var name = $("#name").val();
       if (pattern.test(name)) {
          $("#name_error_message").hide();
          $("#name").css("border-bottom","2px solid #34F458");
       } 
       else {
          $("#name_error_message").html("Should contain only Characters");
          $("#name_error_message").show();
          $("#name").css("border-bottom","2px solid #F90A0A");
          error_name = true;
       }
       if(name !== '')
       {
        $("#name_error_message").hide();
        $("#name").css("border-bottom","2px solid #34F458");
       }else
       {
        $("#name_error_message").html("Do not Leave this Field Empty");
        $("#name_error_message").show();
        $("#name").css("border-bottom","2px solid #F90A0A");
        error_name = true;

       }
    }
    function check_message() {
       var msg = $("#message").val()
       if (msg !== '') {
          $("#message_error_message").hide();
          $("#message").css("border-bottom","2px solid #34F458");
       } else {
          $("#message_error_message").html("Do Not Leave This Field Empty");
          $("#message_error_message").show();
          $("#message").css("border-bottom","2px solid #F90A0A");
          error_message = true;
       }
    }

    function check_subject() {
        var mno=$("#subject").val();
        if (mno == '') {
            $("#subject_error_message").html("Do not leave This Filed Empty!");
            $("#subject_error_message").show();
            $("#subject").css("border-bottom","2px solid #F90A0A");
            error_subject = true;
        }
        else {
            $("#subject_error_message").hide();
            $("#subject").css("border-bottom","2px solid #34F458");
        }
    }

   

    function check_email() {
      
       var pattern = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
       var email = $("#email").val();
      
      
       if(email !== '')
       {
         if (pattern.test(email)) {
            $("#email_error_message").hide();
            $("#email").css("border-bottom","2px solid #34F458");
         } else {
            $("#email_error_message").html("Invalid Email");
            $("#email_error_message").show();
            $("#email").css("border-bottom","2px solid #F90A0A");
            error_email = true;
         }
       }else{
        $("#email_error_message").html("Do not Leave this Filed Empty");
        $("#email_error_message").show();
        $("#email").css("border-bottom","2px solid #F90A0A");
        error_email = true;
       }
    }

    $("#registration_form").submit(function() {
       error_name = false;
       error_phone = false;
       error_message = false;
       error_email = false;
     

       check_name();
       check_phone();
       check_email();
       check_message();
       

       if (error_name === false && error_phone === false && error_email === false && error_message === false) {
        Swal.fire(
            'Thank you !',
            'Your Response is reached Us !',
            'success'
          )
          return true;
       } else {
        Swal.fire(
            'Soory  !',
            'Something went Wrong !',
            'error'
          )
          return false;
       }


    });
 });